/**
 * 函数演示
 */

/**
 * 函数基本的一些特性 ---------------------------------------------------------------
 */

//#region 函数基本的一些特性
// 函数声明
function add(x, y) {
  return x + y
}
console.log(add(3, 4))
console.log(add.constructor === Function)

// 函数表达式
let add = function (x, y) {
  return x + y
}
console.log(add(4, 5))

// 参数 arguments 的使用（对于传入的参数，全部在这里面）
function argFn(a, b) {
  console.log('第一个参数:', a)
  console.log('第二个参数:', b)
  console.log('其他全部参数:', arguments)
}
argFn(1, 2, 3, 4)

// rest 参数
function restFn(a, ...rest) {
  console.log('形参:', a)
  console.log('rest 参数:', rest)
}
restFn(1, 2, 3, 4)
restFn()
restFn(9)

//#endregion

/**
 * 箭头函数 -------------------------------------------------------------------------
 */

//#region 箭头函数
// 常规写法，外部不可访问
let greeting = () => {
  let now = new Date()
  return 'Good day'
}

greeting()
Console.log('now')

// 括号内的局部变量，外部也不可访问
let greeting = (now = new Date()) => 'Good day'
greeting()
Console.log(now)

// 函数体内定义的无明确类型的，是全局变量
let greeting = () => {
  now = new Date()
  return 'Good day'
}
greeting()
console.log(now)

// 函数体内定义的 var 变量，也是局部的，外部不可访问
let greeting = () => {
  var now = new Date()
  return 'Good day'
}
greeting()
console.log(now)

// 箭头函数使用闭包
let add = (i = 0) => {
  return () => ++i
}
let v = add()
console.log(v())
console.log(v())

// 箭头函数使用递归
let fact = (x) => (x === 0 ? 1 : x * fact(x - 1))
console.log(fact(5))

//#endregion

/**
 * GeneratorFunction ---------------------------------------------------------------
 */

// 按照 MDN 上面的分类，这个是 JS 标准内置对象，但是其声明使用和函数很像就放在这里
// 是继承自 Function 的

//#region 迭代器

// 使用声明
function* gen() {
  yield 1
  yield 2
  yield 3
}
let v = gen()
console.log(typeof v)
console.log(v.next())

// yield 可以传参出来，也可以传参进去（上面就是传参出来）
function* show() {
  console.log('第一个 yield')
  let a = yield
  console.log('yield 传入的参数:', a)
}
let sh = show()
sh.next(5)
sh.next(5)

//#endregion


//#region bind、apply、call
/**
 * bind() --------------------------------------------------------------------------
 */
// bind(thisArg[,arg1...]) 函数可以改变当前函数的 this 指向，指向的是第一个参数

// 参数 thisArg，要绑定的 this
// 1、有传入，这个传入的值就是要绑定的 this
// 2、new 的时候，忽略该值，this 是原函数的 this
// 3、如果参数列表为空，执行作用域的 this 视为新函数的 thisArg

// 下面是对 bind 后的函数进行 new，绑定的 this 被忽略（对应上面的 2）
let obj1 = {
  name: 'zht',
  age: 25,
}

function Person(name) {
  this.name = name
  console.log(this.age)
}

let per = Person.bind(obj1)
let obj2 = new per('WWWW')
console.log(obj2, typeof obj2, obj2.__proto__)

//
let name = 'zht'
function Person() {
  // this.name = 'WWW'
  console.log(this.name)
}
let p = Person.bind()
Person()
p()

/**
 * call() --------------------------------------------------------------------------
 */

/**
 * 1、call 第一个参数是 this 指向的对象
 * 2、如果第一参数没有实现，默认指向 window/global
 * 3、后面的参数是要执行函数的参数（分开传递）
 */

// 手写一个 call 的实现
// 其中几个步骤：
//    1、分离参数，是否传了 this，有 用传入的，没有使用 window 或 global
//    2、当前函数设置为 this 的一个方法
//    3、执行这个方法，并删除
//    4、返回执行的结果

Function.prototype.myCall = function () {
  let [thisArg, ...args] = arguments
  if (!thisArg) {
    thisArg = typeof window === 'undefined' ? global : window
  }
  // this 的指向是当前函数
  thisArg.func = this
  // 执行函数
  let results = thisArg.func(args)
  // thisArg 上面并没有 func 所以要移除
  delete thisArg.func
  return results
}

/**
 * apply() -------------------------------------------------------------------------
 */

/**
 * 1、apply 第一个参数是 this 指向的对象
 * 2、如果第一参数没有实现，默认指向 window/global
 * 3、后面的参数是要执行函数的参数的数组，用的时候要解构（传递数组）
 */

// 手写一个 apply 的实现
Function.prototype.apply = function (thisArg, rest) {
  let results
  if (!thisArg) {
    thisArg = typeof window === 'undefined' ? global : window
  }
  // this 的指向是当前函数
  thisArg.func = this
  // 执行函数
  if (!rest) {
    results = thisArg.func()
  } else {
    results = thisArg.func(...rest)
  }
  // thisArg 上面并没有 func 所以要移除
  delete thisArg.func
  return results
}
//#endregion

/**
 * 柯里化函数 -----------------------------------------------------------------------
 */

//#region 柯里化函数
/**
 * 特点：
 * 1、把接受多个参数的函数变换为接受一个单一参数的函数
 */

const curry = (fn, ...args) =>
  args.length < fn.length
    ? (...arguments) => curry(fn, ...args, ...arguments)
    : fn(...args)

function sunFun(a, b, c) {
  return a + b + c
}
console.log(sunFun.length)
let sun = curry(sunFun)
console.log(sun(2)(3)(4))
console.log(sun(2, 3, 4))
console.log(sun(2)(3, 4))

//#endregion


/**
 * 执行脚本 ------------------------------------------------------------------------
 */
//#region 直接脚本

/**
 * Function([arg1[,arg2...]],functionBody)
 *  1、前面的是动态创建函数的参数
 *  2、要创建的函数的函数体
 */

const adder = new Function('a','b','return a+b')

console.log(adder.constructor === Function)  // true
console.log(adder.__proto__ === Function.prototype)  // true
console.log(Object.getOwnPropertyDescriptors(adder.__proto__))

console.log(eval('2+2'))  // 4
console.log(eval(new String('2+2')))  // [String: '2+2']

const adder1 = new Function('a','b',new String('return a+b'))
console.log(adder1(3,4))

var x = 5
function createFun() {
  var x = 10
  return new Function('return x;')
}
const fun1 = createFun()
console.log(fun1())   // 5

//#endregion
