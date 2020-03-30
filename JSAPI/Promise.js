/**
 * Promise
 * 异步
 */

// promise 的三种状态

/**
 * Promise 的基本使用 ------------------------------------------------------------
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
