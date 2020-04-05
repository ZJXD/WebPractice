/**
 * async 和 await
 *
 * MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function
 *      https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await
 */

/**
 * async 函数
 * 1. 返回一个 Promise 对象
 * 2. async 函数返回的 promise 结果，由函数执行的结果决定
 * 3. async 里面的函数返回的本身就是 promise，await 执行的结果是这个 promise 的结果
 */
async function fn1() {
  // return 1
  // throw 2
  return Promise.resolve(3)
}
const result = fn1()
// console.log(result)
result.then(
  (value) => {
    console.log('onResolved():', value)
  },
  (reason) => {
    console.log('onRejected():', reason)
  },
)

/**
 * await 表达式（有返回结果的，并且是 promise）
 * 1. await 必须和 async 一起使用
 * 2. 当 await 的右侧是 promise，返回的结果是 promise 成功的 value
 * 3. 当 await 的右侧不是 promise，返回的结果就是这个值
 * 4. 当 promise 返回的是 reject，用 try catch，error 就是返回值
 */

function fn2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(3)
      reject(5)
    }, 1000)
  })
}

function fn4() {
  return 4
}

async function fn3() {
  try {
    const result = await fn1()
    // const result = await fn4()
    console.log('resule', result)
  } catch (error) {
    console.log('得到的错误结果是：', error)
  }
}

fn3()
