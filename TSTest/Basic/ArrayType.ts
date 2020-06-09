/**
 * 数组的类型
 */

// 简单使用 -------------------------------------
// 最简单方法：【类型+方括号】，来表示数组
let array1: number[] = [1, 2, 3, 4, 5]

// 有 string 类型的不允许
// let array2: number[] = [1, 2, 3, '4']

// 后面 push 也不行，下面的会报错
// array1.push('ss')

// 数组泛型 -------------------------------------
let array3: Array<number> = [1, 2, 3, 5]

// 接口数组 -------------------------------------
interface NumberArrar {
  [index: number]: number
}
// 上面接口的意思：索引的类型是数字时，那么值的类型也是数字
let array4: NumberArrar = [1, 3, 5, 7]

// 类数组 --------------------------------------
// 类数组：类似数组的对象（Array-like Object）

// function sum() {
//   let args: {
//     [index: number]: number
//     length: number
//     callee: Function
//   } = arguments
// }
// 这里的 arguments 就是类数组
// 类数组都有自己的接口定义：IArguments，NodeList 等（这些是 ts 的内置对象）
