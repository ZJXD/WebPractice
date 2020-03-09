/**
 * 该文档是 Object 基础知识
 * 参考：https://mp.weixin.qq.com/s/J16D7ofGt9kxgoI2rE_RVA
 */

const { log } = console

/**
 * 对象的建立
 * 1、构造函数
 * 2、对象字面量
 * 3、create 创建
 * 分别对应下面几个 */

let obj1 = new Object('obj1')
let obj2 = {
  name: 'obj2',
  value: 123
}
let obj3 = Object.create({
  name: 'obj3',
  value: 130
})

// log(obj1.name, obj2.name, obj3.name)

/**
 * Object.prototype
 * 是所有对象的原型，谨慎使用 */
Object.prototype.custom = 1
log(obj1.custom)

/**
 * Object.prototype 成员 ---------------------------------------------------------------------------（一级标题）
 * Object.prototype.constructor ---- 构造器
 * Object.prototype.toString(radix) ---- 返回描述对象字符串，radix 是当为 Number 时进制
 * Object.prototype.toLocaleString() ---- 基本同上
 * Object.prototype.valueOf() ---- 返回基本类型的 this 值
 * Object.prototype.hasOwnProperty(prop) ---- 对象中是否有该属性（原型链上的返回 false）
 * Object.prototype.isPrototypeOf(obj) ---- 当前对象的原型是不是目标对象（括号中的是当前对象）
 * Object.prototype.propertyIsEnumerable(prop) ---- prop 是否是当前对象 for in 中的值
 */

/**
 * ES5 中附加的 Object 属性 ---------------------------------------------------------------------------（一级标题）
 */

console.log(Object.getOwnPropertyDescriptors(Object)) // 查看 Object 全部的属性

/**
 * 属性描述符  ---------------------------------------------------------------------------（二级标题）
 * 可以通过它对定义的属性有更大的控制权，主要有下面几个
 * value ---- 获取属性时返回的值
 * writable ---- 该属性是否可写
 * enumerable ---- 该属性在 fon in 循环中是否会被枚举
 * Configurable ---- 该属性是否可被删除
 * set() ---- 属性的更新操作
 * get() ---- 获取属性操作
 *
 * 下面两个不可共存：
 * 数据描述符：value、writable、enumerable、configurable
 * 存取描述符：get()、set()、enumerable、configurable
 */

// 下面是两种添加属性的方式，下面一种对属性有更大控制权
// 除了 value 默认 undefined，其他都是默认 false
let person = {}
person.legs = 2 // 这种方式添加的属性，其他描述符都是 true
console.log('person descriptors:', Object.getOwnPropertyDescriptors(person))
// 数据描述符形式
Object.defineProperty(person, 'legs1', {
  value: 2,
  writable: true,
  enumerable: true,
  configurable: true
}) //z这种方式 除了 value 默认 undefined，其他都是默认 false
// 存取描述符形式
Object.defineProperty(person, 'legs2', {
  set: function(v) {
    return (this.value = v)
  },
  get: function() {
    return this.value
  },
  enumerable: true,
  configurable: true
})
person.legs2 = 5
log(person.legs, person.legs1, person.legs2)

/**
 * Object.defineProperty(obj,prop,descriptor)----------------------------------------------（二级标题）
 * 用于定义对象的属性
 *
 * Object.defineProperties(obj,props)
 * 基本功能同上面，但是可以一次定义多个属性
 */
let glass = Object.defineProperties(
  {},
  {
    color: {
      value: 'transparent',
      writable: true
    },
    fullness: {
      value: 'half',
      writable: true
    }
  }
)
log('glass.fullness:', glass.fullness)

/**
 * Object.getPrototypeOf(obj)---------------------------------------------------------------（二级标题）
 * 获取当前对象的原型
 */
let s = new String('123')
log('s prototype:', Object.getPrototypeOf(s))

/**
 * Object.create(obj,descr)-----------------------------------------------------------------（二级标题）
 * 创建一个新对象，并设置原型，用属性描述符定义对象的原型属性
 */
let person1 = { hi: 'hello' }
Object.defineProperty(person1, 'name', {
  value: 'ZHT',
  enumerable: true
})
let child = Object.create(person1, {
  prop: {
    value: 1
  },
  childName: {
    value: 'ZHT-C',
    enumerable: true,
    writable: true
  }
})
console.log('child prototype:', Object.getPrototypeOf(child))
console.log('child prop:', child.prop, ',child hi:', child.hi)

/**
 * Object.getOwnPropertyDescriptor(obj,property)----------------------------------------------（二级标题）
 * 查看一个对象的某一个属性的详情，也可以一窥内置的对象属性
 */
console.log(
  'Object.toString:',
  Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
)

/**
 * Object.getOwnPropertyNames(obj)-----------------------------------------------------------（二级标题）
 * 返回当前对象自身的所有属性名，包括不可枚举的
 * Object.keys(obj)：返回的是自身可枚举的
 * 都是本对象自己的，不包括原型链中的
 */
console.log('child property:', Object.getOwnPropertyNames(child))
console.log('child property:', Object.keys(child))

/**
 * Object.preventExtensions(obj)-----------------------------------------------------------（二级标题）
 * Object.isExtensible(obj)
 * preventExtensions 用于禁止向对象添加更多属性（不可扩展对象，但是可在其原型中添加）
 * isExtensible 检查对象是否可以添加对象
 */
// Object.preventExtensions(child)
console.log('child isExtensible:', Object.isExtensible(child))

