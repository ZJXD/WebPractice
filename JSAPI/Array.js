/**
 * 本文档是 Array 基础
 * 参考：http://louiszhai.github.io/2017/04/28/array/
 */

console.log('Array property:', Object.getOwnropertyNames(Array))

/**
 * Array 构造器 --------------------------------------------------------------------------------（一级标题）
 * 用于创建一个新的数组。
 * 同对象字面量
 */
//#region Array 构造器
// 对象字面量方式
let arr = [1, 2]
// 构造器方式
let arr1 = Array(1, 2)
console.log(arr === arr1)
console.log('arr:', arr, 'arr1:', arr1)

let arr1_1 = Array()
console.log(arr1_1)

// 一、使用构造器
// 1、是使用 new 还是函数调用的方式：在 ECMA 给的解释中，都是一样的；
// 2、当只有一个且为数字的参数时，表示创建数组长度；0个或两个及以上，作为数组元素；
arr1 = Array(4)
console.log('array 1 参数:', arr1)
arr1 = Array()
console.log('array 0 参数:', arr1)
arr1 = Array(1,2,3,4)
console.log('array 2 参数以上:', arr1)
//#endregion

/**
 * ES6 新增构造函数方法 -------------------------------------------------------------------------（一级标题）
 */
//#region ES6 新增构造函数方法
// 一、Array.of：用于将参数依次转化为数组的项；即使只有一个参数也是作为数组的项；若是需要数组包裹元素，推荐这个；
// 和 Array 区别(一个参数)
let arr2 = Array.of(2)
console.log('arr2 by Array.of:', arr2)
arr2 = Array.of(4, 5, 6)
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
  function(value, index){
    console.log(value, index, this, arguments.length)
    return value.repeat(3) // 必须指定返回，否则返回的是 undefined
  },
  obj
)
console.log(arr3)

// 不需要指定 this 时，完全可以用箭头函数，也不用返回
let arr4 = Array.from(obj, (value) => value.repeat(3))
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
      [2, 'def'],
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
//#endregion

/**
 * Array.isArray() ------------------------------------------------------------------------------（一级标题）
 */
//#region Array.idArray()
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
console.log('prototype.tostring',Object.prototype.toString.apply(arr5) === '[object Array]')

// 对于上面判断是否是数组，有一些情况下是不行的，如下：
// 1、如下
let arr6 = { __proto__: Array.prototype } // 上面的判断都是 true，但是这一块 arr6 就不是数组
// 2、在多页面系统中，由于每一个页面的 Array 引用地址都不一样，在其他页面监测本页面的数组，会不准确
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
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
}
//#endregion

/**
 * Array 原型 ------------------------------------------------------------------------------------（一级标题）
 * 继承的常识告诉我们，JS 中的数组的方法全部来自于 Array.prototype
 * 和其他构造函数一样，可以通过扩展 Array.prototype 来增加数组的方法
 * 而且 Array.prototype 本身就是一个数组
 */
//#region Array 原型
console.log('Array.prototype is Array:', Array.isArray(Array.prototype))
console.log(
  'Array.prototype is Array:',
  Object.prototype.toString.call(Array.prototype) === '[object Array]'
)
console.log('Array property:', Object.getOwnPropertyNames(Array.prototype))
//#endregion

/**
 * Array 改变自身的9个方法 ------------------------------------------------------------------------（一级标题）
 * 对于改变自身的方法，在使用的时候要注意，尽量避免在循环遍历中取改变原数组的项
 */
