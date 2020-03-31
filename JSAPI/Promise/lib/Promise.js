/**
 * 自定义 Promise 函数模块
 * 使用的是 ES5 的 IIFE（立即执行函数）构建模块
 */

;(function(window) {
  /**
   * Promise 构造函数
   * @param {Function} excutor 执行器函数
   */
  function Promise(excutor) {}

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
   * Promise 对象上的 resolve 方法
   * 返回一个成功值为 value 的 promise（成功）
   */
  Promise.resolve = function(value) {}

  // 对外暴露 Promise 函数
  window.Promise = Promise
})(window)
