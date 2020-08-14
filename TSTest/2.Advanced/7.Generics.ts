/**
 * 泛型（Generice）
 *    是值在定义函数、接口或类的时候，不预先指定类型，在使用的时候再指定类型的一直特性
 */

/**
 * 简单的例子
 *     实现一个函数，可以创建指定长度的数组
 */

// 使用数组泛型（Array<any>）
function createArray(length: number, value: any): Array<any> {
  let result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

// 上面虽然实现了功能，但是没有准确定义返回值的类型
// 下面是泛型的实现
function createArrayT<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

let arr = createArray(3, 3)
let arr1 = createArrayT<string>(3, 'x')
console.log(arr, arr1)

/**
 * 多个类型的泛型
 */
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
// 对 tuple 元素进行交互
console.log(swap([1, 3]))

/**
 * 泛型约束
 *    在函数内部使用泛型变量的时候，由于不知道是哪种类型，所以不能随意操作
 */

interface Lengthwise {
  length: number
}

// 直接操作泛型变量会报错
// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length)
//   return arg
// }

// 对泛型约束后就不会报错
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
// 约束了 T 必须有 length 属性，所以就不会报错

// 在调用的时候会判断是否符合约束
// loggingIdentity(5)   // 报错
loggingIdentity([1, 2])

// 泛型参数之间也可以相互约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id]
  }
  return target
}

let x = { a: 1, b: 2, c: 3, d: 4 }
console.log(copyFields(x, { b: 10, d: 20 }))

/**
 * 泛型接口
 *    在定义接口的时候使用泛型参数
 */
interface CreateArrayFunc<T>{
  (length:number,value:T):Array<T>
}
let createArray1:CreateArrayFunc<any> = 
  function<T>(length:number,value:T):Array<T>{
    let result:T[] = []
    for(let i = 0;i<length;i++){
      result[i] = value
    }
    return result
  }


/**
 * 泛型类
 */

class GenericeNumber<T>{
  zeroValue:T
  add:(x:T,y:T) => T
}

let myNumber = new GenericeNumber<number>()
myNumber.zeroValue = 0
myNumber.add = (x,y)=>{ return x + y }
myNumber.add(1,3)

/**
 * 泛型参数的默认类型
 *    当使用泛型时没有在代码中指定类型，也无法从实际值参数中推测，这个默认值就会起作用
 */
