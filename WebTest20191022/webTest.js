const { log } = console

/**
 * 题目：1
 * 说明：map、parseInt
 *      map 中的 callback 通常只接收一个参数，但是 map 传的参数不只一个
 *      parseInt 会消耗两个参数，所以 map 传的值就影响了预期的结果
 *      参考： https: //developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

let mapTest = ['1', '3', '10'].map(parseInt)
console.log(mapTest)

/**
 * 题目：2
 * 说明：this 用法
 *      在 show 内的第一个 fn()，属于简单函数调用，所以 this 指向全局，输出 10
 *      后面的一个 arguments[0](),此时 fn() 是 arguments 的一员，这时的作用域就是 arguments，但是 arguments 没有 number 属性，输出 undefined
 */
var number = 10

function fn() {
  console.log(this.number)
}
var obj = {
  number: 2,
  show: function(fn) {
    this.number = 3
    fn()
    arguments[0]()
  },
}
obj.show(fn)

/**
 * 题目：3 padding-top %
 * 说明：padding - top 在使用 % 时， 其值的意义是： 定义基于父元素宽度的百分比上内边距（父元素的宽度）
 * 拓展：对于 padding 来说，在使用 % 时都是相对 父元素的宽度
 */

/**
 * 题目：4
 * 说明：完成一个深拷贝函数
 * 拓展：for in ：变量对象的可枚举属性，包括自有属性、继承自原型属性
 *       object.keys ：遍历可枚举的属性，包括自有属性，不包括继承原型属性
 */
function deepCopy(obj) {
  let type = typeof obj
  if (type !== 'object') {
    return obj
  } else {
    let temp = Array.isArray(obj) ? [] : {}
    Object.keys(obj).forEach(item => {
      if (obj.hasOwnProperty(item)) {
        // 使用 object.keys 这个判断可以去掉
        if (typeof obj[item] === 'object' && obj[item] !== null) {
          temp[item] = deepCopy(obj[item])
        } else {
          temp[item] = obj[item]
        }
      }
    })
    return temp
  }
}

console.log(
  deepCopy({
    name: 'zht',
    age: 28,
    family: {
      baby: 'xiatian',
    },
  }),
)
console.log(deepCopy([1, 2, 3, 4, 5]))
console.log(deepCopy('zhuHT'))

/**
 * 题目：5
 * 说明： HTTP 状态码 301 302 304 403
 * 可以参考博文： https: //www.cnblogs.com/zhurong/p/10107917.html
 *
 * 301：永久性转移，效果是会立即跳转到新的 URL
 * 302：临时性转移，这个重定向只是暂时的，浏览器还会保留旧的URL
 * 304：自从上次请求后，请求的网页没有修改，所以不会返回网页内容
 * 403：拒绝或禁止访问，虽然拒绝或者禁止，服务器已经理解了你的请求，但是原因也会细分不同
 */

/**
 * 题目：6
 * 说明：发布订阅模式
 *      在这里直接用 class，不用 function
 */
class EventEmitter {
  constructor() {
    this.listeners = {}
    this.maxListener = 10
  }

  // 绑定监听事件
  on(event, callback) {
    if (this.listeners[event] instanceof Array) {
      if (this.listeners[event].length > this.maxListener) {
        throw console.error(
          `当前监听器的最大数量是${this.maxListener}，您已经超出限制`,
        )
      }
      if (this.listeners[event].indexOf(callback) === -1) {
        this.listeners[event].push(callback)
      }
    } else {
      this.listeners[event] = [].concat(callback)
    }
  }

  // 添加绑定事件，调用上面的 on
  addListener(event, callback) {
    this.on(event, callback)
  }

  // 触发事件监听器，把参数传递过去
  emit(event) {
    let args = Array.prototype.slice.call(arguments)
    args.shift()
    this.listeners[event].forEach(cb => {
      cb.apply(null, args)
    })
  }

  // 移除指定监听器的事件
  removeListener(event, listener) {
    let i = this.listeners[event] ? this.listeners[event].indexOf(listener) : 0
    if (i > 0) {
      this.listeners[event].splice(i, 1)
    }
  }

