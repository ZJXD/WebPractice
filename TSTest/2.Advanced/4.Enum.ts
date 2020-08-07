/**
 * 枚举（Enum）
 *    用于取值被限定在一定范围内的场景
 */

// 简单示例
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
