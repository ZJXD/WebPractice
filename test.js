// function f() {
//     console.log('I am outside');
// }

// (function () {
//     if (false) {
//         function f() {
//             console.log('i am inside');
//         }
//     }

//     f();
// });

// const pi = 3.1415926;
// console.log(pi);

// pi = 3;
// console.log(pi);

// const f = {};
// f.prop = 123;
// console.log(f.prop);

// f = {};

// 变量解构赋值------------------------------------------------------------------------------------------------------

// 数组解构
// let [a,b,c] = [1,2,3]
// let [a,b,c] = [1,[2,3],4]
// console.log(b);

// function* fibs() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//       yield a;
//       [a, b] = [b, a + b];
//     }
//   }

//   let [first, second, third, fourth, fifth, sixth] = fibs();
//   console.log(sixth);


// 对象解构
// let {sin,cos,tan} = Math;
const {
  log
} = console;
// log(sin(45));

// const node = {
//     loc :{
//         start:{
//             line:1,
//             column:5
//         }
//     }
// };

// let {loc,loc:{start},loc:{start:{line}} } = node;
// log(loc,start,line);

// let arr = [1,2,3]
// let {0:first,[arr.length -1]:last} = arr;
// log(first,last);

// 字符串解构
// const [a,b,c,d,e] = 'hello';
// let {length:len} = 'hello';
// log(a,b,c,d,e,len);

// 数值和布尔解构
// let {toString:s} = 123;
// log(s);
// log(s === Number.prototype.toString);
// let {toString:b} = false;
// log(b);
// log(b === Boolean.prototype.toString);


// 函数参数解构
// function add([x,y]) {
//     return x+y;
// }
// log(add([1,2]));

// log([[1,2],[3,4]].map(([a,b])=>a+b));

// 使用默认值
// function move({x=0,y=0}={}) {
//     return [x,y];
// }
// log(move({x:3,y:8}));
// log(move({y:7}));
// log(move({}));
// log(move());

// 圆括号的使用
// let {x:a} = {};
// let ({x:c}) = {};   // 会报错
// log(a);
// log(c);


// 字符串的扩展------------------------------------------------------------------------------------------------------

// 字符串 charPointAt
// let s = '吉a';
// log(s.length);
// log(s.charAt(0));
// log(s.charAt(1));
// log(s.charCodeAt(0));
// log(s.codePointAt(0));

// String.fromCodePoint
// log(String.fromCharCode(0x20BB7));
// log(String.fromCodePoint(0x20BB7));

// 字符串遍历器
// for (let code of s) {
//     log(code);
// }

// Unicode 正规化，同一个字符的不同表现，统一
// log('\u01D1'.normalize()==='\u004F\u030C'.normalize());

// 字符串 定位、判定
// let s = 'hello world!';
// log(s.indexOf('o'));
// log(s.includes('ell'));
// log(s.startsWith('hel'));
// log(s.endsWith('world'));

// repead 返回新字符串，重复次数后新的
// log('ese'.repeat(3));
// log('ese'.repeat(2.8));

// 字符串补全
// log('x'.padStart(4,'12'));
// log('x'.padEnd(4,'12'));
// log('x'.padStart(4));

//字符串模板，反引号标识，
// let name = 'Jike';
// log(`${Date.now()}:Hello ${name},how are you!`);
// 变量要用 ${}包含，内部可以进行运算、引用对象属性
// let x = 1,y = 2;
// log(`${x} + ${y * 2} = ${x + y * 2}`);
// 还可以调函数，嵌套等
// const tmpl = addrs => `
//   <table>
//   ${addrs.map(addr => `
//     <tr><td>${addr.first}</td></tr>
//     <tr><td>${addr.last}</td></tr>
//   `).join('')}
//   </table>
// `;
// const data = [
//     { first: '<Jane>', last: 'Bond' },
//     { first: 'Lars', last: '<Croft>' }
// ];

// log(tmpl(data));


// 闭包------------------------------------------------------------------------------------------------------

// 词法环境：词法作用域
// function init() {
//   var name = "Mozilla"; // name 是一个被 init 创建的局部变量
//   function displayName() { // displayName() 是内部函数,一个闭包
//       alert(name); // 使用了父函数中声明的变量
//   }
//   displayName();
// }
// init();

// 闭包
// function makeFunc() {
//   var name = "Mozilla";
//   function displayName() {
//     log(name);
//   }

//   return displayName;
// }

