/**
 * 自定义 Promise 类
 * 使用 ES6 的 Class
 */

;(function (window) {
  // 定义常量
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'

  class Promise {
    constructor(excutor) {
      const self = this
      self.status = PENDING // status 属性，初始值 pending
      self.data = undefined // promise 属性 data，用于存储结果数据
      self.callbacks = [] // 每个元素的结构：{onResolved(){},onRejected(){}}

      // 成功回调
      function resolve(value) {
        // 当状态不是 pending 时，结束
        if (self.status !== PENDING) {
          return
        }

        // 改变状态
        self.status = RESOLVED

        // 存储 value
        self.data = value

        // 如果 callbacks 中有回调函数，立即异步执行成功（onResolved）回调
        if (self.callbacks.length > 0) {
          // 简单的模拟异步执行
          setTimeout(() => {
            self.callbacks.forEach((callbacksObj) => {
              callbacksObj.onResolved(value)
            })
          }, 0)
        }
      }

      // 失败回调
      function reject(reason) {
        // 当状态不是 pending 时，结束
        if (self.status !== PENDING) {
          return
        }

        // 改变状态
        self.status = REJECTED

        // 存储 reason
        self.data = reason

        // 如果 callbacks 中有回调函数，立即异步执行失败（onRejected）回调
        if (self.callbacks.length > 0) {
          // 简单的模拟异步执行
          setTimeout(() => {
            self.callbacks.forEach((callbacksObj) => {
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
    then = function (onResolved, onRejected) {
      // 指定默认的成功回调
      onResolved =
        typeof onResolved === 'function' ? onResolved : (value) => value
      // 指定默认的失败回调（实现异常穿透的关键步骤）
      onRejected =
        typeof onRejected === 'function'
          ? onRejected
          : (reason) => {
              throw reason
            }

      const self = this

      // 返回一个新的 promise
      return new Promise((resolve, reject) => {
        // 1. 执行指定的回调函数，对下面的不同情形中，相同的操作进行封装
        // 2. 返回新的 promise 的结果
        function handle(callback) {
          /**
           * 1. 执行出现异常，return 的 promise 就会失败，返回 error
           * 2. 执行的结果不是 promise，return 的 promise 就会成功，返回这个结果
           * 3. 执行的结果是 promise，return 的 promise 结果就是这个 promise 的结果
           */
          try {
            const result = callback(self.data)
            if (result instanceof Promise) {
              // 对应 3
              // 写法 1
              // result.then(
              //   value => resolve(value),
              //   reason => reject(reason),
              // )
              // 写法 2 （这个简写可以看下面 注释①）
              result.then(resolve, reject)
            } else {
              // 对应 2
              resolve(result)
            }
          } catch (error) {
            // 对应 1
            reject(error)
          }
        }

        // 现在是 pending 状态，把回调函数存入 callbaks
        // 这里也要返回新的 promise，所以进行处理
        // 因为是 pending 状态，所以要执行和构造函数中一样的操作
        // 这里不需要 setTimeout 是因为在 执行器函数里面已经有了
        if (self.status === PENDING) {
          self.callbacks.push({
            onResolved(value) {
              handle(onResolved)
            },
            onRejected(reson) {
              handle(onRejected)
            },
          })
        } else if (self.status === RESOLVED) {
          setTimeout(() => {
            handle(onResolved)
          }, 0)
        } else {
          setTimeout(() => {
            handle(onRejected)
          }, 0)
        }
      })
    }

    /**
     * 注释①
     */
    // let fn = function(event) {}
    // div.onClick = function(event) {
    //   fn(event)
    // }
    // div.onClick = fn

    /**
     * Promise 原型上的 then 方法
     * 指定失败的回调
     * 返回一个新的 promise 对象
     */
    catch = function (onRejected) {
      // 调用上面的，即使是成功的，也会继续传下去
      return this.then(undefined, onRejected)
    }

    // 下面的为 Promise 上面的静态方法

    /**
     * Promise 函数对象上的 resolve 方法
     * 返回一个成功值为 value 的 promise（成功）
     */
    static resolve(value) {
      return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
          value.then(resolve, reject)
        } else {
          resolve(value)
        }
      })
    }

    /**
     * Promise 函数对象上的 reject 方法
     * 返回一个失败值为 reason 的 promise（失败）
     */
    static reject(reason) {
      return new Promise((resolve, reject) => {
        reject(reason)
      })
    }

    /**
     * Promise 函数对象上的 all 方法
     * 返回一个新的 promise
     * 全部执行成功，返回成功，否则失败
     */
    static all(promises) {
      // 成功时返回的结果数组
      const values = Array(promises.length)
      // 成功执行的计数器
      let resolvedCount = 0
      return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
          // 当 p 不是 promise 时，直接返回

          // 对应方法 1（这个更直观，但是不够技术）
          // if (p instanceof Promise) {
          //   p.then(
          //     value => {
          //       values[index] = value
          //       resolvedCount++
          //       if (resolvedCount === promises.length) {
          //         resolve(values)
          //       }
          //     },
          //     reason => {
          //       reject(reason)
          //     },
          //   )
          // } else {
          //   values[index] = p
          //   resolvedCount++
          //   if (resolvedCount === promises.length) {
          //     resolve(values)
          //   }
          // }

          // 方法 2（更技术）
          Promise.resolve(p).then(
            (value) => {
              values[index] = value
              resolvedCount++
              if (resolvedCount === promises.length) {
                resolve(values)
              }
            },
            (reason) => {
              reject(reason)
            },
          )
        })
        // 不能放在这里，因为上面的 p.then  是异步的，要在 p.then 里面判断
        // resolve(values)
      })
    }

    /**
     * Promise 函数对象上的 race 方法
     * 返回一个新的 promise
     * 其结果由第一个执行完成的 promise 决定
     */
    static race(promises) {
      return new Promise((resolve, reject) => {
        promises.forEach((p) => {
          // 方法 1
          // if (p instanceof Promise) {
          //   p.then(resolve, reject)
          // } else {
          //   resolve(p)
          // }

          // 方法 2
          Promise.resolve(p).then(resolve, reject)
        })
      })
    }

    // 延迟执行 resolve
    static resolveDelay(value, time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (value instanceof Promise) {
            value.then(resolve, reject)
          } else {
            resolve(value)
          }
        }, time)
      })
    }

    // 延迟执行 reject
    static rejectDelay(reason, time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(reason)
        }, time)
      })
    }
  }

  window.Promise = Promise
})(window)
// export default Promise