/**
 * Object.seal(obj)-------------------------------------------------------------------------（二级标题）
 * Object.isSealed(obj)
 * seal 用于密封一个对象，并返回密封后的对象。这个对象的属性不可配置：这种情况下，只能变更现有属性的值，
 * 不能删除或者重新配置属性的值
 * isSeal 判断是否是密封的
 * 密封对象 不可扩展
 */
// Object.seal(child)
console.log('child seal:', Object.isSealed(child))

/**
 * Object.freeze(obj)------------------------------------------------------------------------（二级标题）
 * Object.isFrozen(obj)
 * freeze 用于冻结一个对象，冻结后：不可添加属性、删除属性、不能修改属性值，以及配置值
 * isFrozen 用于判断是否被冻结
 */
console.log('child frozen:', Object.isFrozen(child))
// Object.freeze(child)
child.childName = 'test'
console.log('child name', child.childName)

/**
 * 不可扩展、密封、冻结 对比 --------------------------------------------------------------------（二级标题）
 */
// 方法名	                    增(extensible)	  删(configurable)	  改(writable)
// Object.preventExtensions	  ×                 √	                  √
// Object.seal	              ×	                ×                 	√
// Object.freeze	            ×	                ×	                  ×

/**
 * ES6 中附加的 Object 属性 --------------------------------------------------------------------------（一级标题）
 */

/**
 * Object.is(value1,value2)------------------------------------------------------------------（二级标题）
 * 用于比较两个值是否严格相等 基本等同于（===）
 * 有两个地方不一样：+0 不等于 -0，NaN 等于自身
 */
console.log(Object.is('11', 11))
console.log(Object.is(+0, -0))
console.log(Object.is(NaN, NaN))

/**
 * Object.assign(target,...sources)-----------------------------------------------------------（二级标题）
 * 该方法用于将源对象（sources）的可枚举属性赋值到目标对象（target），可以同时将多个源对象复制给目标对象
 * 有同名属性，复制后后面的会覆盖前面的属性
 * 只复制自身的可枚举的属性
 * 属性类型是 Symbol 的也可以复制
 * 对于嵌套类型的对象，是直接替换
 * 对于数组，取 length 最长的未长度，并后面覆盖前面
 */
let target = { a: 1 }
let source1 = { b: 2 }
let source2 = { c: 3 }
let objAssign = Object.assign(target, source1, source2)
console.log('target:', target)
console.log('objAssign:', objAssign)
console.log(Object.assign([1, 2], [3, 4, 5], [6, 7]))

/**
 * Object.getOwnPropertySymbol(obj) ---------------------------------------------------------（二级标题）
 * 返回一个数组，该对象自身的所有 symbol 属性键
 */

/**
 * Object.setPrototypeOf(obj,prototype) ----------------------------------------------------（二级标题）
 * 设置该对象（obj）的原型为 prototype
 * 1、对于 obj.__proto__ 这个属性，可以读写 obj 的原型，但是这个属性不是在 ES6 正文中，是在附录中，
 * 可见这个是内部的属性，不是正式对外的 API
 * 2、所以操作 obj 的原型最好的方法是：Object.getPrototypeOf()、Object.setPrototypeOf()、Object.create()
 * 3、都是调用的 Object.prototype.__proto__，在 ES6 中推荐的是 setPrototypeOf
 */

/**
 * ES8 中附加的 Object 属性 --------------------------------------------------------------------------（一级标题）
 */

/**
 * Object.getOwnPropertyDescriptors(obj) --------------------------------------------------（二级标题）
 * 用于获取自身所有属性的描述
 */

console.log('child all property:', Object.getOwnPropertyDescriptors(child))

/**
 * Object.values(obj) ---------------------------------------------------------------------（二级标题）
 * 用于获取对象自身所有可枚举属性的值
 * 顺序和 for in 顺序一致（不同点是，for in 包括继承的属性）
 */
console.log('target values:', Object.values(target))

/**
 * Object.entries(obj) ---------------------------------------------------------------------（二级标题）
 * 返回的是对象自身的可枚举数据键值对（可迭代）
 * 顺序和 for in 顺序一致（不同点是，for in 包括继承的属性）
 */
let objEntries = { a: 1, b: 2, c: 3 }
console.log(
  'objEntries descriptors:',
  Object.getOwnPropertyDescriptors(objEntries)
)
console.log('objEntries keys:', Object.keys(objEntries))
console.log('objEntries values:', Object.values(objEntries))
console.log('objEntries entries:', Object.entries(objEntries))

console.log(
  'from objEntries to Object:',
  Object.fromEntries(Object.entries(objEntries))
) // 当前环境不支持，在浏览器下可以

/**
 * ES10 中附加的 Object 属性 --------------------------------------------------------------------------（一级标题）
 */

/**
 * Objec.fromEntries(iterable) --------------------------------------------------------------（二级标题）
 * 创建一个以给定数组、map或者其他可迭代为属性的新对象
 * 是 entries 的逆操作
 */

/**
 * 上面讲的获取属性、名称等的，都是获取自身的，
 * 要获取原型链上面的，用 for in 可以获取到。
 * 下面是示例：
 */
let obj4 = {
  name: 'zht',
  age: 29
}

let obj4_1 = Object.create(obj4, {
  child: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 'ssss'
  }
})
console.log('names:', Object.getOwnPropertyNames(obj4_1))
for (const key in obj4_1) {
  console.log('for in Name', key)
  if (obj4_1.hasOwnProperty(key)) {
    console.log('hasOwnProperty Name', key)
  }
}
