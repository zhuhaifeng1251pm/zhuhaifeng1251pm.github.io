//点击选中地址，对应的地址框就变成黄色-开始
var arrs = document.querySelectorAll(".contact-address");
for (var i = 0; i < arrs.length; i++) {
  arrs[i].onclick = function() {
    var nums = this.parentNode.querySelectorAll(".contact-address");
    for (var j = 0; j < nums.length; j++) {
      nums[j].style.borderColor = "#fff";
      nums[j].style.borderBottom = "1px solid #ccc";
      nums[j].style.paddingBottom = "2px";
      nums[j].querySelector(".contact-address-checkbox").checked = false;
    }
    this.style.borderColor = "#fdd901";
    this.style.borderBottomWidth = "3px";
    this.style.paddingBottom = 0;
    this.querySelector(".contact-address-checkbox").checked = true;
  };
}
//点击选中地址，对应的地址框就变成黄色-结束
//点击设置默认-开始
var defaultArrs = document.querySelectorAll(".default");
for (var i = 0; i < defaultArrs.length; i++) {
  defaultArrs[i].onclick = function(ev) {
    var oEvent = ev || event;
    oEvent.cancelBubble = true;
    oEvent.stopPropagation();
    var defaultnums = this.parentNode.parentNode.parentNode.querySelectorAll(
      ".default"
    );
    for (var j = 0; j < defaultArrs.length; j++) {
      defaultArrs[j].style.color = "#58595d";
      defaultArrs[j].style.backgroundColor = "#fff";
      defaultArrs[j].innerText = "设为默认";
    }
    this.style.color = "#fff";
    this.style.backgroundColor = "#2b2e33";
    this.innerText = "默认";
  };
}
//点击设置默认-结束
//点击删除地址信息显示是否删除-开始
var delBtnArrs = document.querySelectorAll(".delBtn");
for (var i = 0; i < delBtnArrs.length; i++) {
  delBtnArrs[i].onclick = function() {
    this.parentNode.parentNode.querySelector(".isORno-delete").style.display =
      "flex";
  };
}
//点击删除地址信息显示是否删除-结束
//确认删除-开始
var isdeleteArrs = document.querySelectorAll(".isdelete");
for (var i = 0; i < isdeleteArrs.length; i++) {
  isdeleteArrs[i].onclick = function() {
    this.parentNode.parentNode.parentNode.removeChild(
      this.parentNode.parentNode
    );
    for (var j = 0; j < document.querySelectorAll(".default").length; j++) {
      document.querySelectorAll(".default")[j].style.color = "#58595d";
      document.querySelectorAll(".default")[j].style.backgroundColor = "#fff";
      document.querySelectorAll(".default")[j].innerText = "设为默认";
    }
    document.querySelector(".default").style.color = "#fff";
    document.querySelector(".default").style.backgroundColor = "#2b2e33";
    document.querySelector(".default").innerText = "默认";
  };
}

