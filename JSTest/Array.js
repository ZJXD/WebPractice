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
 * 对于改变自身的方法，在使用的时候要注意，尽量避免在循环遍历中取改变原数组的项
 */

/**
 * pop() ---------------------------------------------------------------------------（二级标题）
 * pop() 用于删除数组中的最后一个元素，并返回这个元素；如果是栈的话，相当于在栈顶弹出
 */
let arr7 = ['cat', 'dog', 'cow', 'chicken', 'mouse']
let popItem = arr7.pop()
console.log('arr7 poped:', arr7)
console.log('popItem:', popItem)

/**
 * 由于设计上的巧妙，pop 可以用于类数组对象上，即“填鸭辩型”
 * 1、length 不存在，新增length 并初始化为0；length 存在，但不是数值，length 值设置为0；length 值为0；都不删除；
 * 2、length 值小于等于类数组对象属性数，在length 处删除；
 * 3、length 值大于类数组对象属性数，不操作，length 值减一；
 */
let obj1 = {
  0: 'cat',
  1: 'dog',
  2: 'cow',
  3: 'chicken',
  4: 'mouse',
  length: 'aaa'
}
let obj1_1 = {
  0: 'cat',
  1: 'dog',
  2: 'cow',
  3: 'chicken',
  4: 'mouse',
  length: 0
}
let objPopItem = Array.prototype.pop.call(obj1_1)
console.log('obj1 poped:', obj1_1)
console.log('objPopItem:', objPopItem)
//

/**
 * push() ---------------------------------------------------------------------------（二级标题）
 * push() 用于向数组末尾添加一个或者多个项，并返回新数组长度；如果是栈的话，相当于栈顶压入
 * 语法：array.push(element1,...,elementN)
 */
let arr8 = ['football', 'basketball', 'volleyball']
let pushInt = arr8.push('golfball')
console.log('arr8 pushed:', arr8)
console.log('pushInt:', pushInt)

// 利用 push 根据 length 插入元素，可以实现数组合并(这里使用 apply 和call 的结果不一样)
let arr8_1 = ['red', 'blue']
pushInt = Array.prototype.push.apply(arr8, arr8_1)
console.log('合并后数组：', arr8)
console.log('合并后长度：', pushInt)

/**
 * push 同样也可以应用于类数组对象上；
 * 1、当不存在 length 或者不能转为数值的时候，会替换第一个；length 不存在时会创建；length 为0 同；
 * 2、length 的值小于对象中属性数；相当于在 length 处插入；
 * 3、length 的值大于等于对象中属性数，在最后添加，索引会跳跃；length 也会增加；
 */
// 情形-1
let obj2 = { 0: 'football', 1: 'basketball' }
let objPushInt = Array.prototype.push.call(obj2, 'golfball')
console.log('obj2 pushed:', obj2)
console.log('objPushInt:', objPushInt)
// 情形-2
objPushInt = Array.prototype.push.call(obj2, 'volleyball')
console.log('obj2 pushed(lenght):', obj2)
console.log('objPushInt:', objPushInt)
// 情形-3
obj2.length = 100
objPushInt = Array.prototype.push.call(obj2, 'football')
console.log('obj2 pushed(lenght==):', obj2)
console.log('objPushInt:', objPushInt)

/**
 * reverse() ---------------------------------------------------------------------------（二级标题）
 * reverse() 使数组倒置，返回对数组的引用
 * 原数组改变
 */
let arr9 = [1, 2, 3, 4, 5]
console.log('arr9:', arr9)
let arr9_1 = arr9.reverse()
console.log('reverse arr9:', arr9_1)

/**
 * reverse 同样也是“填鸭辩型”的受益者，可以运用于类数组对象
 * 但是倒置元素受 length 值的影响
 * 1、length 小于2 或者不是数值，类数组对象不变；不存在 length 时也不会创建；
 * 2、length 大于等于2 但小于类数组对象属性长度时，只是倒置部分属性；
 * 3、length 值较大，类数组对象的“索引”会靠近 length 值；
 */
// 情形-1
let obj3 = { 0: 'a', 1: 'b', 2: 'c', length: 2 }
console.log('obj3:', obj3)
// 情形-2
let obj3_1 = Array.prototype.reverse.call(obj3)
console.log('obj3 reverse:', obj3_1)
// 情形-3
obj3.length = 100
obj3_1 = Array.prototype.reverse.call(obj3)
console.log('obj3 length=100 reverse:', obj3_1)

/**
 * shift() ----------------------------------------------------------------------------（二级标题）
 * shift() 删除数组的第一个元素，并返回这个元素；如果是栈的话，就是栈底弹出；
 * array.shift()
 */