//#region Array 改变自身的9个方法
/**
 * pop() ---------------------------------------------------------------------------（二级标题）
 * pop() 用于删除数组中的最后一个元素，并返回这个元素；如果是栈的话，相当于在栈顶弹出
 * 语法：array.pop()
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
  length: 'aaa',
}
let obj1_1 = {
  0: 'cat',
  1: 'dog',
  2: 'cow',
  3: 'chicken',
  4: 'mouse',
  length: 5,
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

// 博客园代码样式 ---------------------------------------------------------------------------（二级标题）
// <script src="https://blog-static.cnblogs.com/files/zhurong/highlight.pack.js"></script>
// <script>
// var preElements = document.getElementsByTagName('pre');
// for (let i = 0; i < preElements.length; i++) {
//   const element = preElements[i];
//   let codeElement = document.createElement('code')
//   codeElement.setAttribute('class','language-javascript')
//   codeElement.innerHTML = element.innerHTML
//   element.innerHTML = ''
//   element.appendChild(codeElement)
// }

// console.log('添加 code')
// setTimeout(() => {
//   hljs.initHighlightingOnLoad();
//   console.log('Highlight load')
// }, 1000);
// </script>

/**
 * push 同样也可以应用于类数组对象上；
 * length 正确匹配属性个数，直接添加并 length+1
 * 1、当不存在 length 或者不能转为数值的时候，会替换第一个；length 不存在时会创建；length 为0 同；
 * 2、length 的值小于对象中属性个数；相当于在 length 处插入；
 * 3、length 的值大于等于对象中属性数，在最后添加，索引会跳跃；length 也会增加；
 */

// 当 length 正确匹配属性个数
let obj = { 0: 'football', 1: 'basketball',length :2 }
let objPushInt = Array.prototype.push.call(obj, 'golfball')
console.log('obj pushed:', obj) // obj pushed: { '0': 'football', '1': 'basketball', '2': 'golfball', length: 3 }
console.log('objPushInt:', objPushInt)  // objPushInt: 3

