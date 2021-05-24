/*
 * @Author: ZHT 
 * @Date: 2021-05-18 11:15:14 
 * @Last Modified by: ZHT
 * @Last Modified time: 2021-05-24 16:10:20
 */

/**
 * 力扣题库
 */

/**
 * 题库 70 -----------------------------------------------------------------------------------
 * 爬楼梯
 */

//#region 爬楼梯
// 解题思路：
// 爬 n 阶台阶，需要下面两部分
// 1、n-1 阶方法的总和
// 2、n-2 阶方法的总和
// 根据上面两个，就可以实现递归了，这样就解题了
function climbStairs(n) {
  if(n===1) return 1
  if(n===2) return 2
  let preTow = 1
  let pre = 2
  let cur = 0
  for (let index = 3; index <= n; index++) {
    cur = pre + preTow
    preTow = pre
    pre = cur
  }

  return cur
}
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
//#endregion
