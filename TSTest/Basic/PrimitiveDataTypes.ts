/**
 * Primitive data types 原始数据类型
 *  主要包括：boolean、number、string、null、undefined、Symbol
 */

// TS 中布尔值的定义-----------------------------------------------------
let isDone: boolean = false

// Boolean 是包装器对象，创建的是一个 Boolean 对象
// let createdByBoolean: boolean = new Boolean(1)
let createdByBoolean: Boolean = new Boolean(1)

// TS 中数值的定义-------------------------------------------------------
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
// ES6 中二进制表示法
let binaryLiteral: number = 0b1010
// ES6 中八进制表示法
let octalLiteral: number = 0o744
let notNumber: number = NaN
let infinityNumber: number = Infinity

// TS 中字符串的定义----------------------------------------------------
let myName: string = 'Tom'
let myAge: number = 26

// 模板字符串
let sentence: string = `Hello,my name is ${myName}.
I'll be ${myAge} years old next month;`

// TS 中的空值--------------------------------------------------------
// js 中没有空值的概念，在 TypeScript 中有 void

// 定义没有返回值的函数
function alertName(): void {
  alert('My name is Tom')
}

// 定义 void 的变量没什么用，只能赋值 null 和 undifined
let unusable: void = undefined

// TS 中的 Null 和 Undefined------------------------------------------

let n: undefined = undefined
let n1: null = null

// undifined 和 null 是所有类型的子类型
// 也就是 undefined 类型的变量可以赋值给其他
// 下面的两个都是可行的
let num: number = undefined
num = n1

// 但是 void 类型的不能赋值给其他类型，下面的会报错
// num = unusable

// TS 中的 任意类型值 Any------------------------------------------

// 被声明为任意类型，值可以任意改变
let anyValue: any = 'any value'
anyValue = 7

// 任意值上面访问任何属性、方法都是允许的。
// 因为任意值的任何操作，返回的内容类型都是任意值

// 变量在声明时没有指定类型，会被识别为任意类型
