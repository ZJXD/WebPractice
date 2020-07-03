/**
 * String 方法属性等
 */

 /**
  * padStart、padEnd ，字符串补全长度功能 --------------------------------------------------
  * 下面题目参考：https://mp.weixin.qq.com/s/cgseAdJHxpm0fa4az16GtA
  * 
  * 用法：
  *   padStart(targetLength,[padString])
  *     targetLength：字符串目标长度，即补全后的长度，如果小于当前长度，返回当前字符串
  *     padString：补全字符串
  */

 //  将字符串 “123456” 转换为 “##3456”

 const mask = (str, maskStr = '##') =>{
   if (!str || str.length<=4) return
   // 这里 slice 不会改变 str 本身，所以后面的 length 可用
   return str.slice(-4).padStart(str.length,maskStr)
 }
