/**
 * 对象属性
 */
 // 数值属性 ---------------------------------------------
 // 又叫“数据属性”，是对象 property （属性）的属性

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

 console.log(person)

 // 对象解构 ----------------------------------------------
let person1 = {
  name:'ZHT',
  age:29
}

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
function PersonCon(name,age,job){
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function(){
    console.log(this.name)
  }
}

const person1 = new PersonCon('jike',40,'CEO')
const person2 = new PersonCon('Robot',39,'CFO')

console.log(person1.constructor === PersonCon)
console.log(person1 instanceof Object)
console.log(person2 instanceof PersonCon)