  // 绑定只执行一次事件，对绑定的回调做处理，调用一次后移除
  once(event, listener) {
    let self = this

    function fn() {
      let args = Array.prototype.slice.call(arguments)
      listener.apply(null, args)
      self.removeListener(event, fn)
    }
    this.on(event, fn)
  }

  // 移除指定的监听器所以事件
  removeAllListener(event) {
    this.listeners[event] = []
  }

  // 修改最大监听事件数
  setMaxListeners(num) {
    this.maxListener = num
  }

  // 返回指定监听器的所有事件
  listeners(event) {
    return this.listeners[event]
  }
}

// 测试
function listenerEvent1(ss) {
  console.log('监听事件1', `监听器名称：${ss}`)
}

function listenerEvent2() {
  console.log('监听事件2')
}
let eventEmitter = new EventEmitter()
eventEmitter.on('test1', listenerEvent1)
eventEmitter.on('test2', listenerEvent1)
eventEmitter.emit('test1', 'test1')
eventEmitter.emit('test2', 'test2')

/**
 * 题目：7
 * 说明：SQL 的连接，分为：
 *  1、inner join ：内连接，就是两个的交集
 *  2、left join：左连接，以左表作为基准，左表的全部，右边满足 on 条件的有，没有空
 *  3、right join：右连接，以右表作为基准，右表的全部，左表满足 on 条件的有，没有空
 *
 *  select table1.name1,table2.name2 from table1 left join table2 on table1.id = table2.id
 */

/**
 * 题目：8
 * 说明：delete 用于删除对象的某个属性，数组也是对象，但是在删除数组的项后，数组的 length 不会变
 *      删除后变为 empty
 */
let arr = [1, 2, 3, 4]
console.log('数组长度 %d', arr.length)
delete arr[3]
console.log('删除最后一项后数组长度 %d', arr.length)
console.log(arr)

/**
 * 题目：9
 * 说明：周岁函数，传入生日，输出多少周岁
 */
function getAgeByBirthday(birthday) {
  let birthdayDate = new Date(birthday)
  let birthdayYear = birthdayDate.getFullYear()
  let birthdayMonth = birthdayDate.getMonth()
  let birthdayDay = birthdayDate.getDate()

  let nowDate = new Date()
  let nowYear = nowDate.getFullYear()
  let nowMonth = nowDate.getMonth()
  let nowDay = nowDate.getDate()
  if (nowDate - birthdayDate < 0) {
    console.log('请输入正确的生日')
    return
  }

  if (
    nowMonth > birthdayMonth ||
    (nowMonth === birthdayMonth && nowDay >= birthdayDay)
  ) {
    console.log(`${nowYear - birthdayYear}周岁啦！`)
    return
  } else {
    console.log(`${nowYear - birthdayYear - 1}周岁啦！`)
  }
}

getAgeByBirthday('2012-08-24')

/**
 * 题目：10
 * 说明：1、同名函数会被后声明的覆盖；2、传值的过程中相当于新声明一个值，原值不变
 */
var x = 1,
  y = 0,
  z = 0

function add(x) {
  return (x = x + 1)
}
y = add(x)

function add(x) {
  return (x = x + 3)
}
z = add(x)
console.log(x, y, z)

/**
 * 题目：11
 * 说明：是关于 this 的
 *      1、立即执行（IIFE）函数同普通函数，this 指向全局
 *      2、赋值后，相相当于一个新的函数，也是指向全局
 */
var num = 1
var myObject = {
  num: 2,
  add: function() {
    this.num = 3
    ;(function() {
      console.log(this.num)
      this.num = 4
    })() // 立即执行函数，this 指向全局变量
    console.log(this.num)
  },
  sub: function() {
    console.log(this.num)
  },
}
myObject.add()
console.log(myObject.num)
console.log(num)
var sub = myObject.sub
sub()