// myFunc = makeFunc();
// myFunc();

// 有意思的闭包
// 这里 makeAdder 是一个函数工厂，创建指定值和其参数相加求和的函数
// add5 和 add10 都是闭包，共享相同的函数定义，但是保存了不同的词法环境
// function makeAdder(x) {
//   return function (y){
//     return x + y;
//   }
// }

// add5 = makeAdder(5);
// add10 = makeAdder(10);
// log(add5(2));
// log(add10(2));

// 实用的闭包
// 闭包允许将函数和其所操作的某些数据（环境）相关联起来，这个和面向对象很相似。
// 所以当你使用只有一个方法的对象的时候，都可以用闭包

// 用闭包模拟私有方法
// Counter ，立即执行的匿名函数体
// var Counter = (function () {
//   var privateCounter = 0;

//   function changeBy(val) {
//     privateCounter += val;
//   }

//   return {
//     increment: function () {
//       changeBy(1);
//     },
//     decrement: function () {
//       changeBy(-1);
//     },
//     value: function () {
//       return privateCounter;
//     }
//   }
// })();

// log(Counter.value());
// Counter.increment();
// Counter.increment();
// log(Counter.value());
// Counter.decrement();
// log(Counter.value());

// 上面一个是匿名函数，这个可以实例化多个计数器
// 像这样，在一个闭包内修改变量，不会影响另外一个闭包中的变量
// var makeCounter = function () {
//   var privateCounter = 0;

//   function changeBy(val) {
//     privateCounter += val;
//   }

//   return {
//     increment: function () {
//       changeBy(1);
//     },
//     decrement: function () {
//       changeBy(-1);
//     },
//     value: function () {
//       return privateCounter;
//     }
//   }
// }

// var counter1 = makeCounter();
// var counter2 = makeCounter();
// log(counter1.value());
// counter1.increment();
// counter1.increment();
// log(counter1.value());
// counter1.decrement();
// log(counter1.value());
// log(counter2.value());

// class Test{
//   constructor(){
//     this.name = 'aim';
//     this.age = 30;

//     this.Number;
//     this.getNumber();
//   }

//   getNumber(){
//     this.Number = 123;
//   }
//   say(){
//     log(`Name:${this.name},Age:${this.age},Number:${this.Number}`);
//   }
// }

// let test = new Test();
// test.say();

// ...(扩展符或者扩展运算符)------------------------------------------------------------------------------------------------------
// 这里对(...)(数组、对象扩展符，也支持Set)。这里的扩展根据不同的类型，扩展不一样
// 数组是可以重复的
// let array1 = [1,2,3,4,5]
// let array2 = [3,4,5,6,7,8]
// log([...array1,...array2])

// 对于上面的如果是Set，结果就会不一样
// let set1 = new Set([1,2,3,4,5])
// let set2 = new Set([3,4,5,6,7,8])
// log(new Set([...set1,...set2]))

// 扩展符在数组-----------------------------
// 数组添加到另一个数组尾部
// ES5的 写法
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// Array.prototype.push.apply(arr1, arr2);
 
// ES6 的写法
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// arr1.push(...arr2);

// 数组合并
// ES5的合并数组
// arr1.concat(arr2, arr3);
 
// ES6的合并数组
// [...arr1, ...arr2, ...arr3]

// 下面是对对象的扩展符操作------------------
// const streetModule = {
//   getters: 'street'
// }

// const shopModule = {
//   actions: 'shopAction'
// }

// const jcsjStore = {streetModule, shopModule}

// const unitModule = {
//   getters: 'unit'
// }

// const userModule = {
//   actions: 'user'
// }

// const yywhStore = {unitModule, userModule}

// let modules = Object.assign({},jcsjStore,yywhStore)
// let modeles1 = {...jcsjStore,...yywhStore}
// log('modules:',modules)
// log('modeles1:',modeles1)


// Set------------------------------------------------------------------------------------------------------
// 类似于数组，但是成员中的值都是唯一的，没有重复的值

// let s = new Set();

// [2,3,4,5,3,4,2,5].forEach(x => s.add(x));
// log(s)

// 初始化时可以接受数组、对象
// let set1 = new Set([1,2,3,4,7,2,3]);
// log([...set1])

// let set2 = new Set(document.querySelectorAll('div'));
// log(set2.size)

// 可以对数组、字符串去重
// let array = [1,2,4,5,7,8,2,2]
// log([...new Set(array)])
// log([...new Set('abdabese')].join(''))

