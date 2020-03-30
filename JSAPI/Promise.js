/**
 * Promise
 * 异步
 */

// promise 的三种状态

let pro1 = new Promise((resolve, reject) => {
  console.log('Promise 函数体')
  resolve(console.log('resolve 中的'))
}).then(res => {
  console.log('then 中的')
})
console.log('Promise 外面的')
