var bool1 = -1 //全局变量。涉及到页面跳转的a的判断
var bool2 = -1 //全局变量。涉及到页面跳转的a的判断
var nums = document.getElementById('counts').innerText
//发售倒计时 开始
function countTime() {
  var time = new Date()
  // console.log(time);
  var setDays = '2018/8/10 24:00:00' //设置限定时间
  // var Timeout = document.getElementById("endtimes").innerText;
  // console.log(Timeout);
  var totalSeconds = setDays * 24 * 3600
  var nowTime = time.getTime()
  var endDate = new Date(setDays)
  var endTime = endDate.getTime()
  // console.log(time);
  var leftTime = endTime - nowTime
  // console.log(leftTime);
  if (leftTime >= 0) {
    setTimeout(countTime, 1000)
    var Ddays = Math.floor(leftTime / (24 * 3600 * 1000))

    var Hhours = Math.floor(((leftTime / 1000) % (24 * 3600)) / 3600)
    var Mminutes = Math.floor((((leftTime / 1000) % (24 * 3600)) % 3600) / 60)
    var Sseconds = Math.floor((((leftTime / 1000) % (24 * 3600)) % 3600) % 60)
    // console.log(Sseconds);
  }
  document.getElementById('days').innerText = Ddays
  if (Ddays < 10) {
    document.getElementById('days').innerText = '0' + Ddays
  }
  document.getElementById('hours').innerText = Hhours
  if (Hhours < 10) {
    document.getElementById('hours').innerText = '0' + Hhours
  }
  document.getElementById('minutes').innerText = Mminutes
  if (Mminutes < 10) {
    document.getElementById('minutes').innerText = '0' + Mminutes
  }
  document.getElementById('seconds').innerText = Sseconds
  if (Sseconds < 10) {
    document.getElementById('seconds').innerText = '0' + Sseconds
  }
}
countTime()
setTimeout(countTime, 1000)
//发售倒计时 结束

//商品数量减少 开始
document.getElementById('remove').onclick = function() {
  var goodsCounts = document.getElementById('counts').innerText
  if (goodsCounts > 1) {
    document.getElementById('counts').innerText = goodsCounts * 1 - 1 * 1
    totalPrice(goodsCounts)
  }
}
//商品数量减少 结束
//商品数量增加 开始
document.getElementById('add').onclick = function() {
  var goodsCounts = document.getElementById('counts').innerText
  document.getElementById('counts').innerText = goodsCounts * 1 + 1
  totalPrice(goodsCounts)
}
//商品数量增加 结束
//商品总计 开始
function totalPrice(goodsCounts) {
  var goodsCounts = document.getElementById('counts').innerText
  document.getElementById('totalPrice').innerText = 1500 * goodsCounts * 1
}
//商品总计 结束

function goodsClick(classname) {
  var This = document.querySelector(classname)
  var that = This.querySelectorAll('.goods')
  for (var i = 0; i < that.length; i++) {
    ;(function(i) {
      that[i].onclick = function() {
        for (var j = 0; j < that.length; j++) {
          that[j].style.backgroundColor = '#2b2e33'
        }
        this.style.backgroundColor = '#fdd900'
        console.log(i)
        bool1 = i
      }
    })(i)
  }
}
function goodsClick1(classname) {
  var This = document.querySelector(classname)
  var that = This.querySelectorAll('.goods')
  for (var i = 0; i < that.length; i++) {
    ;(function(i) {
      that[i].onclick = function() {
        for (var j = 0; j < that.length; j++) {
          that[j].style.backgroundColor = '#2b2e33'
        }
        this.style.backgroundColor = '#fdd900'
        console.log(i)
        bool2 = i
      }
    })(i)
  }
}
goodsClick('.goods-style')
goodsClick1('.goods-size')
console.log(bool1)
console.log(bool2)

console.log(bool1 >= 0 && bool2 >= 0)
function isToPay(bool1, bool2, nums) {
  console.log(bool1)
  console.log(bool2)
  // console.log(nums)
  if (bool1 >= 0 && bool2 >= 0) {
    document
      .getElementById('toPay')
      .setAttribute('href', './bin/JoinShopping Cart.html')
  } else {
    document.getElementById('toPay').setAttribute('href', 'javascript:;')
    alert('您未选择款式或者尺码，请选择')
  }
}
document.getElementById('toPay').onclick = function() {
  isToPay(bool1, bool2)
}
