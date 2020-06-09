/**
 * 时间操作实用方法
 *  参考自：https://mp.weixin.qq.com/s/MhNgO4ZJBx8dFLrYBD9VtA （常用的 JavaScript 工具函数）
 */

// 格式化时间
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

// 给出简要说明或者格式化时间
export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

// 判断是否是同一天
export function isSameDay(timeStampA, timeStampB) {
  const dateA = new Date(timeStampA)
  const dateB = new Date(timeStampB)
  return dateA.setHours(0, 0, 0, 0) === dateB.setHours(0, 0, 0, 0)
}

// 判断是否是同一周
export function isSameWeek(timeStampA, timeStampB) {
  let A = new Date(timeStampA).setHours(0, 0, 0, 0)
  let B = new Date(timeStampB).setHours(0, 0, 0, 0)
  var oneDayTime = 1000 * 60 * 60 * 24
  var old_count = parseInt(A / oneDayTime)
  var now_other = parseInt(B / oneDayTime)
  return parseInt((old_count + 4) / 7) === parseInt((now_other + 4) / 7)
}

const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
// 获取星期几
export function getWeek(date) {
  return week[date.getDay()]
}
