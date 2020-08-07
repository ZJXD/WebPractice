/**
 * 元组（Tuple）
 */

// 在 ts 中 array 做了一定限制，需要指定类型。
// 元组，就是打破这样的限制，可以存储不同类型

// 声明的时候需要指定每个索引的类型
let tom: [string, number] = ['Tom', 25]

// 赋值或访问一个已知索引元素，可行
tom[0] = 'Tom Cat'
tom[0].slice(1)
// 下面的就会报错，因为索引为 1 的类型是 number，不能使用 slice
// tom[1].slice(2)

// 直接声明赋值时需要全部赋值，声明后可以对指定索引赋值
let jack: [string, number]
jack[0] = 'Jack' // 正确
// jack = ['Jack']  // 赋值需要全部对应

// 越界的元素 ------------------------------
// 元组可以 push ，但是要注意类型
// push 的类型只能是声明时类型的联合类型
let mark: [string, number]
mark = ['Mark', 30]
mark.push('Tom')
// 声明时 [string, number] 中没有 bool 类型，不能添加
// mark.push(true)
