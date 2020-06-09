/**
 * HTML 操作
 *  参考：https://mp.weixin.qq.com/s/MhNgO4ZJBx8dFLrYBD9VtA （常用的 JavaScript 工具函数）
 */

// 为元素添加 on 方法
Element.prototype.on = Element.prototype.addEventListener

NodeList.prototype.on = function (event,fn) {
  []['forEach'].call(this,function (el) {
    el.on(event,fn)
  })

  return this
}

// 为元素添加 trigger 方法
Element.prototype.trigger = function (type,data) {
  let event = document.createEvent('HTMLEvents')
  event.initEvent(type,true,true)
  event.data = data||[]
  event.eventName = type
  event.target = this
  this.dispatchEvent(event)
  return this
}

NodeList.prototype.trigger = function (event) {
  []['forEach'].call(this,function (el) {
    el['trigger'](event)
  })
  return this
}

// 转义 html 标签
function HTMLEncode(text) {
  return text.replace(/&/g,"&").replace(/\"/g,'"').replace(/</g,"<").replace(/>/g,'>')
}

function SaferHTML(templateData) {
  let s = templateData[0]
  for(let i =1;i<arguments.length;i++){
    let arg = String(arguments[i])
    s += arg.replace(/&/g,"&amp;"),replace(/</g,"&lt;").replace(/>/g,"&gt;")
    s += templateData[i]
  }
  return s
}