let arr10 = [1, 2, 3, 4, 5]
let shiftItem = arr10.shift()
console.log('arr10 shift:', arr10)
console.log('shiftItme:', shiftItem)

/**
 * shift 在类数组对象上的使用
 * 1、length 不存在，初始化为0，length 不为数值，设置为0,length 值为0 ；都不删除；
 * 2、length 值 >0 ，删除第一个；索引重新从 0 开始；
 */
// 情形-1
let obj4 = { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 'aa' }
let objShiftItem = Array.prototype.shift.call(obj4)
console.log('obj4 shift:', obj4)
console.log('objShiftItem:', objShiftItem)
// 情形-2
obj4.length = 10
objShiftItem = Array.prototype.shift.call(obj4)
console.log('obj4 length=0 shift:', obj4)

/**
 * unshift() --------------------------------------------------------------------------（二级标题）
 * unshift() 向数组头部添加元素，可添加多个；返回新数组长度；
 * array.unshift(element1,....,elementN)
 */
let arr11 = [1, 2, 3, 4, 5]
let unshiftInt = arr11.unshift(10, 12)
console.log('arr11 unshift:', arr11, ',unshiftInt:', unshiftInt)
// 插入数组
arr11.unshift([100, 101])
console.log('arr11 unshift array:', arr11)

/**
 * unshift 在类数组对象应用
 * 1、length 不存在、不是数值、值为 0，都会把第一个替换，length 并变为1；
 * 2、length 的值小于类数组对象属性数，会把后面的挤掉；
 * 3、length 的值大于等于类数组对象属性数，在前面添加；
 */
// 情形-1
let obj5 = { 0: 'a', 1: 'b', 2: 'c', 3: 'd' }
Array.prototype.unshift.call(obj5, 100)
console.log('obj5 unshift:', obj5)
// 情形-2
Array.prototype.unshift.call(obj5, 101)
console.log('obj5 length=1 unshift:', obj5)
// 情形-3
obj5.length = 100
Array.prototype.unshift.call(obj5, 102)
console.log('obj5 length>=n unshift:', obj5)

/**
 * 数组增删对比
              Array             ArrayLike(可迭代属性长度：N)
              length 无关       无 length、length 不是数值、length=0      0<length<N              length=N（同 Array）    length>N
 pop          在尾部删除         不删除                                   删除 length 处项         在尾部删除              不删除
 push         在尾部添加         替换第一个，length 变为1                  在 length 处插入         在尾部添加              在length处添加，索引跳跃
 shift        在头部删除         不删除                                   删除第一个               在头部删除              在头部删除
 unshift      在头部添加         替换第一个，length 变为1                  在头部添加，挤掉后面      在头部添加              在头部添加
 */

/**
 * sort() ---------------------------------------------------------------------------（二级标题）
 * sort 用于对数组排序，返回排序后的数组；
 * 语法：array.sort([comparefn])
 * 可选参数：comparefn
 *  省略时：数组元素将按照各自转换为字符的 Unicode 位点进行排序(如：Boy 排在 apple 前，数字 25 排在 8 前)
 */
let arr12 = ['apple', 'Boy', 'cat', 'dog']
console.log('arr12 sorted:', arr12.sort())
arr12 = [4, 10, 20, 15]
console.log('arr12 number sorted:', arr12.sort())

/**
 * comparefn 有值：
 * 1、若 comparefn(a,b)<0，a 将排在 b 前面
 * 2、若 comparefn(a,b)=0，a 和 b 的相对位置不变
 * 3、若 comparefn(a,b)<0，a 和 b 的位置对调
 */
// 数字的comparefn 可以这么写
function compareNum(a, b) {
  return a - b
}

// 对于字符的，需要使用 localeCompare，排到正确顺序（本地 node 无效，浏览器下可以）
let arr13 = ['互', '联', '网', '改', '变', '世', '界']
let arr13_1 = arr13.sort()
let arr13_2 = ['互', '联', '网', '改', '变', '世', '界']
let arr13_3 = arr13_2.sort(function(a, b) {
  return a.localeCompare(b)
})
console.log('arr13 sort:', arr13_1, '\nby localeCompare sort:', arr13_3)

/**
 * sort 同样也可以应用于类数组对象
 * 当没有 length 属性时，不会对对象排序；也不会添加 length
 */
let obj6 = {
  0: '互',
  1: '联',
  2: '网',
  3: '改',
  4: '变',
  5: '世',
  6: '界'
}
console.log('obj6 sort:', Array.prototype.sort.call(obj6))
