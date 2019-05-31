/**
 * 定义一个打印的变量
 */
const { log } = console;

// a = 21
// b = a * 2
// log(b)

// typeof----------------------------------------
// var a
// log(typeof a)
// a = 'Hello world!'
// log(typeof a)
// a = 43
// log(typeof a)
// a = true
// log(typeof a)
// a = null
// log(typeof a)
// a = undefined
// log(typeof a)
// a = { b: "c" }
// log(typeof a)

// 函数作用域--------------------------------------------
// 函数作用域是 JS 中最常见的作用域
// 函数内部声明的变量和函数，对任何外围作用域都是“隐藏的”
// function Fun(){
//   var a = 12;
//   log(a);
//   let b = 8;
// }
// Fun()
// log(a);

// IIFE--------------------------------------------
// 常见的 IIFE 方式
// var a = 2;
// (function IIFE() {
//   let a = 3;
//   log(a);
// })();
// log(a);

// 要被执行的函数在调用和传递给它的参数之后给出
// var window = {}
// window.a  = 2;
// (function IIFE(def) {
//   def(window);
// })(function def(globe) {
//   let a = 3;
//   log(a);
//   log(globe.a);
// })

// 块儿作用域--------------------------------------------
// 简单的块儿(这里如果用 var 外部作用域可以访问index，用let 不可以)
// for (var index = 0; index < 10; index++) {
//   log(index)
// }

// log(index)

// 下面这两个是等价的
// for(let i = 0;i < 10;i ++){
//   log(i)
// }

// {
//   let j;
//   for(j = 0;j < 10; j++){
//     let i = j;  // 每次迭代都重新绑定
//     log(i)
//   }
// }
// 上面虽然是有块儿，但是index并没有在块儿内的作用域，而是污染了块外
// 在 ES6 中引入了新的关键字 let ，它的变量声明隐含的劫持了任意块儿的作用域 

// 明确块儿，在代码中使用 {} 括起来的部分就是一个块儿，这是个明确的块儿
// 块儿作用域另一个有用之处是关于闭包和释放内存的垃圾回收，
// 在块儿执行后，块儿内的东西都消失了