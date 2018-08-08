//全选按钮点击事件
function allCheck(obj1, obj2) {
  for (var i = 0; i < document.querySelectorAll(obj1).length; i++) {
    document.querySelectorAll(obj1)[i].onchange = function() {
      var status = this.checked;
      for (var i = 0; i < document.querySelectorAll(obj2).length; i++) {
        // console.log(document.querySelectorAll(obj2)[i])
        document.querySelectorAll(obj2)[i].checked = status;
      }
      for (var j = 0; j < document.querySelectorAll(obj1).length; j++) {
        document.querySelectorAll(obj1)[j].checked = status;
      }
      checkedGoodsCounts("total-counts", "checked-counts");
      calcTotalPrice("total-price", ".goods-detailed");
    };
  }
}
//商品单选按钮点击事件
function getcheck(obj1, obj2) {
  for (var i = 0; i < document.querySelectorAll(obj2).length; i++) {
    document.querySelectorAll(obj2)[i].onchange = function() {
      var status = this.checked;
      if (status) {
        // document.getElementById("to-pay").onclick = function() {
        //   this.setAttribute("href", "./PlaceOrder.html");
        //   // break
        // };

        for (var i = 0; i < document.querySelectorAll(obj2).length; i++) {
          if (document.querySelectorAll(obj2)[i].checked) {
            for (var j = 0; j < document.querySelectorAll(obj1).length; j++) {
              document.querySelectorAll(obj1)[i].checked = true;
            }
          } else {
            for (var i = 0; i < document.querySelectorAll(obj1).length; i++) {
              document.querySelectorAll(obj1)[i].checked = false;
            }
          }
        }
      } else {
        for (var i = 0; i < document.querySelectorAll(obj1).length; i++) {
          document.querySelectorAll(obj1)[i].checked = false;
        }
      }
      checkedGoodsCounts("total-counts", "checked-counts");
      calcTotalPrice("total-price", ".goods-detailed");
    };
  }
}
//单件商品删除
function isDelete(obj1, obj2, obj3, obj4) {
  for (var i = 0; i < document.querySelectorAll(obj1).length; i++) {
    document.querySelectorAll(obj1)[i].onclick = function(event) {
      var target = event.target;
      if (target.className === obj2) {
        console.log(this);
        var nums = this.parentNode.querySelectorAll(obj1).length;
        console.log(nums);
        this.querySelector(obj4).style.display = "flex";
        this.querySelector(".isdelete").onclick = function() {
          if (nums === 1) {
            document.querySelector(
              obj3
            ).innerHTML = `  <img src="./images/isnull_06.jpg" alt="">`;
          }
          console.log(this);

          this.parentNode.parentNode.parentNode.parentNode.removeChild(
            this.parentNode.parentNode.parentNode
          );
          nums--;
          checkedGoodsCounts("total-counts", "checked-counts");
        };
        this.querySelector(".isnodelete").onclick = function() {
          this.parentNode.style.display = "none";
          console.log(this);
        };
      }
    };
  }
}
//数量ADD
function add(obj1, classname, classname1) {
  for (var i = 0; i < document.querySelectorAll(obj1).length; i++) {
    document.querySelectorAll(obj1)[i].onclick = function() {
      console.log(this);

      var nums = this.parentNode.querySelector(classname).innerText;
      nums++;
      this.parentNode.parentNode.querySelector(classname1).innerText = ` ￥${(
        nums *
        1 *
        79
      ).toFixed(2)}`;
      this.parentNode.querySelector(classname).innerText = nums;
    };
  }
}
//数量reduce
function reduce(obj1, classname, classname1) {
  for (var i = 0; i < document.querySelectorAll(obj1).length; i++) {
    document.querySelectorAll(obj1)[i].onclick = function() {
      console.log(this);
      var nums = this.parentNode.querySelector(classname).innerText;
      if (nums > 1) {
        nums--;
        this.parentNode.parentNode.querySelector(classname1).innerText = ` ￥${(
          nums *
          1 *
          79
        ).toFixed(2)}`;
        this.parentNode.querySelector(classname).innerText = nums;
      } else {
        this.parentNode.parentNode.querySelector(
          obj3
        ).innerText = `￥${(79).toFixed(2)}`;
      }
    };
  }
}
//删除选中项，1-多
function checkedTodelete(classname) {
  document.querySelector(classname).onclick = function() {
    this.parentNode.querySelector(".is-checked-del").style.display = "flex";
    this.parentNode.querySelector(".is-checked-del-is").onclick = function() {
      var nums = document.querySelectorAll(".goods-detailed");
      var nums1 = nums.length;
      for (var i = 0; i < nums.length; i++) {
        var ele = nums[i].querySelector(".goodss");
        if (ele.checked) {
          // this.parentNode.removeChild(this);
          ele.parentNode.parentNode.parentNode.removeChild(
            ele.parentNode.parentNode
          );
          nums1 = nums1 - 1;
        }
      }
      console.log(nums1);

      if (nums1 === 0) {
        document.querySelector(
          ".shoppingCart-main"
        ).innerHTML = `  <img src="./images/isnull_06.jpg" alt="">`;
      }
      checkedGoodsCounts("total-counts", "checked-counts");
    };
    this.parentNode.querySelector(".is-checked-del-no").onclick = function() {
      this.parentNode.style.display = "none";
    };
  };
}
//显示商品总个数，以及被选中的个数
function checkedGoodsCounts(id1, id2) {
  var nums = document.querySelectorAll(".goods-detailed");
  var nums1 = 0;
  document.getElementById(id1).innerText = nums.length;
  document.getElementById("top-count").innerText = nums.length;
  for (var i = 0; i < nums.length; i++) {
    var status = nums[i].querySelector(".goodss").checked;
    if (status) {
      nums1++;
    } else {
      nums1 = nums1;
    }
  }
  // console.log(nums1)

  document.getElementById(id2).innerText = nums1;
}
//计算总价
function calcTotalPrice(id, classname) {
  var text1 = 0;
  var obj1 = document.querySelectorAll(classname);
  for (var i = 0; i < obj1.length; i++) {
    var obj2 = obj1[i].querySelector(".goodss");
    var obj3 = obj1[i].querySelector(".small-plan");
    if (obj2.checked) {
      text1 = 1 * obj3.innerText.replace("￥", "") + text1 * 1;
      console.log(text1);
    }
  }

  document.getElementById(id).innerText = `￥${text1.toFixed(2)}`;
}
//
$.idcode.setCode();

