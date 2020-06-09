/**
 * 对象的类型————接口（Interfaces）
 *  1、在面向对象的语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要类（class）去实现（implement）
 *  2、在 ts 中，接口是一个非常灵活的概念，除了可以对行为进行抽象，也常用于对【对象的形状（Shape）】进行描述
 */

// 简单的例子 ------------------------------------------
interface Person {
  name: string
  age: number
}

let tom: Person = {
  name: 'Tom',
  age: 30
}

// 上面定义的接口 Person，在定义变量 tom 时指定类型为 Person，这就约束了 tom 的形状必须和 Person 一致

// 在指定了类的类型【Interface】，那么定义的类型属性必须和 Interface 一致，多了或少了都不行
// 下面的会报错，少了 age 属性
// let jim: Person = {
//   name: 'Jim'
// }

// 可选属性  ------------------------------------------
// 有些属性可有可无
interface Cat {
  name: string
  age?: number
}

// 在定义变量时 age 就可以不选
// 但是未定义的还是不能添加
let tomCat: Cat = {
  name: 'Tom'
  // address: 'ssss' // Cat 中不存在，不可以添加
}

// 任意属性  --------------------------------------------
// 一个接口，已知有几个属性，但是还有一些是不确定或未知的
// 这时就使用【任意属性】，可以添加
interface Dog {
  name: string
  age?: number
  [propName: string]: any
}

// 下面的 address eat 都是任意属性
let dog1: Dog = {
  name: 'dog1',
  address: 'sssss',
  eat: 'sss'
}

// 有了任意属性那么【确定属性、可选属性的类型必须是任意属性类型的子集】
// 下面的 age 类型不是 任意属性的类型子集，所以报错
// 任意属性也可以指定联合类型
interface I_Dog {
  name: string
  age?: number
  // [propName: string]: string  // 这样定义类型，上面的 age 报错
  [propName: string]: string | number
}

// 只读属性  --------------------------------------------
// 只读属性是【只能在创建的时候】赋值
interface Car {
  readonly code: string
  name: string
  length?: number
}

let toyota: Car = {
  code: 'HANLANDA',
  name: '汉兰达'
}
// 只读属性在第一次给对象赋值的时候赋值，后面不能改变，所以下面报错
// toyota.code = 'Proda'

// 下面的错误：1、对象赋值时只读的没有赋值；2、后边只读的也不能再赋值
// let hoda: Car = {
//   name: '皓影'
// }
// hoda.code = 'CRV'
