/**
 * null 和 undefined
 */

 const nullObj = null

 console.log(typeof nullObj)
 console.log(nullObj === null)
 console.log(Object.prototype.toString.call(nullObj))
 console.log(nullObj instanceof Object)
 // 报错，Right-hand side of 'instanceof' is not an object
//  console.log(nullObj instanceof null)
 // 报错，不能转换（Cannot convert undefined or null to object）
//  console.log(Object.getPrototypeOf(nullObj))

// 两者相等（绝对相等下 false）
console.log(null == undefined)

const undefinedObj = undefined
console.log(typeof undefinedObj)
console.log(undefinedObj === undefined)
console.log(Object.prototype.toString.call(undefinedObj))
console.log(undefinedObj instanceof Object)
// 报错，Right-hand side of 'instanceof' is not an object
// console.log(undefinedObj instanceof undefined)
// 报错，不能转换（Cannot convert undefined or null to object）
//  console.log(Object.getPrototypeOf(undefinedObj))