//
//检测手机号格式以及密码验证
document.getElementById("check-btn").onclick = function() {
  var str2 = document.getElementById("password").value;
  var str1 = document.getElementById("tell-num").value;
  console.log(str1);
  console.log(str2);
  var IsBy = $.idcode.validateCode();
  // alert(IsBy);
  // console.log(IsBy);
  var re = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
  if (!re.test(str1)) {
    document.getElementById("tell-num").style.borderColor = "red";
    document.getElementById("tell-num-tips").innerText =
      "手机号码格式不正确请重新输入";
    document.getElementById("tell-num-tips").style.color = "red";
  } else {
    document.getElementById("tell-num").style.borderColor = "#babec9";
    document.getElementById("tell-num-tips").innerText = "手机号码格式正确";
    document.getElementById("tell-num-tips").style.color = "green";
    console.log(sessionStorage.keys);
    if (IsBy) {
      if (str1 == "18833527317" && str2 == "1") {
        alert("登录成功");
        document.querySelector(".wrap1").style.display = "none";
        for (var i = 0; i < document.querySelectorAll(".goodss").length; i++) {
          var status = document.querySelectorAll(".goodss")[i].checked;
          console.log(status);
          if (status) {
            document.getElementById("to-pay").onclick = function() {
              this.setAttribute("href", "./PlaceOrder.html");
              // break
            };
            break;
          } else {
            for (
              var j = 0;
              j < document.querySelectorAll(".goodss").length;
              j++
            ) {
              document.querySelectorAll(".goodss")[j].onchange = function() {
                var status = this.checked;
                console.log(status);
                if (status) {
                  document.getElementById("to-pay").onclick = function() {
                    this.setAttribute("href", "./PlaceOrder.html");
                    // break
                  };
                } else {
                  document.getElementById("to-pay").onclick = function() {
                    alert("请选择要付款的商品");
                  };
                }
              };
            }

            document.getElementById("to-pay").onclick = function() {
              alert("请选择要付款的商品");

              for (
                var i = 0;
                i < document.querySelectorAll(".goodss").length;
                i++
              ) {
                document.querySelectorAll(".goodss")[i].onclick = function() {
                  var status = this.checked;
                  console.log(status);
                  if (status) {
                    document.getElementById("to-pay").onclick = function() {
                      this.setAttribute("href", "./PlaceOrder.html");
                      // break
                    };
                  } else {
                    document.getElementById("to-pay").onclick = function() {
                      alert("请选择要付款的商品");
                    };
                  }
                };
              }
            };
          }
        }
      }

      //   var status = document.querySelectorAll(".goodss")[i].checked;
      //   if (status) {
      //     document.getElementById("to-pay").onclick = function() {
      //       this.setAttribute("href", "./PlaceOrder.html");
      //       break;
      //     };
      //   } else {
      //     alert("未选择商品，请选择");
      // document.querySelector(".wrap1").style.display = "none";
      // for (
      //   var j = 0;
      //   j < document.querySelectorAll(".goodss").length;
      //   j++
      // ) {
      //   var status1 = document.querySelectorAll(".goodss")[j].checked;
      //   if (status1) {
      //     document.getElementById("to-pay").onclick = function() {
      //       this.setAttribute("href", "./PlaceOrder.html");
      //     };
      //   } else {
      //     document.getElementById("to-pay").onclick = function() {
      //       alert("请选择要付款的商品");
      //     };
      //   }
      // }
      //   }
      // }
      else {
        alert("账号或者密码错误，请重新输入");
      }
    } else {
      alert("验证码错误");
    }
  }
};
// }
allCheck(".allChecked", ".goodss");
getcheck(".allChecked", ".goodss");
isDelete(
  ".goods-detailed",
  "deleteBtn",
  ".shoppingCart-main",
  ".isORno-delete"
);
add(".add", ".goods-counts", ".small-plan");
reduce(".reduce", ".goods-counts", ".small-plan");
checkedTodelete(".checked-delete");
checkedGoodsCounts("total-counts", "checked-counts");
calcTotalPrice("total-price", ".goods-detailed");
localStorage.setItem("password", "18833527317");
localStorage.setItem("username", "zhuhaifeng");
document.getElementById("to-pay").onclick = function() {
  document.querySelector(".wrap1").style.display = "block";
};
document.getElementById("close").onclick = function() {
  document.querySelector(".wrap1").style.display = "none";
};
