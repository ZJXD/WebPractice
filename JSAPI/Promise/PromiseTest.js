/**
 * Promise
 * 异步
 * 主要参考自：尚硅谷_Promise视频教程（Promise从入门到精通）（https://www.bilibili.com/video/BV15E411c7bQ?p=14）
 */

// promise 的三种状态

/**
 * Promise 的基本使用 ----------------------------------------------------------------------------------------
 */

// 1. 新建一个 promise 对象
const p = new Promise((resolve, reject) => {
  // 执行器函数

  // 2. 执行异步操作
  setTimeout(() => {
    const nowTime = Date.now()
    if (nowTime % 2 == 0) {
      // 3.1. 执行成功的操作
      resolve('执行成功，time=', nowTime)
    } else {
      // 3.2. 执行失败的操作
      reject('执行失败，time=', nowTime)
    }
  }, 1000)
})

p.then(
  // 这里都是被动接收到的
  value => {
    // 接收到成功的 value 数据    onResolved
    console.log('成功的回调，', value)
  },
  reason => {
    // 接收到失败的 reason 数据  onRejected
    console.log('失败的回调，', reason)
  },
)

// 调用顺序
let pro1 = new Promise((resolve, reject) => {
  console.log('Promise 函数体')
  resolve(console.log('resolve 中的'))
}).then(res => {
  console.log('then 中的')
})
console.log('Promise 外面的')

// Promise API 使用 -----------------------------------------------------------------------------------------
const p1 = new Promise((resolve, reject) => {
  resolve(1)
})
// 这个写法更简洁，是上面写法的语法糖
// Promise.resolve 和 Promise.reject 都是静态函数
const p2 = Promise.resolve(2)

const p3 = Promise.reject(3)

p1.then(value => console.log('p1 成功的回调：', value))
p2.then(value => console.log('p2 成功的回调：', value))
p3.then(null, reason => console.log('p3 失败的回调：', reason))
p3.catch(reason => console.log('p3 的另一个失败的回调：', reason))

// 执行一个 promise 数组
// const pAll = Promise.all([p1, p2, p3])
const pAll = Promise.all([p1, p2])
pAll.then(
  // 全部成功调用这个：结果按照传入的顺序
  values => console.log('all onResolve：', values),
  // 有一个失败就调用这个：返回的是失败的值
  reason => console.log('all onReject：', reason),
)

// 执行一个 promise 数组，根据最先执行完成的返回结果
const pRace = Promise.race([p1, p2, p3])
// 返回顺序和传入顺序无关，和执行先后有关
pRace.then(
  // 第一个执行成功，回调这个
  value => console.log('race onResolve：', value),
  // 第一个执行失败，回调这个
  reason => console.log('race onReject：', reason),
)

// Promise 几个关键问题 --------------------------------------------------------------------------------------
/**
 * 状态改变---------------------
 * 可以三种方法改变：
 *  1. resolve
 *  2. reject
 *  3. 抛出（throw）
 */
const p = new Promise((resolve, reject) => {
  // resolve(1)  // promise 变为 resolved 状态
  // reject(2)   // promise 变为 rejected 状态
  // throw new Error('promise 失败') // 抛出异常，promise 变为 rejected 状态，reason 为抛出的 error（抛出什么就是什么）
  throw 2
})
// 绑定两个 then 监听函数，都可以接收到
p.then(
  value => {},
  reason => console.log('onReject：', reason),
)
p.then(
  value => {},
  reason => console.log('onReject22：', reason),
)

/**
 * 改变promise 状态和绑定回调函数先后---------------------
 * 可以分为以下：
 *  1. 都有可能，正常是先知道回调，后改变状态
 *  2. 如何先改变状态再指定回调
 *    a. 在执行器中直接调用 resolve/reject
 *    b. 延迟更长时间才调用 then
 *  3. 什么时候才能得到数据
 *    a. 如果先指定回调，当改变状态，这时就会执行回调，得到数据
 *    b. 如果先改变状态，指定回调时，回调函数就会执行，得到数据
 */

// 先指定回调函数，常规下是这样的
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1) // 后改变状态，异步执行回调，返回数据
  }, 1000)
}).then(
  // 先指定回调函数，保存当前的回调函数
  value => console.log('value 1:', value),
  reason => console.log('reason 1:', reason),
)

// 先改变状态，再指定回调函数
new Promise((resolve, reject) => {
  resolve(2) // 先改变状态，同时指定数据
}).then(
  // 后指定回调函数，异步执行回调函数
  value => console.log('value 2:', value),
  reason => console.log('reason 3:', reason),
)

/**
 * promise.then 返回的新的 promise 状态、结果由什么决定？---------------------
 * 1. 简单表达：由 then() 指定的回调函数执行的结果决定
 * 2. 详细表达（主要看返回的）：
 *    a. then() 回调函数在执行抛出异常，就是rejected，结果是抛出的异常
 *    b. 如果返回的是非 promise 的任意值，状态是 resolved，结果是这个值
 *    c. 如果返回的是 promise 对象，这个 promise 的对象就是结果
 */

new Promise((resolve, reject) => {
  resolve(1)
  //  reject(2)
})
  .then(
    value => {
      console.log('onResolved1()', value)
      throw 3
      // return 4
      // return Promise.resolve(5)
      // return Promise.reject(6)
    },
    reason => console.log('onRejected1()', reason),
  )
  .then(
    value => console.log('onResolved1()', value),
    reason => console.log('onRejected1()', reason),
  )

/**
 * promise 连续调用 .then() (串联) ---------------------
 * 1. 第一个调用，直接是 resolve 或者 reject 返回的结果
 * 2. 后面的，如果是同步的，可以直接 return
 * 3. 异步的操作，需要封装 promise（这个就是promise 的作用）
 */
new Promise((resolve, reject) => {
  console.log('执行任务1（同步）')
  resolve(1)
})
  .then(value => {
    console.log('onResolved 1:', value)
    console.log('执行任务2（同步）')
    return 2
  })
  .then(value => {
    console.log('onResolved 2:', value)
    return new Promise((resolve, reject) => {
      // 启动任务3（异步）
      setTimeout(() => {
        console.log('执行任务3（异步）')
        resolve(3)
      }, 1000)
    })
  })
  .then(value => console.log('onResolved 3:', value))

/**
 * promise 的穿/传透（catch）和终结调用---------------------
 */

new Promise((resolve, reject) => {
  // resolve(1)
  reject(1)
}).then(
    value => {
      console.log('onResolved 1:', value)
      return 2
    },
    // 没有写的时候，默认值这样，每一个都没写，就会一路向下到最后
    reason => {
      throw reason
    },
  )
  .then(value => {
    console.log('onResolved 2:', value)
    return 3
  })
  .then(value => {
    console.log('onResolved 3:', value)
  })
  .catch(reason => {
    console.log('onRejected 1:', reason)
    // 返回一个新的 promise ，并且状态是 pending ，下面就不会调用（中断 promise 链）
    return new Promise(() => {})
  })
  .then(
    // 上一步中，已经是异常的，不希望这里有再调用
    value => console.log('onResolved 4:', value),
    reason => console.log('onRejected 2:', reason),
  )
