/*
 * @Author: ZHT 
 * @Date: 2021-05-24 09:23:56 
 * @Last Modified by: ZHT
 * @Last Modified time: 2021-08-17 10:04:37
 */

/**
 * 变量提升
 *  这里的变量：参数、函数等
 */


/**
 * 变量提升
 *  1、提升是以变量所处的第一层词法作用域的（全局变量提升至全局顶层，函数内部提升至函数作用域顶层）
 *  2、提升的只是声明，赋值不会提升（所以一般都是 undefined）
 * 函数提升
 *  1、函数提升只提升函数声明，不会提升函数表达式（提升包含了函数体）
 *  2、和变量提升一样，有对应的作用域（函数作用域也一样）
 */

// 示例1 -----------------
console.log(a)
var a = 1

// 函数表达式（同名，函数声明提升了，这个在后面就会覆盖提升的）
var getVarA = function () {
  console.log('调用1')
  a = 2
}

// 函数声明（整个提升）
function getVarA() {
  console.log('调用2')
  a = 3
}

console.log(a)
getVarA()
console.log(a)


// 变量 a 的声明提升
var a

// 函数声明提升（整个提升）
function getVarA() {
  console.log('调用2')
  a = 3
}

console.log(a)
a = 1

// 函数表达式（同名函数，覆盖前面的函数体）
var getVarA = function () {
  console.log('调用1')
  a = 2
}

console.log(a)
getVarA()
console.log(a)


// 函数声明提升--------
console.log(a)
function a(){
  console('提升')
}
console.log(a)

function b(){
  function c(){}
  console.log(c)
}
console.log(b)
b()


var a = 1
function foo() {
    a = 10
    console.log(a)
    return
    function a() {}
}
foo()

var a = 1
function foo() {
    // 不管能不能执行到，也会提升 
    var a = function(){}
    // 变量覆盖
    a = 10
    console.log(a)
    return
}
foo()


// 综合示例 ----------------------------------------
// 参考走自：https://mp.weixin.qq.com/s/wPFwIpiP0Z1gRaQ0wpeEeg

function Foo(){
  getName = function(){
      console.log(1);
  };
  return this;
} 
Foo.getName = function(){
  console.log(2);
}
Foo.prototype.getName = function(){
  console.log(3);
}
var getName = function(){
  console.log(4);
}
function getName(){
  console.log(5);
}
//输出以下的输出结果
Foo.getName();
getName();
// Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();

/**
 * 在 Node 环境下，Foo().getName() 报错，浏览器下可行
 *  1、Foo.getName() 是调用静态方法，所以是 2
 *  2、如上面的函数声明会提升，下面的 var getName = 会覆盖掉提升的
 *  3、执行 Foo() 返回的 this 是 window（在浏览器环境下，此函数为全局函数，this 就是 window）
 *     在 Foo() 的时候，getName 又再次被重新覆盖，所以是 1
 *  4、已经被覆盖，所以结果同 3
 *  5、是直接调用 Foo 上的 getName，所以是 2
 *  6、因为是 Foo()，所以 new 是作用在 Foo()上，等同于 (new Foo()).getName()，这个调用的就是 prototype 上的
 *  7、new (new Foo()).getName() 所以也是 3
 */
