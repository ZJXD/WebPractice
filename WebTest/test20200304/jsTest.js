/**
 * JS 练习
 * 参考：https://mp.weixin.qq.com/s/_-4cT_jBQHJWnY1NHZfdjA
 */

/**
 * 题目：1
 * 说明：主要是 perimeter 使用的是箭头函数，this 指向全局，没有 radius ，是 undefined，计算后是 NaN
 */
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () => 2 * Math.PI * this.radius
}

console.log(shape.diameter())
console.log(shape.perimeter())

/**
 * 题目：2
 * 说明：类内的 static 方法，只存在于创建时的构造函数，不能传递给子级，所以在子级调用报错
 */
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor
  }
}

const freddie = new Chameleon({ newColor: 'purple' })
console.log(freddie.colorChange('orange'))

/**
 * 题目：3
 * 说名：这里的 Person 是一个构造函数，不能像对常规对象那样添加属性。如果要添加的话，使用原型添加。
 */
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const member = new Person('Lydia', 'Hallie')
// Person.getFullName = () => this.firstName + this.lastName
// 正确写法，不能使用箭头函数，否则 this 指向有问题
Person.prototype.getFullName = function() {
  return this.firstName + this.lastName
}

console.log(member.getFullName())

/**
 * 题目：4
 * 说明：构造函数使用时，使用 new 作用是：新建一个空对象 {}，并把 this 指向这个空对象。
 *      所以不使用 new 的时候，相当于执行函数，this 指向全局 global，但是 global 不存在这些属性
 */
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const lydia = new Person('Lydia', 'Hallie')
const sarah = Person('Sarah', 'Smith')

console.log(lydia)
console.log(sarah)

console.log(String.prototype)
console.log(Object.getPrototypeOf(String.prototype))

/**
 * 题目：5
 * 说明：使用标记的模板字符串，第一个参数始终是字符串的值，传入字符串中的值，作为后续参数
 */
function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}

const person = 'Lydia'
const age = 21

getPersonInfo`${person} is ${age} years old`

/**
 * 题目：6
 * 说明：sessionStorage 存储的值，在选项卡关闭时删除，localStorage 会永久存储，只有 localStorage.clear() 才会删除
 */

/**
 * 题目：7
 * 说明：Object 的键值，都会存储为字符串，在查询时，不是字符串的会转为字符串。set 不能这样
 */
const obj = { 1: 'a', 2: 'b', 3: 'c' }
const set = new Set([1, 2, 3, 4, 5])

console.log(
  obj.hasOwnProperty('1'),
  obj.hasOwnProperty(1),
  set.has('1'),
  set.has(1)
)

/**
 * 题目：8
 * 说明：为 false 的值只有：undefined、null、NaN、0、''、false
 */
console.log(
  Boolean(0),
  Boolean(new Number(0)),
  Boolean(''),
  Boolean(' '),
  Boolean(new Boolean(false)),
  Boolean(undefined)
)
