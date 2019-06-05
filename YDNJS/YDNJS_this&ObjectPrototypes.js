// this 和对象原型

const { log } = console;

// this 是什么-----------------------------------------------------------------------------
// this 是一个在每个函数作用域中自动定义的特殊标识符关键字
// this工作----------------------
// function identity() {
//   return this.name.toUpperCase();
// }
// function speak() {
//   var greeting = "Hello, I'm " + identity.call(this);
//   log(greeting);
// }
// var me = {
//   name: "Kyle"
// }
// var you = {
//   name: "Reader"
// }
// identity.call(me);
// identity.call(you);
// speak.call(me);
// speak.call(you);
// this 如何指向函数对象(没有正确的指向函数对象)----------------------
// function foo(num) {
//   log("foo:" + num);
//   this.count++;
//   // foo.count++;    // 用函数的标识符作为函数对象的引用
// }
// foo.count = 0;
// for(var i = 0;i<10;i++){
//   if (i>5) {
//     // foo(i);
//     foo.call(foo,i);   // 使用 call 可以保证 this 指向函数对象
//   }
// }
// log(foo.count);
// // log(this.count);
// this 不知怎的指向函数作用域----------------------
// function foo() {
//   var a = 2;
//   this.bar();
// }
// function bar() {
//   log(this.a);
// }
// foo();
// 这里试图用this在foo和bar的词法作用域之间建立一座桥
// 试图使用 this 来进行词法作用域的查询时，“这里没有桥”
// this 是什么----------------------
// this 不是编译时绑定的，而是运行时绑定。依赖于函数执行上下文
// this 绑定和函数声明的位置没有关系，而于函数调用的方式紧密连接。
// 当一个函数被调用时，会建立一个称为执行环境的活动记录，这个记录包含函数从何处被调用的-函数如何被调用-传递了什么参数
// 这个记录的属性之一，就是函数在执行期间将被使用的 this 引用
// this 豁然开朗-----------------------------------------------------------------------------
// Call-site (调用点)----------------------
// 函数在代码中被调用的位置，有时候调用点变得不那么明确
// 调用栈：使我们到达当前执行位置而被调用的所有方法的堆栈
// function baz() {
//   // 调用栈：‘baz’
//   // 调用点：globe scope （全局作用域）
//   log("baz");
//   bar();
// }
// function bar() {
//   // 调用栈：‘baz’ -> ‘bar’
//   // 调用点：‘baz’
//   log("bar");
//   foo();
// }
// function foo() {
//   // 调用栈：‘baz’ -> ‘bar’ -> ‘foo’
//   // 调用点：‘bar’
//   log("foo");
// }
// baz();
// this 绑定规则----------------------
// 默认绑定------
// 默认绑定：独立函数调用。可以认为是在其他规则不适用时的默认
// 隐含绑定（Implicit Binding）------
// 隐含绑定：调用点是否有一个环境对象
// function foo() {
//   log(this.a);
// }
// var obj = {
//   a:2,
//   foo:foo
// }
// obj.foo();
// 如上面 foo ，无论是一开始就在 obj 中声明还是后来作为引用添加，这个函数都不被 obj 所真正“拥有”或“包含”
// 但是在调用点上，obj 对象在函数被调用的时间点上“拥有”或“包含”这个函数的引用
// function doFoo(fn){
//   fn();
// }
// var a = "oops,global";
// doFoo(obj.foo);
// 明确绑定------
// 直接指明 this 是什么，这就是明确绑定
// function foo() {
//   log(this.a);
// }
// var obj = {
//   a:2
// }
// foo.call(obj);
// 通过 foo.call() 使用明确绑定，允许我们强制函数的 this 指向 obj
// 硬绑定------
// function foo(something) {
//   log(this.a,something);
//   return this.a + something;
// }
// function bind(fn,obj) {
//   return function () {
//     return fn.apply(obj,arguments);
//   }
// }
// var obj = {
//   a:2
// };
// var bar = bind(foo,obj);
// var b = bar(3);
// log("b:" + b);
// var baz = foo.bind(obj);   // function 内建对象
// var z = baz(3);
// log("z:" + z)
// 在调用函数之前封装下，使得调用的时候都明确指定了 this
// API调用的环境------
// function foo(el) {
//   log(el,this.id);
// }
// var obj ={
//   id:'awesom'
// };
// [1,2,3].forEach(foo,obj);   // 使用 obj 作为 this 来调用 foo
// new 绑定------
// JS 构造器：仅仅是一个函数，而且是一个普通函数，只是偶然的和前置的 new 一起调用。不会依附一个类，也不会初始化一个类。
// 任何函数都可以前面加 new 调用，称为：构造器调用
// 构造器调用时：1、会创建一个全新的对象；2、这个新对象会设置为调用函数的 this 绑定

// class foo {
//   constructor(a) {
//     this.b = a;
//   }
// }

// function foo(a) {
//   this.b = a;
// }

// var c = new foo(2);

// log(c.b);

// 绑定的优先级------
// 1、函数是通过 new 被调用的吗？是，那么 this 就是新构建的对象；
// 2、函数是通过 call、apply甚至是隐藏在 bind 中的硬绑定？如果是，this 就是那个明确指定的对象；
// 3、函数是通过环境对象调用的吗？是，this 就是这个环境对象；
// 4、否则使用默认绑定；