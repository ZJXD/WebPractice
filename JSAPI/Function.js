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

// 函数表达式
let add = function(x, y) {
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

// 参会括号内的局部变量，外部也不可访问
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
let fact = x => (x == 0 ? 1 : x * fact(x - 1))
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

/**
 * bind() --------------------------------------------------------------------------
 */
// bind(thisArg[,arg1...]) 函数可以改变当前函数的 this 指向，指向的是第一个参数

// 参数 thisArg，要绑定的 this
// 1、有传入，这个传入的值就是要绑定的 this
// 2、new 的时候，忽略该值，函数原函数的 this
// 3、如果参数列表为空，执行作用域的 this 视为新函数的 thisArg

// 下面是对 bind 后的函数进行 new，绑定的 this 被忽略（对应上面的 2）
let obj1 = {
  name: 'zht',
  age: 25
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
