/**
 * 枚举（Enum）
 *    用于取值被限定在一定范围内的场景
 */

// 简单示例 ------------------------
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}

// 枚举成员会被赋值为从 0 开始递增的数字
// 同时也会对枚举值到枚举名进行反向映射
console.log(Days['Sun'])
console.log(Days[0])
console.log(Days.Fri)

// 手动赋值 ------------------------
enum Week {
  Sun = 3,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}

// 没有手动赋值的，会接着上面一个递增
// 但是会有一个问题，可能被覆盖
console.log(Week[3])
// 上面查找 3 ，输出是 Wed

// 手动赋值为小数时，递增步长还是 1
enum FontSize {
  em = 1.5,
  rem,
  nem,
  tem
}

console.log(FontSize.nem)

// 常数项和计算所得项 ------------
// 上面的示例都是常数项

// 下面列出一个计算得出的项
enum ColorEnum {
  Red,
  Green,
  Blue = 'blue'.length
}
// 计算得出 Blue 的枚举项是 4
console.log(ColorEnum.Blue)

// 但是当计算所得项后面是未赋值的项，会报错（如下）
// enum AnimalEnum {
//   Cat = 'cat'.length,
//   Dog,
//   Pig
// }

// 常数枚举 ------------------------
// 用 const 定义的，不能包含计算成员

// 外部枚举 ------------------------
// 用 declare 定义的
