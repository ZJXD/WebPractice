/**
 * 类型断言
 *  Type Assertion
 */

// 联合类型断言为其中一个类型 -----------------------------------------
interface Cat1 {
  name: string
  run(): void
}

interface Fish {
  name: string
  swim(): void
}

// 对于联合类型中都存在的属性可行
function getName(animal: Cat1 | Fish) {
  return animal.name
}

// 访问其中一个类型的特有方法
function isFish(animal: Cat1 | Fish) {
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
// ;(window as any).foo = 1

// 注意：将一个类型断言为 any 是解决 TS 中类型问题的最后一个手段
//      它极有可能掩盖了真正的类型错误，不是很确定不要使用

/**
 * 总结：-------------------------------------------------------
 *     1、联合类型可以总结为其中一个类型
 *     2、父类可以断言为子类
 *     3、任何类型都可以断言为 any
 *     4、any 可以断言为任何类型
 */

/**
 * 类型兼容 --------------------------------------------------
 * 一种类型兼容另一种类型
 */

interface Animal2 {
  name: String
}

interface Cat2 {
  name: String
  run(): void
}

// 上面两个等价：Cat2 extends Animal2
// 即：Animal2 是 Cat2 的父类

// 上面说过的【父类可以断言为子类】
function testAnimal(animal: Animal2) {
  return animal as Cat2
}

// 子类有父类的所有属性、方法，同样【子类可以断言为父类】
function testCat(cat: Cat2) {
  return cat as Cat2
}

/**
 * 类型断言 VS 类型转换 ---------------------------------
 *
 * 类型断言只会影响 TS 编译时的类型，在编译结果中会被删除
 * 类型断言并不会真的改变类型
 *
 * 类型转换：会影响类型
 */
