/*
 * @Author: ZHT 
 * @Date: 2021-04-21 09:57:39 
 * @Last Modified by: ZHT
 * @Last Modified time: 2021-04-22 16:04:10
 */

/**
 * Map ES6 中新增的一种数据存储方式（数据结构）
 *  以键值对的形式存储
 */

/**
 * 创建
 *  初始化时，可以传一个可迭代对象
 *    可迭代对象：要包含的是键值对（key：value）形式
 *               如数组、自定义迭代器等
 */
const map1 = new Map()
console.log(map1)

const map2 = new Map([[1,'one'],[2,'two'],[3,'three']])
console.log(map2)

const map3 = new Map({
  [Symbol.iterator]:function*(){
    yield ['me','zht'];
    yield ['age',20];
    yield ['job','IT']
  }
})
console.log(map3)

// 也可以是 undefined
const map4 = new Map([[]])
console.log(map4)
console.log(map4.has(undefined)) // true

/**
 * 一些基本操作
 */
const map5 = new Map()
console.log('map5 的键值对个数：',map5.size)
// 新增映射
map5.set('bar','foo')
// set 返回的是这个实例，可以链式操作
map5.set('ss',123).set('aa',456)
console.log(map5,'个数：',map5.size)

// 查看 key 对应的值
map5.get('ss')  // 123

// 查看是否存在某个键
map5.has('bar') // true
map5.has(34)  // false

// 删除某个键，存在这个键，删除 返回 true，否则返回 false
// map5.delete('bar')  // true
map5.delete(45) // false

// 清空 Map 对象
map5.clear()


/**
 * 顺序迭代
 * Map 会维护键值对插入的顺序，可以根据插入顺序迭代
 */
const map6 = new Map([
  [1,'111'],
  [2,'222'],
  [3,'333']
])
// 可以遍历的有：entries、keys、values（返回的迭代器），映射还可以 forEach
for (const item of map6) {
  console.log(item)
}
for (const item of map6.entries()) {
  console.log(item)
}
for (const key of map6.keys()){
  console.log(key)
}
for(const value of map6.values()){
  console.log(value)
}

// 和 Array 的 forEach 相似
map6.forEach((value,key)=>{
  console.log(key,value)
})

// 因为是可迭代的，可以直接使用扩展操作转换为数组
console.log(...map6)
console.log([...map6])

/**
 * Map 和 Array
 */

let array1 = [[1,'one'],[2,'two'],[3,'three']]

// Array 转 Map
const map7 = new Map(array1)

map7.set(4,'4444')

// Map 转回 Array
array1 = [...map7]  // [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ], [ 4, '4444' ] ]

const array2 = [[5,'5555'],[6,'666']]
// 合并 Map 和 Array 为 Array
// [[ 1, 'one' ],[ 2, 'two' ],[ 3, 'three' ],[ 4, '4444' ],[ 5, '5555' ],[ 6, '666' ]]
array1 = [...map7,...array2]

// 合并 Map 和 Array 为 Map（本质还是 Array 转 Map）
// Map {1 => 'one',2 => 'two',3 => 'three',4 => '4444',5 => '5555',6 => '666'}
const map8 = new Map([...map7,...array2])


const set1 = new Set([1,2,3,4])

for (const value of set1.keys()) {
  console.log(value)
}