// 情形-1：length 不存在
let obj2 = { 0: 'football', 1: 'basketball' }
objPushInt = Array.prototype.push.call(obj2, 'golfball')
console.log('obj2 pushed:', obj2) // obj2 pushed: { '0': 'golfball', '1': 'basketball', length: 1 }
console.log('objPushInt:', objPushInt)  // objPushInt: 1
// 情形-2：length 小于属性个数
objPushInt = Array.prototype.push.call(obj2, 'volleyball') 
console.log('obj2 pushed(lenght):', obj2) // obj2 pushed(lenght): { '0': 'golfball', '1': 'volleyball', length: 2 }
console.log('objPushInt:', objPushInt)  // objPushInt: 2
// 情形-3：length 大于属性个数
obj2.length = 100
objPushInt = Array.prototype.push.call(obj2, 'football')
console.log('obj2 pushed(lenght==):', obj2) // obj2 pushed(lenght==): { '0': 'golfball', '1': 'volleyball', '100': 'football', length: 101 }
console.log('objPushInt:', objPushInt)  // objPushInt: 101

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
let arr13_3 = arr13_2.sort(function (a, b) {
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
  6: '界',
}
console.log('obj6 sort:', Array.prototype.sort.call(obj6))

/**
 * splice() ---------------------------------------------------------------------------（二级标题）
 * splice 用于新元素替换旧元素，来改变数组；要维持原数组的引用，就地删除或者新增；
 * 语法：array.splice(start,deleteCount,[item1[,item2]....])
 */

/**
 * 参数说明：
 * 1、start：开始删除的索引；start 大于 length，则不删除；负值，是从 length+start 位置处删除，相加后还为负值，从0处开始删除；
 * 2、deleteCount：删除的个数；0 不删除，但应该至少添加一个元素；大于 start 后面的元素个数，后面全部删除；
 * 3、itemN：要添加的项；
 * 4、返回值：删除的数组，没有删除，返回空数组；
 */
let arr14 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let spliceArr = arr14.splice(4, 3, 10, 11, 12, 15)
console.log('arr14 spliced:', arr14, '\nspliceArr:', spliceArr)

spliceArr = arr14.splice(-8, 1)
console.log('arr14 spliced start=-8:', arr14, '\nspliceArr:', spliceArr)
spliceArr = arr14.splice(-15, 1)
console.log('arr14 spliced start=-15:', arr14, '\nspliceArr:', spliceArr)

// 删除数组中的某个元素(当不存在时，把最后一个删除了，所以要判断)
arr14.splice(arr14.indexOf(3), 1)
console.log('arr14 delete 3:', arr14)

// 可以用 splice 改变 const 声明的数组？
function changeArr() {
  const arr = [1, 2, 3, 4, 5, 6]
  arr[2] = 100
  console.log(arr)
  arr.splice(4, 1)
  console.log(arr)
}
changeArr()

/**
 * splice 同样也适用于类数组对象
 * 1、不存在length，添加length，初始化为0；length 不是数值，设置为0；length 为0 ；都不删除
 */
let obj7 = { 0: 'a', 1: 'b', 2: 'c', length: 1 }
let objSpliceItem = Array.prototype.splice.call(obj7, 2, 1)
console.log('obj7 spliced:', obj7, '\nobjSpliceItem:', objSpliceItem)

/**
 * copyWithin() ----------------------------------------------------------------------（二级标题）
 * copyWithin 用于数组内元素的替换，替换元素和被替换元素都是数组内的；不会改变原数组长度；
 * 语法：copyWithin(target,start,[end=this.length])
 */

/**
 * 参数说明：
 * 1、target：目标元素，将被替换掉元素的索引；
 * 2、start：替换元素在数组中的起始索引；
 * 3、end：可选，默认为数组长度；end 小于 start时，不会替换；start 和 end 决定了替换和被替换的长度；
 * 4、返回：返回改变后数组的引用；
 */
let arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let copyWithinArr = arr15.copyWithin(6, 3)
// let copyWithinArr = arr15.copyWithin(6, 3, 1)
let copyWithinArr = arr15.copyWithin(6, 3, 4)
console.log('arr15 copyWinthin:', arr15, '\ncopyWithinArr:', copyWithinArr)

/**
 * copyWithin 同样也适用于类数组对象
 * length 同样对结果有影响
 * 1、length 不存在、不是数值，不替换，也不会添加改变 length 值；
 */
let obj8 = { 0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', length: 6 }
let objCopyWithinItem = Array.prototype.copyWithin.call(obj8, 1, 3, 4)
console.log('obj copyWithin:', obj8, '\nobjCopyWithinItem:', objCopyWithinItem)

/**
 * fill() --------------------------------------------------------------------------（二级标题）
 * fill 用一个固定值替换数组中起始索引到结束索引，不包括结束索引，返回改变后的数组引用；不改变原数组长度；
 * 语法：array.fill(value[,start[,end=this.length]])
 */

/**
 * 参数：
 * 1、value：要替换为的值；
 * 2、start：可选，起始位置；没有传入，全部替换；
 * 3、end：可选，结束索引，默认到最后；小于 start 不替换；
 */
let arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let arrFill = arr16.fill(100, 2, 5)
// let arrFill = arr16.fill(100)
// let arrFill = arr16.fill(100, 4)
let arrFill = arr16.fill(100, -20, -15)
// let arrFill = arr16.fill(100, 4, 2)
console.log('arr16 filled:', arr16, '\narrFill:', arrFill)

/**
 * fill 同样也适用于类数组对象
 * 1、length 不存在、值不是数值、值为 0 都不操作
 * 2、length 值小于类数组对象属性数，那就替换 length 个；
 * 3、其他同 Array；
 */
let obj9 = { 0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', length: 6 }
// let objFillItem = Array.prototype.fill.call(obj9, 'aaaa', 1, 2)
// let objFillItem = Array.prototype.fill.call(obj9, 'aaaa', 1)
let objFillItem = Array.prototype.fill.call(obj9, 'aaaa', 4, 2)
console.log('obj9 fill:', obj9, '\nobjFillItem:', objFillItem)

//#endregion

/**
 * Array 不改变自身的9个方法 ----------------------------------------------------------------------（一级标题）
 * 对于改变自身的方法，在使用的时候要注意，尽量避免在循环遍历中取改变原数组的项
 */
//#region Array 不改变自身的9个方法

/**
 * concat() ------------------------------------------------------------------------（二级标题）
 * concat 用于连接数组、多个数组、值到当前数组尾部，并返回新的数组；原数组不变；会对传入的值扁平化处理（只能处理一级，对于嵌套的不行）。
 * 返回的数组中原数组中的项是--浅复制--过去的；
 */
let arr17 = [{ a: 1 }, 2, 3, 4]
let arrConcat = arr17.concat(5, [6, 7, [8,9]])
console.log('arrConcat:', arrConcat)  // [ { a: 1 }, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ]
console.log('arr17[0] === arrConcat[0]:', arr17[0] === arrConcat[0])  // true

/**
 * concat 同样也适用于类数组对象
 * 但是其结果并不是预期的效果，可以舍弃
 */
let obj10 = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
let objConcat = Array.prototype.concat.call(obj10, 'd')
console.log('obj10 :', obj10, '\nobjConcat:', objConcat)

/**
 * join() --------------------------------------------------------------------------（二级标题）
 * join 用指定的字符连接数组中的所有项，并返回连接后的字符串；
 * 默认不传值，是用【,】连接
 */
let arr18 = ['my', 'name', 'is', 'ZHT']
let arrJoin = arr18.join()
// let arrJoin = arr18.join(' ')
// let arrJoin = arr18.join('-')
console.log('arr18:', arr18, '\narrJoin:', arrJoin)

/**
 * join 同样适用于类数组对象
 */
let obj11 = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
let objJoin = Array.prototype.join.call(obj11, '+')
console.log('obj11:', obj11, '\nobjJoin:', objJoin)
console.log('字符串重新拼接：', Array.prototype.join.call('abcdefg'))

/**
 * slice() -------------------------------------------------------------------------（二级标题）
 * slice 用于从原数组【浅复制】一部分项到新数组；返回这个新数组，原数组不变
 */

/**
 * 语法：array.slice([start[,end]])
 * 参数：
 * 1、start：可选，开始索引；负值，表示倒数第几个开始，默认 0；
 * 2、end：可选，结束索引；不包括该项；默认 length；
 */
let arr19 = [0, 1, 2, 3, 4, 5, 6, 7]
let arrSlice = arr19.slice(1, 5)
arrSlice = arr19.slice(-100, -50)
console.log('arr19:', arr19, '\narrSlice:', arrSlice)

// 当数组中有引用类型存在时，slice 生成的新数组是浅复制的
// 当新数组中的值改变时，原数组也会改变
let arr19_1 = [{ a: 100 }, 101, 102, 103]
let arrSlice_1 = arr19_1.slice(0, 3)
console.log('arr19_1:', arr19_1, '\narrSlice_1:', arrSlice_1)
arrSlice_1[0].a = 200
console.log('arr19_1:', arr19_1, '\narrSlice_1:', arrSlice_1)

/**
 * slice 在类数组中的使用(Array-like)
 */
function list() {
  return Array.prototype.slice.call(arguments)
}
let list1 = list(1, 2, 3)
console.log('list1:', list1)

/**
 * toString() ----------------------------------------------------------------------（二级标题）
 * toString 用于连接数组中各个项，并返回这个字符串；
 * 内在操作是：每个项目 toString，后使用 join 连接各个项；
 * 所以是用【,】连接的各个项
 */
let arr20 = [1, 2, 3, 4, 5, 6]
let arrToString = arr20.toString()
console.log('arr20:', arr20, '\narrToString:', arrToString)

// 对与类数组对象（Array-like）使用“填鸭辩型”也无效果，是因为 objec 中没有 join

/**
 * toLocaleString
 * 和 toString 类似，只是在转换的时候会本地化下
 */
arrToString = arr20.toString()
console.log('arr20:', arr20, '\narrToString:', arrToString)

/**
 * indexOf() -----------------------------------------------------------------------（二级标题）
 * indexOf 用于从数组中查找出第一个和给定值的索引；不存在返回 -1
 * 使用的是严格相等
 * 语法：array.indexOf(element[,start])
 * start 是开始查找位置，默认 0；
 */
let arr21 = [1, 2, 3, 4, 5, 6, 7, 8]
let arrIndexInt = arr21.indexOf(5)
console.log('arr21:', arr21, '\narrIndexInt:', arrIndexInt)

// 找出数组中某一个值的所有出现位置
function GetArrayAllIndex(arr, value) {
  let indices = []
  let idx = arr.indexOf(value)
  while (idx !== -1) {
    indices.push(idx)
    idx = arr.indexOf(value, idx + 1)
  }
  return indices
}
let allIndex = GetArrayAllIndex(
  ['a', 'b', 'c', 'd', 'e', 'a', 'g', 'a', 'a'],
  'a'
)
console.log('allIndex:', allIndex)

/**
 * lastIndexOf()
 * 是 indexOf 的逆向查找
 * 两者开始值 start ，为负值时，加上 length 就是查找的位置
 */

/**
 * includes() ----------------------------------------------------------------------（二级标题）
 * includes 用于判断数组中是否存在要查找的值；有 true ，没有 false；
 * 语法：array.includes(value[,start])
 */

let arr22 = [1, 2, 3, 4, 5, 6, 7]
console.log('arr includes 5:', arr22.includes(5))

/**
 * 和 indexOf 有一点区别：
 * includes 可以判断 NaN ，indexOf 不可用
 */

let arr22_1 = [1, 2, 3, 4, 5, NaN, 7]
console.log('arr includes NaN:', arr22_1.includes(NaN)) // true
console.log('arr indexOf NaN:', arr22_1.indexOf(NaN)) // -1

 /**
  * toSource() ----------------------------------------------------------------------（二级标题）
  * toSource 返回一个表示当前数组字面量的字符串；屏蔽原型链；
  * 非标准方法，不一定实现（node 未实现）
  */
 let arr22_1 = [1, 2, 3, 4, 5, 6, 7]
 console.log(arr22_1.toSource())

//#endregion

/**
 * 总结：
 * 对于 Array 中的方法，凡是涉及到索引位置的：
 * 1、start 默认都是 0（逆向的是 length-1）；
 * 2、end 默认都是 length-1；
 * 3、值为【负值】的，都会计算后再查找等【start/end + length】
 * 4、start 计算后 < 0，和 0 一样效果；
 * 5、start 计算后 >= length，都不会操作；
 * 6、end 计算后 >= length，是到尾；
 * 7、end 计算后 < start，操作无效；
 * 8、计算后 start - end 不在 0 - length 间，不做操作；
 */

/**
 * Array 遍历的12个方法 ---------------------------------------------------------------------------（一级标题）
 * 这些方法都用于对数组找中的项进行遍历
 */
//#region Array 中的12个遍历方法
/**
 * forEach() -----------------------------------------------------------------------（二级标题）
 * forEach 对数组中的每个项都执行一次传入的函数，如果操作了项，原数组改变，返回值 undefined；
 * 对于删除的、新增的、未初始化的会跳过，不执行；
 * 语法：array.forEach(fn[,thisArg])
 * fn：每一次执行的函数
 * thisArg：可选，传入的要绑定的 this 值
 */

let arr23 = [1, 2, 3, 4, 5, 6, 7]
const arr23_for = arr23.forEach((item, index) => {
  console.log('第', index, '个的平方是：', item * item)
  return item * item
})
console.log(arr23_for)

// 稀疏数组操作（未初始化的会跳过），null 不会跳过，会转为 0（有点坑）
arr23 = [1, 2, 3, null, , 6, 7]
arr23.forEach((item, index) => {
  console.log('第', index, '个的平方是：', item * item)
})

/**
 * map() --------------------------------------------------------------------------（二级标题）
 * map 用于返回一个新数组，是由原数组的每一个项执行一次给定的函数返回的结果；如果函数改变了项的值，原数组改变；
 * 对于删除的、新增的、未初始化的会跳过，不执行；null 不会跳过，会转为 0
 */
let arr26 = [1, 2, 3, 4, 5, 6,null, 7, 8]
let arrMap = arr26.map((item) => item * 2)  // 只有一句表达式，没有中括号，默认返回表达式的值
// let arrMap = arr26.map((item) => {item * 2})  // 返回 undefinde 组成的数组
console.log('arr26 :', arr26, '\narrMap:', arrMap)

/**
 * forEach 和 map 对比 ---------------------------------------------------------
 * 循环函数    返回值       原数组              未初始化、删除
 * forEach     undefined   根据函数是否修改      跳过
 * map         新数组      根据函数是否修改      跳过
 */

/**
 * find() -------------------------------------------------------------------------（二级标题）
 * find 根据传入的函数，查找出第一个符合要求的项，并返回这个项
 * findIndex 根据传入的函数，查找出第一个符合要求的项，并返回这个项的索引
 */
let arr28 = [1, 2, 3, 4, 5, 6, 7, 8]
function getNumber(value) {
  return value === 10
}
console.log(
  'arr28 find 5:',
  arr28.find(getNumber),
  '\nfindIndex 5:',
  arr28.findIndex(getNumber)
)

// 找出质数
function isPrime(value) {
  let start = 2
  while (start <= Math.sqrt(value)) {
    if (value % start++ < 1) {
      return false
    }
  }
  return value > 1
}
console.log('数组中的质数：', [1, 2, 3, 4, 5, 6, 7].find(isPrime))
console.log('数组中的质数：', [1, 2, 3, 4, 5, 6, 7].filter(isPrime))
console.log('数组中的质数：', [1, 2, 3, 4, 5, 6, 7].map(isPrime))

/**
 * every() ------------------------------------------------------------------------（二级标题）
 * every 用于测试数组内的所有元素是否都能通过某个指定函数的测试，返回 boole 值
 * 只有全部符合才返回 true ，否则 false
 */
let arr24 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log('arr24 all >0:',arr24.every((item) => item > 0)) // true

/**
 * some() -------------------------------------------------------------------------（二级标题）
 * some 正好和 every 相反，只要有一个满足条件的就返回 ture ，否则返回 false
 */
console.log('arr24 have >5:',arr24.some((item) => item > 5))  // true

// 数组交集（可对比多个数组）
const intersection = (list, ...args) => {
  console.log(args)
  return list.filter((item) => args.some((list) => list.includes(item)))
}

console.log(intersection([2, 1], [2, 3], [1, 4, 6])) // [2,1]
console.log(intersection([1, 2], [2,3, 4])) // []

/**
 * filter() -----------------------------------------------------------------------（二级标题）
 * filter 用于筛选数组中满足给定条件的项，并返回这些项的新数组
 */
let arr25 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(
  'arr25 中大于5的项：',
  arr25.filter((item) => item > 5)
)

// 使用 filter 创建具有非0 id 的json
var arrJson = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: 'undefined' },
]
function isNumber(obj) {
  return obj !== undefined && typeof obj === 'number' && !isNaN(obj)
}
function filterById(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true
  }
  return false
}
let arrJsonNoZeroId = arrJson.filter(filterById)
console.log('arrJsonNoZeroId :', arrJsonNoZeroId)