//确认删除-结束
//取消删除-开始
var isnodeleteArrs = document.querySelectorAll(".isnodelete");
for (var i = 0; i < isnodeleteArrs.length; i++) {
  isnodeleteArrs[i].onclick = function() {
    this.parentNode.style.display = "none";
  };
}
//取消删除-结束
//加载更多的地址信息-开始
document.getElementById("to-show-more").onclick = function() {
  var newLi = document.createElement("li");
  newLi.className = "contact-address";
  newLi.innerHTML = ` <ul>
  <li>阿不来提·阿不都热西提</li>
  <li>新建维吾尔自治区博尔塔拉蒙古自治州塔格特90团乎热郭木村9连5区13号</li>
  <li>186 **** 5149</li>
</ul>
<input type="checkbox" id="address0" class="contact-address-checkbox">
<label for="address0"></label>
<div class="isORno-delete">
  <a href="javaScript:;" class="isdelete">
      <img src="./images/isdelete_06.jpg" alt=""> </a>
  <a href="javascript:;" class="isnodelete">
      <img src="./images/isnodelete_03.jpg" alt=""> </a>
</div>
<div class="buttons">
  <a href="javascript:;" class="default">设为默认</a>
  <a href="javascript:;" class="edit">编辑</a>
  <a href="javascript:;" class="delBtn">删除</a>
</div>
`;
  document.getElementById("addressAll").appendChild(newLi);
};
document.getElementById("back-shoppingcar").onclick = function() {
  window.history.back(-1);
  // window.history.go(1);
  console.log(1);
};
//加载更多的地址信息-结束
//支付方式点击事件
document.getElementById("pay-checked").onchange = function() {
  var status = this.checked;
  if (status) {
    this.parentNode.style.borderColor = "#fcd901";
  } else {
    this.parentNode.style.borderColor = "#babec9";
  }
};
//支付方式点击事件-结束
//物料方式点击事件-开始
document.getElementById("transport").onchange = function() {
  var status = this.checked;
  if (status) {
    this.parentNode.style.borderColor = "#fcd901";
  } else {
    this.parentNode.style.borderColor = "#babec9";
  }
};
//物流方式点击事件-结束
//发票开具事件-开始
document.getElementById("isDraw-bills").onchange = function() {
  var status = this.checked;
  if (status) {
    this.parentNode.style.borderColor = "#fcd901";
    document.getElementById("noDraw-bills").parentNode.style.borderColor =
      "#babec9";
    document.getElementById("noDraw-bills").checked = false;
    document.getElementById("bills-title").readOnly = false;
  } else {
    this.parentNode.style.borderColor = "#babec9";
    document.getElementById("noDraw-bills").parentNode.style.borderColor =
      "#fcd901";
    document.getElementById("noDraw-bills").checked = true;
    document.getElementById("bills-title").readOnly = true;
    document.getElementById("bills-title").value = "";
  }
};
//发票开具事件-结束
//发票不开具事件-开始
document.getElementById("noDraw-bills").onchange = function() {
  var status = this.checked;
  if (status) {
    this.parentNode.style.borderColor = "#fcd901";
    document.getElementById("isDraw-bills").parentNode.style.borderColor =
      "#babec9";
    document.getElementById("isDraw-bills").checked = false;
    document.getElementById("bills-title").readOnly = true;
    document.getElementById("bills-title").value = "";
  } else {
    this.parentNode.style.borderColor = "#babec9";
    document.getElementById("isDraw-bills").parentNode.style.borderColor =
      "#fcd901";
    document.getElementById("isDraw-bills").checked = true;
    document.getElementById("bills-title").readOnly = false;
  }
};
//发票不开具事件-结束

var goodsPrisenums = document.querySelectorAll(".goods-prise");
for (var i = 0; i < goodsPrisenums.length; i++) {
  goodsPrisenums[i].innerText = `￥79.00`;
}
document.getElementById("to-pay").onclick = function() {
  var status0 = document.getElementById("transport").checked;
  var status1 = document.getElementById("pay-checked").checked;
  if (status0 === true && status1 === true) {
    this.setAttribute("href", "./Cashier.html");
  } else {
    alert(1);
  }
};

document.getElementById("saveBtn").onclick = function() {
  var status0 = document.getElementById("transport").checked;
  var status1 = document.getElementById("pay-checked").checked;
  if (status0 === true && status1 === true) {
    document.querySelector(".box1").style.display = "none";
    document.getElementById("save-alert").onclick = function() {
      document.querySelector(".shoppingCart-main-foot-start").style.display =
        "none";
      document.querySelector(".shoppingCart-main-foot").style.display = "flex";
    };
  } else {
    if (!status1) {
      alert("请选择支付方式");
    } else if (!status0) {
      alert("请选择物流方式");
    }
  }
  document.querySelector("remarks-box1").innerText = document.querySelector(
    "remarks-box"
  ).innerText;
};
document.getElementById("save-alert").onclick = function() {
  document.querySelector(".box1").style.display = "block";
};
document.getElementById("close-toAdd-address").onclick = function() {
  document.querySelector(".wrap1").style.display = "none";
};
