/**
 * 本文档是 Array 基础
 * 参考：http://louiszhai.github.io/2017/04/28/array/
 */

console.log('Array property:', Object.getOwnPropertyNames(Array))

/**
 * Array 构造器 --------------------------------------------------------------------------------（一级标题）
 * 用于创建一个新的数组。
 * 同对象字面量
 */

// 对象字面量方式
let arr = [1, 2]
// 构造器方式
let arr1 = Array(1, 2)
console.log(arr === arr1)
console.log('arr:', arr, 'arr1:', arr1)

// 一、使用构造器
// 1、是使用 new 还是函数调用的方式：在 ECMA 给的解释中，都是一样的；
// 2、当只有一个且为数字的参数时，表示创建数组长度；0个或两个及以上，作为数组元素；
arr1 = Array(4)
console.log('array 1 参数:', arr1)

/**
 * ES6 新增构造函数方法 ---------------------------------------------------------------------------（一级标题）
 */
// 一、Array.of：用于将参数依次转化为数组的项；即使只有一个参数也是作为数组的项；若是需要数组包裹元素，推荐这个；
let arr2 = Array.of(4, 5, 6)
console.log('arr2 by Array.of:', arr2)

/**
 * 二、Array.from：用于从一个可迭代对象创建数组；设计初衷是快速便捷创建新数组；
 * Array.from(arrayLike[,processingFn[,thisAry]])
 * 第一个参数：类似数组的对象，必选；
 * 第二个参数：加工函数，新数组会经过这个函数加工再返回，可选；
 * 第三个参数：this 作用域，表示加工函数执行时 this 的值，可选；
 */
// 当使用 function 和箭头函数时，中间打印结果会不一样
let obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
let arr3 = Array.from(
  obj,
  function(value, index) {
    console.log(value, index, this, arguments.length)
    return value.repeat(3) // 必须指定返回，否则返回的是 undefined
  },
  obj
)

// 不需要指定 this 时，完全可以用箭头函数，也不用返回
let arr4 = Array.from(obj, value => value.repeat(3))
console.log('arr3 by Array.from:', arr3)
console.log('arr4 by Array.from:', arr4)

// 可以作为参数的可迭代对象有：string、set、map、arguments
console.log('array from String', Array.from('abc'))
console.log('array from Set', Array.from(new Set(['abc', 'def'])))
console.log(
  'array from Map',
  Array.from(
    new Map([
      [1, 'abc'],
      [2, 'def']
    ])
  )
)
function fn() {
  return Array.from(arguments)
}
console.log('array from arguments:', fn(1, 2, 3))

// 一个重要使用场景：生成一个从 0 到 n 的数组
console.log(
  '0-n array:',
  Array.from({ length: 10 }, (v, i) => i)
)

/**
 * Array.isArray() ------------------------------------------------------------------------------（一级标题）
 */

// 用来判断一个变量是否是数组类型。JS 的弱类型机制，这个对于初学者判断变量类型很重要。

/**
 * 一、为什么要用 Array.isArray？
 * 不用这个还有很多方法可以：
 */
let arr5 = []
// instanceof
console.log('instanceof', arr5 instanceof Array)
// constructor
console.log('constructor:', arr5.constructor === Array)
// Array.prototype.isPrototypeOf
console.log('isPrototypeOf:', Array.prototype.isPrototypeOf(arr5))
// Object.getPrototypeOf
console.log('getPrototypeOf', Object.getPrototypeOf(arr5) === Array.prototype)
// Object.prototype.toString
console.log(
  'prototype.tostring',
  Object.prototype.toString.apply(arr5) === '[object Array]'
)

// 对于上面判断是否是数组，有一些情况下是不行的，如下：
// 1、如下
let arr6 = { __proto__: Array.prototype } // 上面的监测都是 true，但是这一块 arr6 就部署数组
// 2、在多页面后系统间，由于每一个页面的 Array 引用地址都不一样，在其他页面监测本页面的数组，会不准确
// 可以验证 2 的方法是：浏览器 F12 在 console 中打印：Object.getOwnPropertyNames(Array)，输出的结果不一样。
// 3、但是对于最后一种方法：Object.prototype.toString 是可以的（可以去撩面试官）

// 所以从上面分析，使用 Array.isArray 方便简单很多
console.log(
  'Array.isArray: arr5:',
  Array.isArray(arr5),
  ',arr6:',
  Array.isArray(arr6)
)

// 通过 Object.prototype.toString 去判断变量类型，是各大主流库的标准；下面是用该方法实现
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
}

/**
 * Array 原型 ------------------------------------------------------------------------------------（一级标题）
 * 继承的常识告诉我们，JS 中的数组的方法全部来自于 Array.prototype
 * 和其他构造函数一样，可以通过扩展 Array.prototype 来增加数组的方法
 * 而且 Array.prototype 本身就是一个数组
 */

console.log('Array.prototype is Array:', Array.isArray(Array.prototype))
console.log(
  'Array.prototype is Array:',
  Object.prototype.toString.call(Array.prototype) === '[object Array]'
)
console.log('Array property:', Object.getOwnPropertyNames(Array.prototype))

/**
 * Array 改变自身的9个方法 ------------------------------------------------------------------------（一级标题）
 */
