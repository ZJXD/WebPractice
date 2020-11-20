/**
 * 根据屏幕变化，自动更改 html 的 font-size
 */

function setRem() {
  const htmlWidth = document.body && document.body.offsetWidth
  const htmlEle = document.getElementsByTagName('html')[0]

  // 默认是在 1920 下 16px，那么对应比例缩放
  htmlEle.style.fontSize = htmlWidth ? (htmlWidth / 1920 * 16 + 'px') : '16px'
}

setRem()

// onresize 回调数组
window.resizeCallbackList = [setRem]
debugger
window.onresize = () => {
  window.resizeCallbackList.map(callback => {
    callback()
  })
}
