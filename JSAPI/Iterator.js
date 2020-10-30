/**
 * 迭代器和生成器
 */

 // 迭代器--------------------------------------------------------
 // 自定义迭代器
 class IterableCls{
   constructor(num){
     this.num =  num
   }
   [Symbol.iterator] (){
     // 这里在本作用域单独定义变量，可以一直进行迭代
     // 如果直接是 next，只能迭代一次，后面都是 {done:true,value:undefined}
     let count = 1
     let num = this.num
     return {
       next(){
         if(count<=num){
           return {done:false,value:count++}
         }else{
           return {done:true,value:undefined}
         }
       }
     }
   }
 }
 let iterableN = new IterableCls(4)
 for (const key of iterableN) {
   console.log('第一次循环：',key)
 }
 for (const key of iterableN) {
  console.log('第二次循环：',key)
 }


 // 生成器 next -------------------------------------------------
 let generatorFn = function* () {
   yield 'foo'
   yield 'bar'
   yield 'baz'
 }

 const g = generatorFn()
 console.log(g.next())
 console.log(g.next())
 console.log(g.next())
 console.log(g.next())

 // yield 接收输入和产生输出
 function* generatorFn0(){
   return yield 'foo'
 }
 const g0 = generatorFn0()
 console.log(g0.next())       // { value: 'foo', done: false }
 console.log(g0.next('bar'))  // { value: 'bar', done: true }
 console.log(g0.next('bzr'))  // { value: undefined, done: true }

 // 生成器 yield* 产生可迭代对象
 // yield 和 * 可以将跟在其后的可迭代对象序列化为一连串的值
 function* generatorFn1(){
   yield* [1,2,3]
 }
for (const item of generatorFn1()) {
  console.log(item)
}

// 生成器 yield* 实现递归
function* nTimes(n){
  if(n>0){
    yield* nTimes(n-1)
    yield n-1
  }
}

for (const item of nTimes(3)) {
  console.log(item)
}

// 生成器当做默认迭代器
class Foo{
  constructor(){
    this.values = [1,2,3]
  }

  *[Symbol.iterator](){
    yield* this.values
  }
}

const f = new Foo()
for (const item of f) {
  console.log(item)
}

// 终止迭代器、生成器
// 1.return
// 2.next
// 3.throw
