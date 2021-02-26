/*
 * @Author: ZHT 
 * @Date: 2021-02-21 10:18:18 
 * @Last Modified by: ZHT
 * @Last Modified time: 2021-02-21 16:32:03
 */

// 参考：
//  https://segmentfault.com/a/1190000019675719?utm_source=tag-newest
//  https://mp.weixin.qq.com/s/Nvp_N4Sj0PlBqXjTis7UCQ

/**
 * Proxy
 * 
 * 语法：const p = new Proxy(target,handler)
 *    target：要代理对象
 *    handler：一个通常以函数作为属性的对象，属性是对代理对象执行的捕获器
 * 
 * Proxy 支持的代理操作有：
 *    get
 *    set
 *    deleteProperty：delete 操作符的捕获器
 *    ownKeys：getOwnPropertyNames、getOwnPropertySymbols、keys、for in 方法的捕获器
 *    has：in 操作符的捕获器
 *    isExtensible：isExtensible 的操作符
 *    preventExtensions：不能扩展
 *    apply：拦截 proxy 实例作为函数调用操作，通过 call、apply 都会拦截
 *    construct：拦截作为构造函数时的调用，如 new 时
 *    getOwnPropertyDescriptor
 *    defineProperty：defineProperty、definedProperties 操作符捕获器
 * 
 *  1、不可以深度代理
 */


/**
 * 基本示例
 */
const man = {
  name:'ZHT',
  borth:{
    month:11
  }
}

const proxy = new Proxy(man,{
  // get 捕获器，也可以拦截未知的属性
  get(target,property,receiver){
    console.log(`正在访问属性${property}`)
    return target[property]
  },

  set(target,property,value){
    console.log(`修改了属性${property}`)
    target[property] = value
  }
})

console.log(proxy.name)
console.log(proxy.borth.month)
proxy.name = 'DL'
proxy.borth.month = 2

console.log(proxy)

/**
 * 使用场景
 */


 // 增强数组 --------------------------------------------------
function enhancedArray(arr){
  return new Proxy(arr,{
    get(target,property,receiver){
      const range = getRange(property)
      const indices = range ? range : getIndices(property)
      const values = indices.map(index=>{
        const key = index < 0 ? (target.length + index) : index
        return Reflect.get(target,key,receiver)
      })

      return values.length === 1 ? values[0] : values
    }
  })

  function getRange(str){
    let [start,end] = str.split(':').map(Number)

    if(typeof end === 'undefined') return false

    let range = []
    for(let i = start;i<end;i++){
      range = range.concat(i)
    }
    return range
  }

  function getIndices(str){
    return str.split(',').map(Number)
  }
}

const enArr = enhancedArray([1,2,3,4,5,6])
console.log(enArr[-3])
console.log(enArr[[2,5]])

 // 隐藏属性 --------------------------------------------------
 function hideProperty(target,prefix='_'){
  return new Proxy(target,{
    has:(obj,prop)=>!prop.startsWith(prefix) && prop in obj,
    ownKeys:(obj)=> Reflect.ownKeys(obj).filter(prop=>typeof prop != 'string' || !prop.startsWith(prefix)),
    get:(obj,prop,rec)=> (prop in rec ? obj[prop] : undefined)
   })
 }

 const hideMan = hideProperty({name:'ZHT',_pwd:'sbvekn2x2'})
 console.log(hideMan._pwd)
 console.log('_pwd' in hideMan)
 console.log(Object.keys(hideMan))
 console.log(Object.getOwnPropertyNames(hideMan))

 // this指向 --------------------------------------------------
 // 谁调用，this 指向谁
 const target = {
   foo(){
     return{
       thisIsTarget: this === target,
       thisIsProxy: this === proxy
     }
   }
 }

 const proxy = new Proxy(target,{})
 console.log(target.foo())
 console.log(proxy.foo())

 // get receiver  -----------------------------------------------
 // receiver 指向当前的 Proxy 对象或者继承于当前的 Proxy 对象

 const proxy = new Proxy({},{
   get:(target,property,receiver) => receiver
 })
 console.log(proxy.getReceiver === proxy)
 const inherits = Object.create(proxy)
 console.log(inherits.getReceiver === inherits)

 // 可撤销代理 --------------------------------------------------
// Proxy.revocable(target,handler)
// 返回对象：{"proxy":proxy,"revoke":revoke}
//    proxy：正常的代理对象
//    revoke：撤销方法
const {proxy,revoke} = Proxy.revocable({},{})
proxy.name = 'ZHT'
console.log(proxy.name)

// 撤销后，代理对象不可用执行任何操作
revoke()
console.log(proxy.name)
