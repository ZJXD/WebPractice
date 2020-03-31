/**
 * 自定义 Promise 函数模块
 * 使用的是 ES5 的 IIFE（立即执行函数）构建模块
 */

;(function(window) {
  /**
   * Promise 构造函数
   * @param {Function} excutor 执行器函数
   */
  function Promise(excutor) {
    this.status = 'pending' // status 属性，初始值 pending
    this.data = undefined // promise 属性 data，用于存储结果数据
    this.callbacks = [] // 每个元素的结构：{onResolved(){},onRejected(){}}

    // 成功回调
    function resolve(value) {
      // 当状态不是 pending 时，结束
      if (this.status !== 'pending') {
        return
      }

      // 改变状态
      this.status = 'resolved'

      // 存储 value
      this.data = value

      // 如果 callbacks 中有回调函数，立即异步执行成功（onResolved）回调
      if (this.callbacks.length > 0) {
        // 简单的模拟异步执行
        setTimeout(() => {
          this.callbacks.forEach(callbacksObj => {
            callbacksObj.onResolved(value)
          })
        }, 0)
      }
    }

    // 失败回调
    function reject(reason) {
      // 当状态不是 pending 时，结束
      if (this.status !== 'pending') {
        return
      }

      // 改变状态
      this.status = 'rejected'

      // 存储 reason
      this.data = reason

      // 如果 callbacks 中有回调函数，立即异步执行失败（onRejected）回调
      if (this.callbacks.length > 0) {
        // 简单的模拟异步执行
        setTimeout(() => {
          this.callbacks.forEach(callbacksObj => {
            callbacksObj.onRejected(reason)
          })
        }, 0)
      }
    }
    // excutor 是同步执行的，所以立即执行
    try {
      excutor(resolve, reject)
    } catch (error) {
      // 异常时，返回失败回调
      reject(error)
    }
  }

  /**
   * Promise 原型上的 then 方法
   * 指定成功和失败的回调
   * 返回一个新的 promise 对象
   */
  Promise.prototype.then = function(onResolved, onRejected) {}

  /**
   * Promise 原型上的 then 方法
   * 指定失败的回调
   * 返回一个新的 promise 对象
   */
  Promise.prototype.catch = function(onRejected) {}

  // 下面的为 Promise 上面的静态方法

  /**
   * Promise 函数对象上的 resolve 方法
   * 返回一个成功值为 value 的 promise（成功）
   */
  Promise.resolve = function(value) {}

  /**
   * Promise 函数对象上的 reject 方法
   * 返回一个失败值为 reason 的 promise（失败）
   */
  Promise.reject = function(reason) {}

  /**
   * Promise 函数对象上的 all 方法
   * 返回一个新的 promise
   * 全部执行成功，返回成功，否则失败
   */
  Promise.all = function(promises) {}

  /**
   * Promise 函数对象上的 race 方法
   * 返回一个新的 promise
   * 其结果由第一个执行完成的 promise 决定
   */
  Promise.race = function(promises) {}

  // 对外暴露 Promise 函数
  window.Promise = Promise
})(window)
