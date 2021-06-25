const num = 123
const num1 = Number(123)
const num2 = new Number(123)

console.log(typeof num,typeof num1,typeof num2)    // number number object
console.log(num === num1)    // true
console.log(num === num2)    // false

let num = 123
let num1 = num.toFixed(1)

// 等同于下面的三步
let num = new Number(123)   // 创建一个 Number 类型的实例
let num1 = num.toFixed(1)   // 调用实例上的方法
num = null                  // 销毁实例

const num2 = 1263346567
// toString 返回数字的字符串形式
console.log(num2,num2.toString())

/**
 * 用法：返回指定小数位数的字符串
 *  toFixed(num)
 *    num:保留位数，小数点后几位
 */
console.log(num2.toFixed(2))    // 1263346567.00

/**
 * 用法：返回数值的指数形式字符串
 *  toExponential(num)
 *    num:保留位数，小数点后几位
 */
console.log(num2.toExponential(2))  // 1.26e+9

/**
 * 用法：返回数值的指数形式字符串
 *  toPrecision(num)
 *    num:有效位数（小数点前后一共几位）
 */
console.log(num2.toPrecision(3))  // 1.26e+9

/**
 * 用法：字符串转为浮点数
 *  Number.parseFloat(string)
 *    string:出去空格外，第一个字符是数值，否则为 NaN
 */
console.log(Number.parseFloat('123.45'))      // 123.45
console.log(Number.parseFloat('123.45##'))    // 123.45
console.log(Number.parseFloat('  123.45##'))  // 123.45
console.log(Number.parseFloat('ff123.45##'))  // NaN

/**
 * 用法：字符串转换为整数，舍弃小数点后数值
 *  Number.parseInt(string)
 *    string:出去空格外，第一个字符是数值，否则为 NaN
 *    radix:表示以什么进制解析第一个数值，0 和空按照 10 进制，2-36按照给定值进制算，其他值直接返回 NaN
 *    
 *    注意：如第一值不符合 radix 给定的进制要求，也是返回 NaN
 */
console.log(Number.parseInt('123.55'))      // 123
console.log(Number.parseInt('123.45##'))    // 123
console.log(Number.parseInt('  123.45##'))  // 123
console.log(Number.parseInt('ff123.45##'))  // NaN


// 判断数值
/**
 * 用法：是否是有限值，即不是 Infinity
 *  Number.isFinite(number)
 * 
 *  和全局的区别：
 *    Number.isFinite:只针对数值有效，不是数值的一律返回 false
 *    isFinite:对于非数值，调用 Number() 后判断
 */
console.log(Number.isFinite(15))        // true
console.log(Number.isFinite(0.8))       // true
console.log(Number.isFinite(NaN))       // false
console.log(Number.isFinite(Infinity))  // false
console.log(Number.isFinite(-Infinity)) // false
console.log(Number.isFinite('foo'))     // false
console.log(Number.isFinite('15'))      // false
console.log(Number.isFinite(true))      // false

// 和全局比较
console.log(isFinite(25))           // true
console.log(isFinite("25"))         // true
console.log(Number.isFinite(25))    // true
console.log(Number.isFinite("25"))  // false

/**
 * 用法：判断是否是 NaN
 *  Number.isNaN(number)
 * 
 *  和全局的区别：
 *    Number.isNaN:只针对数值有效，不是数值的一律返回 false
 *    isNaN:对于非数值，调用 Number() 后判断
 */

console.log(Number.isNaN(NaN))          // true
console.log(Number.isNaN(15))           // false
console.log(Number.isNaN('15'))         // false
console.log(Number.isNaN(true))         // false
console.log(Number.isNaN(9/NaN))        // true
console.log(Number.isNaN('true' / 0))   // true
console.log(Number.isNaN('true' / 'true'))// true

// 和全局比较
console.log(isNaN(NaN))           // true
console.log(isNaN("NaN"))         // true
console.log(Number.isNaN(NaN))    // true
console.log(Number.isNaN("NaN"))  // false
console.log(Number.isNaN(1))      // false

/**
 * 用法：判断是否是整数
 *  Number.isInteger(number)
 */

 console.log(Number.isInteger(10))    // true
 console.log(Number.isInteger(10.1))  // false

 // js 整数和浮点样的存储方法，所以下面的也是整数
 console.log(Number.isInteger(10.0))  // true

 // 不是数值的返回 false
 console.log(Number.isInteger(null))  // false
 console.log(Number.isInteger('17'))  // false
 console.log(Number.isInteger(true))  // false

 // 由于精度的问题，有些会被误判
 console.log(Number.isInteger(5.00000000000000002)) // true

 // 同样很接近 0 的也是，下面的 5 的 -325 次方
 console.log(Number.isInteger(5E-325))    // true


 /**
  * 用法：是否是安全的整数
  *   Number.isSafeInteger(number)
  *   
  *   因为精度的问题，超出一定的数值，即使是整数 js 表示也不准确
  *   所以在 ES6 中加入了 MIN_SAFE_INTEGER 和 MAX_SAFE_INTEGER 限定安全的整数范围
  */

