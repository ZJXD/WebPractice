/**
 * 声明合并（DeclareMerger）
 *    如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型
 */

/**
 * 函数合并
 *    函数重载，上面两个没有实现，最终合并后是第三个
 */
function reverse(x:number):number
function reverse(x:string):string
function reverse(x:number|string):number|string{
  if(typeof x === 'number'){
    return Number(x.toString().split('').reverse().join(''))
  }else if(typeof x === 'string'){
    return x.split('').reverse().join('')
  }
}

/**
 * 接口合并
 *    1、属性合并：出现的属性都会有，同一个属性出现多次，类型相同没问题，类型不同会报错
 *    2、方法合并：同上面的函数合并
 */

 interface Alarm{
   name: string
   price:number
   alert(s:string):string
 }

 interface Alarm{
   price:number   // 如果这两定义的类型是 number 和上面的合并，string 的报错
   weigth:number
   alert(s:string,n:number):string
 }

 // 上面合并后
 interface Alarm{
   name:string
   price:number
   weigth:number
   alert(s:string):string
   alert(s:string,n:number):string
 }
