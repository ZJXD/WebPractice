/**
 * TypeInference 类型推论
 *  说明：如果没有明确的指定类型，那么 TypeScript 会依照类型推论的规则推断出一个类型
 */

// 下面的代码会在编译时报错
let myFavoriteNumber = 'seven'
// myFavoriteNumber = 7

// 等价于
// let myFavoriteNumber:string = 'seven'
// myFavoriteNumber = 7

/**
 * 类型推论：变量在声明时没有指定类型，但是赋值了，会根据这个所赋的值推论出类型
 * 任意类型：变量在声明时没有赋值，不管后面是否赋值，都会被推断为 any 类型
 */
