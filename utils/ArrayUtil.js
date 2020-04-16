/**
 * 数据 Array 一些实用方法
 */

// 数组去重
export function arrayBreakRepeat(arr) {
  const result = []
  const obj = {}
  for (const i of arr) {
    if (!obj[i]) {
      result.push(i)
      obj[i] = 1
    }
  }
  return result
}
