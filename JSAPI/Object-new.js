/**
 * 对象属性
 */
 // 数值属性 ---------------------------------------------
 // 又叫“数据属性”，是对象 property （属性）的属性

 // 构造函数有 prototype ，实例对象是 __proto__ （部分浏览器实现的）

 // 访问器属性 -------------------------------------------
 let book = {
   year_ : 2017,
   edition : 1
 }

 Object.defineProperty(book,'year',{
   get(){
     return this.year_
   },

   set(newVal){
     if(newVal>2017){
       this.year_ = newVal
       this.edition += newVal - 2017
     }
   }
 })

 book.year = 2020
 console.log(book.year)
 console.log(book.edition)

 // set 在这里的作用，没有达到条件，不会改变
 book.year = 2013
 console.log(book.year)
 console.log(book.edition)

 // 一次定义多个属性，下面定义的和上面一样
 let book1 = {}
 Object.defineProperties(book,{
   year_:{
     value:2017
   },
   edition:{
     value:1
   },
year:{
  get(){
    return this.year_
  },
  set(newVal){
    if(newVal>2017){
      this.year_ = newVal
      this.edition += newVal - 2017
    }
  }
}
 })

 // 增强语法 ----------------------------------------------

 // 计算属性
 const nameKey = 'name'
 const ageKey = 'age'
 const jobKey = 'job'
 let uniqueToken = 0

 function getUniqueKey(key){
   return `${key}_${uniqueToken++}`
 }

 let person = {
   [getUniqueKey(nameKey)]:'ZHT',
   [getUniqueKey(ageKey)]:29,
   [getUniqueKey(jobKey)]:'code'
 }

 console.log(person)  // { name_0: 'ZHT', age_1: 29, job_2: 'code' }

 // 对象解构 ----------------------------------------------
let person1 = {
  name:'ZHT',
  age:29
}

let {name,age} = person1
let {name:personName,age:personAge} = person1
console.log(personName,personAge)

// 可解构构造函数
let {constructor:c} = 4
console.log(c)

// 对象创建 --------------------------------------------------------------------
// 工厂模式 ----------------------------------------------
function createPerson(name,age,job){
  let obj = {}
  obj.name = name
  obj.age = age
  obj.job = job
  obj.sayName = function(){
    console.log(this.name)
  }

  return obj
}

// 构造函数模式 ------------------------------------------
function PersonConstructor(name,age,job){
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function(){
    console.log(this.name)
  }
}

const person1 = new PersonConstructor('jike',40,'CEO')
const person2 = new PersonConstructor('Robot',39,'CFO')

console.log(person1.constructor === PersonConstructor)
console.log(person1 instanceof Object)
console.log(person2 instanceof PersonConstructor)


console.log(person1.sayName === person2.sayName)


// 原型模式 ----------------------------------------------

function Person(){}
// 直接在原型上面添加属性、方法
Person.prototype.name = 'ZHT'
Person.prototype.age = 24

let person1 = new Person()
let person2 = new Person()
console.log(person1.name)
console.log(person2.name)
person1.name = 'FDL'
console.log(person1.name)
console.log(person2.name)

console.log(Person.toString())

// 自定义构造函数时，原型对象只会自动获得 constructor 属性，其他的方法继承自 Object
//  1、这个 constructor 指回与之关联的构造函数
console.log(Person.prototype.constructor === Person)    // true

// 根据这个可以一直向上查找，最终源于 Object 原型
console.log(Person.prototype.__proto__ === Object.prototype)    // true
console.log(Person.prototype.__proto__.constructor === Object)    // true
console.log(Person.prototype.__proto__.__proto__ === null)    // true

// 调用构造函数创建一个实例时，实例内部的 [[prototype]] 指向构造函数原型
//  1、在一般实现中 [[prototype]] 是以 __proto__ 暴露出来的
//  2、实例和构造函数原型有直接联系
let personPro = new Person()
console.log(personPro.__proto__ === Person.prototype)   // true


// 混合模式 ----------------------------------------------
// 构造函数模式
function Animation(obj){
  // 根据传入初始化
  this.name = obj.name
  this.id = obj.id
}

// 原型模式
Animation.prototype = {
  // 做相同的事情
  eat:function () {
    console.log(this.name,'，开始吃饭了……')
  }
}

let dog = new Animation({name:'dog',id:1})
dog.eat()

// 测试 --------------------------------------------------------------------
function Test(index,name){
  this.index = index
  this.name = name
}
console.log(Test.prototype)
console.log(Test.prototype.__proto__ === Object.prototype)
console.log(Test.prototype.__proto__.constructor === Object)

function CreateTest(index,name){
  return new Test(index,name)
}

let test = new CreateTest(1,'ZHT')

console.log(test.index)
console.log(test.name)
console.log(test instanceof CreateTest)
console.log(test instanceof Test)
console.log(test.hasOwnProperty('name'))
console.log(test.__proto__.constructor === Object)

// 这里的 CreateTest 很具有迷惑性
// 因为 CreateTest 有 return ，所以原型上面就没有 CreateTest
