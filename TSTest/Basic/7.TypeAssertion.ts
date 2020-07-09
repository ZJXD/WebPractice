/**
 * 类型断言
 *  Type Assertion
 */

// 联合类型断言为其中一个类型 -----------------------------------------
interface Cat {
  name: string
  run(): void
}

interface Fish {
  name: string
  swim(): void
}

// 对于联合类型中都存在的属性可行
function getName(animal: Cat | Fish) {
  return animal.name
}

// 访问其中一个类型的特有方法
function isFish(animal: Cat | Fish) {
  // 直接这样用会报错
  // if (typeof animal.swim === 'function') {
  //   return true
  // }
  // 把 animal 断言为 Fish
  if (typeof (animal as Fish).swim === 'function') {
    return true
  }
  return false
}

// 注意：类型断言只能够“欺骗” TypeScript 编译器，无法避免运行时错误，滥用可能会导致运行时错误
//    ：在 TS 编译时能够通过，在运行时报错（欺骗 TS 编译器）

// 将一个父类断言为更具体的子类 --------------------------------------
class ApiError extends Error {
  code: number = 0
}
class HttpError extends Error {
  statusCode: number = 200
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === 'number') {
    return true
  }
  return false
}
// 在这里直接用 instanceof（要判断的不是类时，还是需要用断言）
function isApiError1(error: Error) {
  if (error instanceof ApiError) {
    return true
  }
  return false
}

// 将任何一个类型断言为 any ---------------------------------------
// 引用一个在此类型中不存在的属性或方法时会报错
// window.foo = 1
// 上面编译报错，下面是临时将 window 断言为 any
;(window as any).foo = 1

// 注意：将一个类型断言为 any 是解决 TS 中类型问题的最后一个手段
//      它极有可能掩盖了真正的类型错误，不是很确定不要使用
