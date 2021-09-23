/**
 * String 方法属性等
 */

 /**
  * padStart、padEnd ，字符串补全长度功能 --------------------------------------------------
  * 下面题目参考：https://mp.weixin.qq.com/s/cgseAdJHxpm0fa4az16GtA
  * 
  * 用法：
  *   padStart(targetLength,[padString])
  *     targetLength：字符串目标长度，即补全后的长度，如果小于当前长度，返回当前字符串
  *     padString：补全字符串，不传填充空格
  */

 //  将字符串 “123456” 转换为 “##3456”

 const mask = (str, maskStr = '##') =>{
   if (!str || str.length<=4) return
   // 这里 slice 不会改变 str 本身，所以后面的 length 可用
   return str.slice(-4).padStart(str.length,maskStr)
 }
 console.log(mask('123456'))


 const str1 = '2dadsvge'
 console.log(str1.padEnd(10))

//  console.log('string join',str1.join())
console.log('fontsize',str1.fontsize(14))
console.log('valueOf:',str1.valueOf())

const str2 = new String('2dadsvge')
const str3 = String('2dadsvge')

console.log(typeof str1,typeof str2,typeof str3)
console.log(str1 === str2)

const str11 = '2dadsvge'
console.log(str11.charAt(4))
console.log(str11.charCodeAt(4))
console.log(str11.codePointAt(4))

const str12 = '𠮷祥ee'
console.log(str12.codePointAt(0))
console.log(str12.codePointAt(1))
console.log(str12.codePointAt(2))
console.log(str12.codePointAt(3))

const str13 = '吉'
console.log(str13.codePointAt(0))
console.log(str13.codePointAt(1))

const str14 = '𠮷'
console.log(str14.codePointAt(0))
console.log(str14.codePointAt(1))

function is32Bit(c) {
  return c.codePointAt(0) > 0xFFFF;
}

console.log(is32Bit("𠮷")) // true
console.log(is32Bit("a")) // false

const str15 = 'dnzojonmjonns'
console.log(str15.indexOf('jon'))
console.log(str15.indexOf('rfbd'))
console.log(str15.lastIndexOf('jon'))
console.log(str15.lastIndexOf('rfbd'))
console.log(str15.includes('jon'))
console.log(str15.includes('rfbd'))
console.log(str15.match('jon'))
console.log(str15.match('rfbd'))
console.log(str15.search('jon'))
console.log(str15.search('rfbd'))
console.log(str15.startsWith('dnzo'))
console.log(str15.startsWith('rfbd'))
console.log(str15.endsWith('mns'))
console.log(str15.endsWith('rfbd'))

// slice 返回字符串的子集，原字符串不变
const str16 = 'mzodennwe557scv'
console.log(str16.slice())    // 未指定开始和结尾，返回原字符串
console.log(str16.slice(3))   // 未指定结尾，一直到原字符串结尾
console.log(str16.slice(3,7)) // 指定开始结尾，但不包括结尾
console.log(str16.slice(3,27))// 结尾索引超出字符串长度，到字符串结尾
console.log(str16.slice(7,3)) // start > end ,返回 ''
console.log(str16.slice(-3,27)) // start > 0 ,start + length 这个新值继续重复上面操作

// substring ,原字符串不变
const str16 = 'mzodennwe557scv'
console.log(str16.substring())    // 未指定开始和结尾，返回原字符串
console.log(str16.substring(3))   // 未指定结尾，一直到原字符串结尾
console.log(str16.substring(3,7)) // 指定开始结尾，但不包括结尾
console.log(str16.substring(3,27))// 结尾索引超出字符串长度，到字符串结尾
console.log(str16.substring(7,3)) // start > end ,start 和 end 交换
console.log(str16.substring(-5,3)) // start end 中有一个小于0，当0处理

// trim，原字符串不变
const str17 = `  imnoi oasdmoib9 l 
`
console.log(str17.trim())     // 前后空格、行终止符都删除
console.log(str17.trimStart())  // 删除字符串头空格终止符
console.log(str17.trimLeft())   // 删除字符串头空格终止符
console.log(str17.trimEnd())    // 删除字符串尾空格终止符
console.log(str17.trimRight())  // 删除字符串尾空格终止符
console.log(str17)


/**
 * 用法：
 *  repeat(count)
 *    count：重复的份数，不传或为0，返回''
 */

 const str18 = 'sdf'
 console.log(str18.repeat())  // ''
 console.log(str18.repeat(0)) // ''
 console.log(str18.repeat(3)) // sdfsdfsdf

 /**
  * 用法：
  *   concat(string|string[])
  *     string:要拼接到后面的字符串，不传返回原字符串
  *            当有字符串数组，会用“,”拼接后再添加
  */
 const str19 = 'srndf'
 console.log(str19.concat('rrrrr'))                 // srndfrrrrr
 console.log(str19.concat('rrrrr','ppppp'))         // srndfrrrrrppppp
 console.log(str19.concat(['cccc','ddddd']))        // srndfcccc,ddddd
 console.log(str19.concat(['cccc','ddddd'],'kkk'))  // srndfcccc,dddddkkk


 /**
  * 用法：
  *   big()
  *     转换为 big 标签
  *   fontsize(size) 
  *     size：number，转换后的标签字体大小
  */
 const str20 = '字符转标签'
 console.log(str20.big())         // <big>字符转标签</big>
 console.log(str20.fontsize(16))  // <font size="16">字符转标签</font>

 /**
  * 用法：
  *   `` 标识
  *   包含 ` 的，需要转义：`\`Yo\` World!`
  *   多行字符串：所有的空格、缩进都会保留并输出
  *   嵌套：${}
  *   嵌套的可以是变量，也可以是函数等，结果值不是 string 的会转换为 string
  */

const s = '嵌套变量'
function getAge() {
    return 30
  }
const str21 = `zheg
    
上面有换行，会输出：
${s},
年龄：${getAge()}`

console.log(str21)


/**
 * 用法：
 *  str.split(separator,limit)
 *    separator：分隔字符，也可以是正则表达式。当不传时，直接返回全部字符
 *    limit：限制风格字符后 array 的长度，超过该值结束分隔。不传就全部分隔
 */

// limit 传值
 var myString = "Hello World. How are you doing?";
 var splits = myString.split(" ", 3);
 
 console.log(splits);

 // 正则表达式
 var myString = "Hello 1 word. Sentence number 2.";
 var splits = myString.split(/(\d)/);
 
 console.log(splits);

 // 使用数值作为分隔符
const myString = 'ca,bc,a,bca,bca,bc';
const splits = myString.split(['a','b']);
// myString.split(['a','b']) 相当于 myString.split(String(['a','b']))，所以是下面的结果
console.log(splits);  //["c", "c,", "c", "c", "c"]

// split 翻转字符串
const str = 'asdfghjkl';
const strReverse = str.split('').reverse().join(''); // 'lkjhgfdsa'
