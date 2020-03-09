/**
 * 原型
 */

// class 是一种语法糖，和 function 效果一样（下面的例子可以看出来）-------------------------
function Person(name, age) {
  this.name = name
  this.age = age
}
let person1 = new Person('zht', 29)
console.log(Person.__proto__, Person.prototype, Person.prototype.constructor)
let person2 = Person('dl', 25)
console.log(person1.__proto__, person2.__proto__)

class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

let student1 = new Student('jx', 3)
console.log(student1.__proto__)

// 只有函数才有 prototype，对象是没有的 ----------------------------------------------------
console.log(Object.constructor) // function Function() {}
console.log(Function instanceof Object) // true
console.log(Object instanceof Function) // true

let objTemp = {
  name: ' zht',
}
console.log(objTemp.prototype)

// prototype，最主要的用法是：将属性暴露成公用的--------------------------------------------
function Person1(name, age) {
  this.name = name
  this.age = age
  this.sayHello = function() {
    console.log(this.name + ' say Hello')
  }
}

let girl = new Person1('mei', 21)
let boy = new Person1('Jon', 22)
girl.sayHello()
boy.sayHello()
console.log(girl.sayHello === boy.sayHello)

function Person2(name, age) {
  this.name = name
  this.age = age
}
Person2.prototype.sayHello = function() {
  console.log(this.name + ' say Hello')
}
let girl = new Person2('mei', 21)
let boy = new Person2('Jon', 22)
girl.sayHello()
boy.sayHello()
console.log(girl.sayHello === boy.sayHello)
