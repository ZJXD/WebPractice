/**
 * Union Types 联合类型
 *  说明：表示取值可以是多种类型中的一种
 *        多个类型值用 | 隔开
 */

// 简单示例 ------------------------------------------
let unionTypesNumber: string | number
unionTypesNumber = 'seven'
unionTypesNumber = 7

// 但是下面的赋值就会报错
// unionTypesNumber = true

// 访问联合类型的属性或方法 ----------------------------
//  只能访问此类联合类型的所有类型里的【共有】属性或方法

// 下面会报错（number 不存在 length 属性）
// function getLength(something: string | number): number {
//   return something.length
// }

// 访问共有属性就可以
function getString(something: string | number): string {
  return something.toString()
}

// 联合类型在每次赋值时会进行类型推断
let unionValue: string | number
unionValue = 'seven'
console.log(unionValue.length)
unionValue = 7
// console.log(unionValue.length) // 这里类型推断为 number 没有 length 属性
