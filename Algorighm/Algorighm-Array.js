/**
 * 1、合并两个有序数组并去重 -------------------------------------------
 */

/**
 * 使用 Set 的去重实现
 *  主要 Set 的用法，需要使用 new 并且只能接收一个数组
 * @param {Array} arr1 
 * @param {Arra1} arr2 
 * @returns 合并后的有序去重数组
 */
function unionArray(arr1,arr2) {
  const newSet = new Set(arr1)
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
  const arrT = []
  arr1.map(item=>{
    !arrT.includes(item) && arrT.push(item)
  })
  arr2.map(item=>{
    !arrT.includes(item) && arrT.push(item)
  })

  return arrT.sort()
}

/**
 * 对其中一个遍历去重
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns 合并后的有序去重数组
 */
function unionArray2(arr1,arr2) {
  // let arrT = arr1.reduce((pre,next)=>{
  //   pre.includes(next) || pre.push(next)
  //   return pre
  // },[])
  let arrT = JSON.parse(JSON.stringify(arr1))

  arrT = arr2.reduce((pre,next)=>{
    pre.includes(next) || pre.push(next)
    return pre
  },arrT)

  return arrT.sort()
}

const arr1 = [1,2,3,5,6,8]
const arr2 = [2,4,5,7,8,9]
console.log(unionArray2(arr1,arr2),arr1)


const set1 = new Set()
set1.add(1)
console.log(set1)

set1.add(2).add(1)
console.log(set1)