/**
 * reduce() -----------------------------------------------------------------------（二级标题）
 * reduce 接收一个函数，用于汇总数组所有的项，并返回这个汇总结果；
 * 语法：array.reduce(callback(accumulator,currentValue[,index[,array]])[,initialValue])
 * 参数：
 *  1、callback：传入的汇总函数
 *    a、accumulator：是 callback 上一次调用返回的值，或者initialValue的值
 *    b、currentValue：当前项
 *    c、当前项的索引
 *    d、array 当前数组
 * 2、initialValue：callback 第一次调用的 accumulator 值
 *    a、未传值时，数组的第一个为该值，上面的回调函数会执行 length-1 次
 *    b、传值，会执行 length 次
 */
let arr27 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(
  'arr27 reduce +：',
  arr27.reduce((pre, cur) => pre + cur)
)
console.log(
  'arr27 reduce + 20：',
  arr27.reduce((pre, cur) => pre + cur, 20)
)

// reduce 示例
// 1、将二维数组转为一维数组（扁平化处理）
let arr27_1 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
]
let arrReduce = arr27_1.reduce(function (a, b) {
  return a.concat(b)
}, [])
console.log('二维数组转一维数组：', arrReduce)

// 2、计算每个元素出现的次数（去重也可以）
let arr27_2 = ['abc', 'bcd', 'def', 'dgf', 'abc', 'def', 'abc']
function getNames(names, name) {
  if (name in names) {
    names[name]++
  } else {
    names[name] = 1
  }
  return names
}
let names = arr27_2.reduce(getNames, {})
console.log(
  '数组元素出现次数：',
  names,
  '\n去重后的数组：',
  Object.getOwnPropertyNames(names)
)

