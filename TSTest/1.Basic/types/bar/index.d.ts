declare const name: string
declare function getName(): string
declare class AnimalBar {
  constructor(name: string)
  sayHi(): string
}

interface Options {
  data: any
}

// 上面定义的在这里统一导出
export { name, getName, AnimalBar, Options }

// 导出命名空间，和全局定义命名空间一样
export namespace bar {
  const myName: string
  function sayHi(): string
}

// 默认导出（和 ES6 导出一样）
// 只能 function、class、interface 可以直接导出
//    其他变量需要先定义再默认导出
export default function barFun(): string

// 下面是先声明再默认导出
// 但是一个文件只能有一个默认导出
// declare const myNum: number
// export default myNum
