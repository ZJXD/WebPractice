const {
  log
} = console

/**
 * 题目：1
 * 说明：map、parseInt 
 *      map 中的 callback 通常只接收一个参数，但是 map 传的参数不只一个
 *      parseInt 会消耗两个参数，所以 map 传的值就影响了预期的结果
 *      参考： https: //developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

// let mapTest = ['1', '3', '10'].map(parseInt);
// log(mapTest)


/**
 * 题目：2
 * 说明：this 用法
 *      在 show 内的第一个 fn()，属于简单函数调用，所以 this 指向全局，输出 10
 *      后面的一个 arguments[0](),此时 fn() 是 arguments 的一员，这时的作用域就是 arguments，但是 arguments 没有 number 属性，输出 undefined
 */
var number = 10;

function fn() {
  console.log(this.number);
}
var obj = {
  number: 2,
  show: function (fn) {
    this.number = 3;
    fn();
    arguments[0]();
  }
};
obj.show(fn);


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
      if (obj.hasOwnProperty(item)) { // 使用 object.keys 这个判断可以去掉
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

console.log(deepCopy({
  name: 'zht',
  age: 28,
  family: {
    baby: 'xiatian'
  }
}))
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
        throw console.error(`当前监听器的最大数量是${this.maxListener}，您已经超出限制`)
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
    let self = this;

    function fn() {
      let args = Array.prototype.slice.call(arguments);
      listener.apply(null, args);
      self.removeListener(event, fn);
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
 */
let arr = [1, 2, 3, 4]
console.log('数组长度 %d', arr.length)
delete arr[3]
console.log('删除最后一项后数组长度 %d', arr.length)
console.log(arr)