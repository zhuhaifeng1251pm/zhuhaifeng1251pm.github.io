for (var i = 0; i < document.querySelectorAll('.check-box').length; i++) {
  document.querySelectorAll('.check-box')[i].onclick = function() {
    var nums = this.parentNode.querySelectorAll('.check-box')
    console.log(1)

    for (var j = 0; j < nums.length; j++) {
      nums[j].querySelector('input[type=checkbox]').checked = false
      nums[j].style.border = '1px solid #babec9'
      nums[j].style.padding = '2px'
    }
    this.style.border = '3px solid #fdd901'
    this.style.padding = 0
    this.querySelector('input[type=checkbox]').checked = true
  }
}
document.getElementById('payment').onclick = function() {
  var limitTime = 60
  var status0 = document.getElementById('apail-to-pay').checked
  var status1 = document.getElementById('wechat-to-pay').checked
  var status2 = document.getElementById('tencent-to-pay').checked
  var status3 = document.getElementById('unionpay-to-pay').checked
  if (status0) {
  } else if (status1) {
    document.querySelector(
      '.shoppingCart-main-body-Down-wechat'
    ).style.display =
      'flex'
    document.querySelector('.shoppingCart-main-body-Down').style.display =
      'none'
    document.querySelector('.shoppingCart-main-foot').style.display = 'none'

    function time() {
      limitTime--
      if (limitTime > 0) {
        document.getElementById('timeer').innerText = `60秒`
        document.querySelector('.vx-wrap').style.display = 'none'
        document.getElementById('timeer').innerText = `${limitTime}秒`
        setTimeout(time, 1000)
        document.getElementById('show-vxcode').onclick = function() {
          document.querySelector('.wrap1').style.display = 'flex'
          document.getElementById('change-order').innerText = ''
          document.getElementById('tip-contents').style.display = 'none'
          document.getElementById('need-help').style.display = 'none'
          document.getElementById('pay-done').style.marginLeft = '128px'
          document.getElementById('pay-done').innerText = '支付完成'
          document.getElementById('pay-done').onclick = function() {
            document.querySelector('.wrap1').style.display = 'none'
            document.querySelector('.shoppingCart-main').style.display = 'none'
            document.querySelector('.shoppingCart-main-success').style.display =
              'flex'
          }
          document.getElementById('close-box1').onclick = function() {
            document.querySelector('.wrap1').style.display = 'none'
            document.querySelector('.shoppingCart-main').style.display = 'none'
            document.querySelector('.shoppingCart-main-success').style.display =
              'flex'
          }
        }
        document.getElementById('checked-order-pay').onclick = function() {
          limitTime = 0
          document.querySelector(
            '.shoppingCart-main-body-Down-wechat'
          ).style.display =
            'none'
          document.querySelector('.shoppingCart-main-body-Down').style.display =
            'flex'
          document.querySelector('.shoppingCart-main-foot').style.display =
            'flex'
        }

        console.log(limitTime)
      } else {
        document.getElementById('timeer').innerText = `0秒`
        document.querySelector('.vx-wrap').style.display = 'flex'
      }
    }

    setTimeout(time, 1000)
  } else if (status2) {
  } else if (status3) {
    document.querySelector('.wrap1').style.display = 'flex'
    document.getElementById('change-order').onclick = function() {
      document.querySelector('.wrap1').style.display = 'none'
    }
    document.getElementById('pay-done').onclick = function() {
      document.querySelector('.wrap1').style.display = 'none'
      document.querySelector('.shoppingCart-main').style.display = 'none'
      document.querySelector('.shoppingCart-main-success').style.display =
        'flex'
    }
    document.getElementById('close-box1').onclick = function() {
      document.querySelector('.wrap1').style.display = 'none'
    }
  } else {
    alert('请选择付款方式 ：)')
  }
}
document.getElementById('refresh').onclick = function() {
  document.querySelector('.vx-wrap').style.display = 'none'
  document
    .getElementById('show-vxcode')
    .setAttribute('src', './images/11111.png')

  document.getElementById('show-vxcode').onclick = function() {
    document.querySelector('.wrap1').style.display = 'flex'
    document.getElementById('change-order').innerText = ''
    document.getElementById('tip-contents').style.display = 'none'
    document.getElementById('need-help').style.display = 'none'
    document.getElementById('pay-done').style.marginLeft = '128px'
    document.getElementById('pay-done').innerText = '支付完成'
    document.getElementById('pay-done').onclick = function() {
      document.querySelector('.wrap1').style.display = 'none'
      document.querySelector('.shoppingCart-main').style.display = 'none'
      document.querySelector('.shoppingCart-main-success').style.display =
        'flex'
    }
    document.getElementById('close-box1').onclick = function() {
      document.querySelector('.wrap1').style.display = 'none'
      document.querySelector('.shoppingCart-main').style.display = 'none'
      document.querySelector('.shoppingCart-main-success').style.display =
        'flex'
    }
  }
  var limitTime1 = 60
  function time1() {
    limitTime1--
    if (limitTime1 > 0) {
      document.getElementById('timeer').innerText = `${limitTime1}秒`
      setTimeout(time1, 1000)
    } else {
      document.getElementById('timeer').innerText = `0秒`
      document.querySelector('.vx-wrap').style.display = 'flex'
    }
  }
  var a = setTimeout(time1, 1000)
  document.getElementById('checked-order-pay').onclick = function() {
    limitTime1 = 0
    document.querySelector(
      '.shoppingCart-main-body-Down-wechat'
    ).style.display =
      'none'
    document.querySelector('.shoppingCart-main-body-Down').style.display =
      'flex'
    document.querySelector('.shoppingCart-main-foot').style.display = 'flex'
  }
}
