/**
 * 1、合并两个有序数组并去重 -------------------------------------------
 */

/**
 * 使用 Set 的去重实现
 * @param {Array} arr1 
 * @param {Arra1} arr2 
 * @returns 合并后的有序去重数组
 */
function unionArray(arr1,arr2) {
  const newSet = new Set(arr1,arr2)
  arr2.map(item=>{
    newSet.add(item)
  })
  return [...newSet].sort()
}

/**
 * 对其中一个遍历去重
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns 合并后的有序去重数组
 */
function unionArray1(arr1,arr2) {
  arr2.map(item=>{
    !arr1.includes(item) && arr1.push(item)
  })

  return arr1.sort()
}

const arr1 = [1,2,3,5,6,8]
const arr2 = [2,4,5,6,8,9]
console.log(unionArray1(arr1,arr2))
