/**
 * 函数的类型
 */

// 函数声明 ------------------------------------------------------
// 需要对输入、输出都考虑到
function sum(x: number, y: number): number {
  return x + y
}

// 输入多余的（或少于要求的）参数，是不被允许的
let sum1 = sum(2, 4)
// 下面两个都不被允许
// let sum2 = sum(1)
// let sum3 = sum(1, 2, 3)

// 函数表达式 -----------------------------------------------------
// 可以写成这样（通过类型推断）
let mySum = function (x: number, y: number): number {
  return x + y
}

// 如果手动给 mySum 添加类型
// 需要注意 TypeScript 中的 => 和 ES6 中的 =>
// TypeScript 中 => 表示函数定义，左侧输入类型，要用括号括起来，右侧是输出类型
let mySum1: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y
}

// 用接口定义函数 -------------------------------------------------
interface SearchFunc {
  (source: string, sunString: string): boolean
}
let mySum2: SearchFunc
mySum2 = function (source: string, subString: string) {
  return source.search(subString) !== -1
}

// 可选参数 --------------------------------------------------------
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}
// 注意：可选参数必须在后面

// 参数默认值 ------------------------------------------------------
function buildName1(lastName: string = 'Cat', firstName: string): string {
  return firstName + ' ' + lastName
}
// TypeScript 会把默认值的参数识别为可选参数（顺序不受限制）

// 剩余参数 -------------------------------------------------------
// 在 ES6 中可以用 ...rest 方式获取函数中剩余参数
// 这个剩余参数实际上是一个数组，所以可以用数组定义
function push(array: any[], ...items: any[]) {
  items.forEach((item) => {
    array.push(item)
  })
}
// 这里 items 只能是最后一个参数

// 重载 ---------------------------------------------------------
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}

// 在使用 reverse 时会提示对应的重载
console.log(reverse(345))
