/**
 * 字符串字面量类型（String Literal）
 */

// 用来约束取值只能是某几个值中的一个

type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById('hello'), 'scroll')
// 下面的报错，因为 dblclick 不是 EventNames 中值的一个
// handleEvent(document.getElementById('word'), 'dblclick')
