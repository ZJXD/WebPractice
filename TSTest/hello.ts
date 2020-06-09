// TypeScript 中，使用 ： 指定变量类型，如果发现错误，编译就会报错
function sayHello(person: string) {
  return 'Hello' + person
}
let user = 'Tom'
// 下面的 user 赋值就会报错，虽然报错还是会生成 js 文件
// let user = [1, 2, 3]

console.log(sayHello(user))

// 使用命令 tsc hello.ts 编译生成 js 文件