// 1,3,3,4,4（浏览器输出，在这里用node输出不一样）
/**
 * 题目：12
 * 说明：函数提升
 *      1、编译阶段提升的只是声明，赋值没有提升留在原地等待执行
 *      2、提升是以作用域为单位的，只是提升到当前作用域的顶端
 *      3、函数声明会提升，但是函数表达式不会提升
 *      4、函数声明提升要先于变量声明
 */

function foo() {
  console.log('函数声明')
}

// bar 也不会提升，因为这个等同于下面（bar 是在函数里面）
let foo1 = function bar() {
  console.log('函数表达式')
}
foo1 = function() {
  let bar = self
  console.log('函数表达式')
}

/**
 * 题目：13
 * 说明：setTimeout 定时器，setInterval 固定时间延迟的重复执行
 *      1、 同一个对象（ window或者worker） 两者公用一个编号池，不同对象编号池独立
 *      2、setTimeout this 在非严格模式指向 window，严格模式 undefined，回调函数还是 window
 *      参数：setTimeout 参数分别是：回调函数、定时间隔时间、传入回调的参数（多个），第一必须，后面都可省略
 */

/**
 * 题目：14
 * 说明：apply：方法调用一个具有给定 this 值的函数，和一个数组（类似数组的对象）提供的参数
 *       bind：创建一个新的函数，第一个参数是传入的作为 this，不传指向全局，后面是参数列表（不是数组）
 *       call：方法使用一个指定的 this 值和一个或多个参数列表，和 apply 类似，区别就是参数传入不同
 */

/**
 * 题目：15
 * 说明： 可以参考文章：
 * 1、 https: //coolshell.cn/articles/9666.html（浏览器的渲染原理）
 * 2、 https: //blog.csdn.net/zzzaquarius/article/details/6532299（How Browsers Work）
 * 3、 https: //coolshell.cn/articles/9749.html（JS 装载和执行）
 *
 * 1、加载是自上而下的，边解析边渲染；
 * 2、遇到有 JS、CSS文件的需要下载的，这里阻塞当前渲染，下载完成后解析完成，对布局有影响的，重新渲染，后继续一块渲染；
 * 3、遇到 image 的，不会阻塞，会继续解析渲染，当 image 下载完加载对布局有影响的再重新渲染；
 */

/**
 * 题目：16
 * 说明：对象解构中的拓展运算符（...）和 rest 参数对比
 * 1、对象的解构中用的 ... 是把对象中的属性展开为一系列用逗号分隔的值
 * 2、rest 参数中 ... ，是把逗号分隔的值组合成一个数组
 * 参考文章： https: //juejin.im/post/5b98781f6fb9a05d2a1d5327，https://blog.csdn.net/weixin_37620905/article/details/82961944
 */

let obj = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
}
let { a, b, ...c } = obj
console.log(a, b, c)

let newObj = {
  one: '1',
  two: '2',
  ...c,
}
console.log(newObj)

/**
 * 题目：17
 * 说明：正则表达式
 * /searchStr/i (语法，不需要引号)
 * Regex exec test
 * string 可以直接 search match
 */
let str = 'Visit Runoob!'
let n = str.search(/Runoob/i)
console.log(n)

let regex = /^(?:\d|[1-9]\d|100)$/
let n = regex.exec('9')
let regex1 = /^(?:\d{1,3})$/
let n1 = regex1.exec('9')
console.log(n, n1)

// 匹配网址，不包括后面的路由
let pattern = /^(?:https?:\/\/)?\w+(?:\.\w+)?(?:\.[A-Z]{2,3})+$/i
console.log(pattern.test('https://www.cnblogs.com'))
console.log(pattern.test('https://www.cnblogs.com/jinkspeng/p/4932391.html'))

// 限制小数位后一位
const reg = /^[0-9]+([.]{1}[0-9]{1})?$/
const reg1 = /^\d+(.\d)?$/

// 事件循环（Event Loop）
setTimeout(_ => console.log(4))
async function main() {
  console.log(1)
  let a = await Promise.resolve(1)
  console.log(a)
  console.log(3)
}
main()
console.log(2)