console.log(Number.MAX_SAFE_INTEGER)  // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER)  // -9007199254740991

// 下面两个表示一样了，因为超出了 MAX_SAFE_INTEGER
console.log(9007199254740992)  // 9007199254740992
console.log(9007199254740993)  // 9007199254740992

console.log(Number.isSafeInteger('a')) // false
console.log(Number.isSafeInteger(null)) // false
console.log(Number.isSafeInteger(NaN)) // false
console.log(Number.isSafeInteger(Infinity)) // false
console.log(Number.isSafeInteger(-Infinity)) // false

console.log(Number.isSafeInteger(3)) // true
console.log(Number.isSafeInteger(1.2)) // false
console.log(Number.isSafeInteger(9007199254740990)) // true
console.log(Number.isSafeInteger(9007199254740992)) // false)

console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)) // false
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)) // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)) // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)) // false



/**
 * Math 中的一些数值操作
 */

// 绝对值 Math.abs
console.log(Math.abs(-2))               // 2

// 四舍五入取整 Math.round
console.log(Math.round(23.675))         // 24

// 向下取整 Math.floor
console.log(Math.floor(23.675))         // 23
console.log(Math.floor(-23.675))        // -24

// 取整 Math.trunc
// 和 floor 的区别：对于 负数的取整
console.log(Math.trunc(23.675))         // 23
console.log(Math.trunc(-23.675))        // -23

// 取最大值 Math.max
console.log(Math.max(2,34,5,6,23))      // 34

// 取最小值 Math.min
console.log(Math.max(2,34,5,6,23))      // 2

// 幂次方 Math.pow
console.log(Math.pow(2,3))              // 8

// 平方根 Math.sqrt
console.log(Math.sqrt(4))               // 16

// 立方根 Math.cbrt
console.log(Math.cbrt(123))             // 4.973189833268591
console.log(Math.cbrt(64))              // 4

// 随机数 0-1 之间 Math.random
console.log(Math.random())              // 随机的


const steps = [{
  step: 1753,
  timestamp: 1597507200000
}, {
  step: 1637,
  timestamp: 1597593600000
}, {
  step: 6216,
  timestamp: 1597680000000
}, {
  step: 6466,
  timestamp: 1597766400000
}, {
  step: 12998,
  timestamp: 1597852800000
}, {
  step: 7731,
  timestamp: 1597939200000
}, {
  step: 7115,
  timestamp: 1598025600000
}, {
  step: 3603,
  timestamp: 1598112000000
}, {
  step: 1659,
  timestamp: 1598198400000
}, {
  step: 3582,
  timestamp: 1598284800000
}, {
  step: 6979,
  timestamp: 1598371200000
}, {
  step: 4567,
  timestamp: 1598457600000
}, {
  step: 7639,
  timestamp: 1598544000000
}, {
  step: 9150,
  timestamp: 1598630400000
}, {
  step: 8565,
  timestamp: 1598716800000
}, {
  step: 6544,
  timestamp: 1598803200000
}, {
  step: 6316,
  timestamp: 1598889600000
}, {
  step: 15523,
  timestamp: 1598976000000
}, {
  step: 8254,
  timestamp: 1599062400000
}, {
  step: 13552,
  timestamp: 1599148800000
}, {
  step: 6163,
  timestamp: 1599235200000
}, {
  step: 6338,
  timestamp: 1599321600000
}, {
  step: 8508,
  timestamp: 1599408000000
}, {
  step: 4002,
  timestamp: 1599494400000
}, {
  step: 7501,
  timestamp: 1599580800000
}, {
  step: 5922,
  timestamp: 1599667200000
}, {
  step: 9635,
  timestamp: 1599753600000
}, {
  step: 7067,
  timestamp: 1599840000000
}, {
  step: 3878,
  timestamp: 1599926400000
}, {
  step: 4088,
  timestamp: 1600012800000
}, {
  step: 773,
  timestamp: 1600099200000
}]

function getCount(startTime,endTime) {
  const startD = new Date(startTime + ' 00:00:00')
  const endD = new Date(endTime + ' 23:59:59')
  // console.log(endD)
  const findList = []
  steps.map(step=>{
    const stepT = new Date(step.timestamp)
    stepT >= startD && stepT <= endD && findList.push(step.step)
  })
  console.log('苹果数：',findList.reduce((pre,next)=>pre+next,0))
}

getCount('2020-09-01','2020-09-07')
