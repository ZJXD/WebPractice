/**
 * 作用域与闭包 （章节）
 * 定义一个打印的变量
 */
const { log } = console;

// a = 21
// b = a * 2
// log(b)

// typeof--------------------------------------------------------------------------------------
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

// 作用域----------------------------------------------------------------------------------------
// 编译器 引擎 作用域 三者之间相互对话
// LHS（Left Hand Side）左手边
// RHS 右手边 
// 这里主要区别是：LHS 主要是对变量进行赋值操作，RHS 是取值操作
// 处理上会有不一样，例如有无该变量的时候是否报错

// 当前作用域、嵌套作用域，在当前作用域没有找到变量，会一层层向上查找所有嵌套作用域，直到全局作用域为止


// 作用域模型：词法作用域、动态作用域--------------------------------------------------------------
// JS 中使用的是 词法作用域  JavaScript
// 一旦找到第一个匹配，作用域查询就停止了
// 相同的标识符可以在不同的作用域层中被指定，这叫做 遮蔽

// 不管函数是在哪里被调用，或者什么时候被调用，其词法作用域都是由其定义的位置所决定的

// 绕过词法作用域的：
// eval：动态语句，会修改当前词法作用域。
// with：会凭空制造出一个全新的词法作用域，所有的嵌套层作用域都没有的时候，是全局的


// 函数、块儿作用域-------------------------------------------------------------------------------
// 函数作用域能隐藏函数内的变量
// 避免和其他作用域有冲突  视频墙
// 函数声明和函数表达式：以 function 开始的是声明，否则就是函数表达式
// 函数表达式可以隐藏变量，同时又不会污染全局

// 函数作用域--------------------------------------------------------------------------------------
// 函数作用域是 JS 中最常见的作用域
// 函数内部声明的变量和函数，对任何外围作用域都是“隐藏的”
// function Fun(){
//   var a = 12;
//   log(a);
//   let b = 8;
// }
// Fun()
// log(a);

// IIFE------------------------------------------------------------------------------------------
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

// 块儿作用域---------------------------------------------------------------------------------------
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

// 提升--------------------------------------------------------------------------------------------
// 虽然函数作用域和块儿作用域行为规则都是一样的，但是关于声明的变量如何附着在作用域上有一个微妙的细节

// a = 2;
// var a;
// log(a);

// log(b);
// var b = 2;
// 对于上面两个示例，如果声明变量的时候都用 let ，则会报错：ReferenceError

// 这里来说下编译器：在代码的任何部分执行前，说要的声明，变量和函数都会首先被处理。
// 对于 var a = 2; JavaScript 认为是两个语句：var a；和 a = 2；。第一个语句，声明，在编译阶段处理；第二个语句，赋值，为了执行阶段留在原处
// 从上面的解释来看，我们所看到的代码实际上是分两部分的，一部分在编辑阶段处理，一部分在执行阶段执行。相当于过了两遍。

// 从上面的解释来看，所有的变量和函数声明都从代码流中的位置“移动”到代码的顶端，这就产生了“提升”这个名词。
// 这里提升是只是声明，其他都不会提升。代码的逻辑不会改变。

// 函数声明会被提升，但是函数表达式不会提升

// foo();
// var foo = function () {
//   log(2);
// }
// function foo() {
//   log(1);
// }
// foo();
// 上面打印出来的是 1， 这个是因为函数会首先被提升，然后才是变量。var foo 这个因为重复会被忽视。但是函数声明会覆盖前面的


// 作用域闭包--------------------------------------------------------------------------------------------
// 在 JavaScript 中闭包无所不在，你只是必须认出它并接纳它。
// 闭包定义：闭包就是函数能够记住并访问它的词法作用域，即使这个函数在它的词法作用域之外执行。

// function  foo() {
//   var a = 2;
//   function bar() {
//     log(a);
//   }
//   return bar;
// }

// var baz = foo();
// baz();
// foo 返回的 bar 赋值给了 baz，baz是在 foo 的作用域外面执行的，但是能访问 foo 作用域。
// bar 依然拥有对那个作用域的引用，这个引用就是闭包。

// 无论我们使用什么样的方法将内部函数 传递 到它的词法作用域之外，
// 它都将维护一个指向它最开始被声明时的作用域引用，
// 而且无论我们什么时候执行它，这个闭包就好被行使。

// function wait(message) {
//   setTimeout(function timer() {
//     log(message);
//   },1000);
// }

// wait("Hello, closure!");
// 上面的示例中，timer 拥有覆盖wait(...)的闭包，在传递给 setTimeout 后，过了1000豪秒，仍然可以访问 message

// 无论何时何地，只有你将函数作为头等的值并将他们传递出去，就可能看到这些函数行使闭包。

// 循环+闭包--------------------------------
// for(let i = 1;i <= 5; i++){
//   setTimeout(() => {
//     log(i);
//   }, 1000);
// }
// 对于上面的循环，使用 var 声明 i 的时候，打印的都是 6，
// 因为在最后回调的时候，都闭包在同一个共享的全局作用域上。

// 模块--------------------------------
// function CoolModule(params) {
//   var something = 'cool';
//   var another = [1,2,3];

//   function doSomething() {
//     log(something);
//   }

//   function doAnother(){
//     log(another.join('!'));
//   }

//   return {
//     doSomething:doSomething,
//     doAnother:doAnother
//   }
// }

// var foo = CoolModule();
// foo.doSomething();
// foo.doAnother();

// 上面这种模式就是 "模块"
// 1、CoolModule 只是一个函数，只有被调用才能成为一个被创建的模块实例，
// 没有外部函数的执行，内部作用域的创建和闭包都不会发生
// 2、CoolModule 返回的是一个对象，这个对象拥有指向内部函数的引用，但没有指向内部变量引用，
// 这样就能保持隐藏的和私有的，可以认为返回的对象就是 “模块的共有API”

// var foo = (function CoolModule(id) {
//   function change() {
//     publickAPI.identity = identify2;
//   }

//   function identify1() {
//     log(id);
//   }
//   function identify2() {
//     log(id.toUpperCase());
//   }

//   var publickAPI = {
//     change: change,
//     identity: identify1
//   }

//   return publickAPI;
// })("foo module");

// foo.identity();
// foo.change();
// foo.identity();
// 上面这个是返回的对象进行命名，并可以从内部修改这个模块。

var MyModules = (function Manager() {
  var modules = {};
  function define(name, deps, impl) {
    for(var i = 0;i < deps.length; i++){
      deps[i] = modules[deps[i]]
    }

    modules[name] = impl.apply(impl,deps);
  }

  function get(name) {
    return modules[name];
  }

  return {
    define: define,
    get: get
  }
})();

MyModules.define('bar',[],function () {
  function hello(who) {
    return "Let me introduce " + who;
  }
  return {
    hello: hello
  };
});

MyModules.define('foo',['bar'],function (bar) {
  var hungry = 'hippo';
  function awesome() {
    log(bar.hello(hungry).toUpperCase());
  }

  return {
    awesome: awesome
  }
});

var bar = MyModules.get('bar');
var foo = MyModules.get('foo');
log(bar.hello('Jon'));
foo.awesome();
// 现代的模块，模块管理器没有什么特殊的“魔法”，只是满足了模块模式的两个性质。



// 词法作用域，和动态作用域
// function foo() {
//   log(a);
// }

// function bar() {
//   var a = 3;
//   foo();
// }

// var a = 2;
// bar();