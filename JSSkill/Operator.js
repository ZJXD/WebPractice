/**
 * 运算符使用技巧
 */

/**
 * 三元运算符 ------------------------------------------------------------------
 */

function getEventTarget(evt) {
  if (!evt) {
    evt = window.event
  }
  if (!evt) {
    return
  }
  let target
  if (evt.target) {
    target = evt.target
  } else {
    target = evt.srcElement
  }

  return target
}

// 上面的使用三元运算符简写
function getEventTarget(evt) {
  evt = evt || window.evt
  return evt && (evt.target || evt.srcElement)
}

/**
 * 短路运算符 ------------------------------------------------------------------
 */