// 3、根据属性，对一组对象分类
let arr27_3 = [
  { name: 'abc', age: 20 },
  { name: 'dbg', age: 21 },
  { name: 'edv', age: 20 },
]
function groupBy(objectArr, property) {
  return objectArr.reduce(function (acc, curItem) {
    let key = curItem[property]
    if (acc[key]) {
      acc[key].push(curItem)
    } else {
      acc[key] = [curItem]
    }
    return acc
  }, {})
}
console.log('对象数组分类：', groupBy(arr27_3, 'age'))

/**
 * reduceRight() ------------------------------------------------------------------（二级标题）
 * reduceRight 接收一个函数，用于汇总数组所有的项，并返回这个值；从右往左
 * 用法和reduce用法一致，汇总的方向不一样（这个要注意）
 */

/**
 * entries() ----------------------------------------------------------------------（二级标题）
 * array.entries() 返回一个迭代器，对象中包含数组中每个索引的键值对；
 * array.keys() 返回一个迭代器，包含数组的索引；
 * array.values() 返回一个迭代器，包含数组值；
 */
// node:8.11.4 values 不可用
let arr29 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(
  'arr entries:',
  arr29.entries(),
  '\nkeys:',
  arr29.keys(),
  '\nvalues:',
  arr29.values()
)
console.log(
  'arr entries:',
  arr29.entries().next(),
  '\nkeys:',
  arr29.keys().next(),
  '\nvalues:',
  arr29.values().next()
)
let itr = arr29.entries()
let nex = itr.next()
console.log(nex)
while (!nex.done) {
  nex = itr.next()
  console.log(nex)
}
//#endregion

//#region Array 使用技巧 -------------------------- -----------------------------------------------（一级标题）

/**
 * 数组去重 ---------------------------------------------------（二级标题）
 */
let arr30 = [1,2,3,4,3,2,1,'ab','ac','ab','aw','ac']

// 方法 1（使用 Set）
const setArr = [... new Set(arr30)]

// 方法 2（循环遍历）
function dedupArray(arr){
  let tempArr = []
  arr.forEach(a => {
     if(!tempArr.includes(a)){
       tempArr.push(a)
     }
  })
  return tempArr
}

// 方法 3（reduce）
const arr30_reduce = arr30.reduce((pre,next)=>{
  pre.includes(next) || pre.push(next)
  return pre
},[])
console.log('arr30_reduce:',arr30_reduce)

//#endregion
