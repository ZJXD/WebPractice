/**
 * 声明文件（Declare File）
 *  当使用第三方库时，我们需要引用它的声明文件，才能获取对应的代码补全、接口提示等功能
 */

/**
 * 新语法检索 ----------------------------------------------------------------------
 *
 * declare var：声明全局变量
 * declare function：声明全局方法
 * declare class：声明全局类
 * declare enum：声明全局枚举类型
 * declare namespace：声明全局命名空间
 * interface、type：声明全局类型
 * export：导出变量
 * export namespace：导出命名空间
 * export default：ES6 默认导出
 * export =：commonJS 导出模块
 * export as namespace：UMD 库声明全局变量
 * declare global：声明全局变量
 * declare module：扩展模块
 * /// <reference />：三斜线指令
 */

/**
 * 声明语句 ----------------------------------------------------------------------
 */

// 例如 jQuery 的用法
$('#foo')
jQuery('#foo')

// 上面两个在 js 中没有问题，但是在 ts 中会报错，应该 ts 不知道 jQuery 是什么
// 所以需要声明，有了下面的声明就不会报错（可以注释看看）
declare var jQuery: (selector: string) => any
declare var $: (selector: string) => any

// declare var 只是定义了全局变量 jQuery 的类型，仅仅用于编译时的检查
// 在编译结果中会被删除

/**
 * 声明文件 ---------------------------------------------------------------------
 * 通常我们把声明语句放到一个单独的文件中，这就是声明文件
 * 声明文件必须以 .d.ts 为后缀
 */

// ts 会解析项目中的 ts 文件，包括 .d.ts 后缀的文件
// 如果 .d.ts 文件无法解析，可以检查 tsconfig.json 中的 fiels、include、exclude 配置

// 第三方声明文件
// 一般第三方都会定义好声明文件，可以下载来用
// 推荐使用 @types 统一管理第三方声明文件

/**
 * 书写声明文件 ---------------------------------------------------------------
 *
 * 当第三方库没有声明文件时，需要自己书写
 * 真正书写一个声明文件并不是一件简单的事情
 *
 * 库的使用场景
 * 全局变量：通过 <script> 标签引入第三方库，注入全局变量
 * npm 包：通过 import foo from 'foo' 导入，符合 es6 模块规范
 * UMD 库：既可以通过 script 标签也可以 import 导入
 * 直接扩展全局变量：通过 script 标签引入，改变全局变量的结构
 * npm 包或 UMD 库中扩展全局变量
 * 模块插件：通过 script 或 import 导入后，改变另一个模块的结构
 */

// 全局变量 ---------------------------------------------
// 全局变量是最简单的场景，一般用 npm 和 @types 管理
// 也可以直接把文件放到 src 目录下

// 声明变量 ---------------------------
// 可以使用 declare var、let、const

declare let Vue: (selector: string) => any

// 一般全局的都不会进行修改，所以用 const 较多
declare const RequestObj: (request: object) => any

// 声明语句只能定义类型，切勿在声明语句中定义具体实现

// 声明方法 ---------------------------
// jQuery 其实是一个函数，也可以用 function
declare function jQueryF(selector: string): any
jQueryF('#foo')

// 还可以函数重载
declare function jQueryF(domReadyCallback: () => any): any

// 声明类 -----------------------------

declare class Animal {
  name: string
  constructor(name: string)
  sayHi(): string
  // hello() {
  //   return name + ',hello'
  // }
}

// 同样，类也只能用来定义类型，不能定义具体实现

// 声明枚举 ---------------------------
// 用 declare enum 声明的枚举称为外部枚举
declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

// 也是仅定义类型，而不是具体的值

let directions = [Directions.Up]

// 声明命名空间 -----------------------
// 在 ES6 前，用 namespace 解决模块化
// ES6 广泛使用后，不再使用 namespace
// 在声明文件中，declare namepace 还是比较常用

declare namespace jQueryN {
  function ajax(url: string, setings?: any): void
}
// 在 namespace 内部声明 function 直接声明，不需要 declare

// 嵌套命名空间 ---------------------------------------------
// 如果对象拥有深层的层级，需要用嵌套的 namespace 来声明深层的属性类型

declare namespace jQueryNa {
  function ajax(url: string, settings?: any): void
  namespace fn {
    function extend(object: any): void
  }
}

// 全局接口或类型 -------------------------------------------
// interface 定义接口，不需要 declare
interface AjaxSettings {
  method?: 'GET' | 'POST'
  data?: any
}

declare namespace jQueryIn {
  function ajax(url: string, settings?: AjaxSettings): void
}

// 在其他文件中导入也可以使用了，type 和 interface 相同

// 防止命名冲突 ---------------------------------------------
// 直接把 namespace 和 type 放在最外层，是作用于全局的整个项目
// 应该尽可能的减少全局变量或类型
// 所以最好放在 namespace 下
declare namespace jQueryIncludeIn {
  interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any
  }
  function ajax(url: string, settings?: AjaxSettings): void
}

// 在外部使用该接口，需要带上命名空间前缀
let settings: jQueryIncludeIn.AjaxSettings = {
  method: 'GET',
  data: {
    name: 'foo'
  }
}
jQueryIncludeIn.ajax('/url/test', settings)

// 声明合并 -----------------------------------------------
// 同一个对象可以用不同的声明类型，会不冲突的合并
// 具体见《声明合并》

// npm 包 ------------------------------------------------
/**
 * 导入一个包 import foo from 'foo' 这种方式是 ES6
 * 在使用包前，先看一看是否有声明文件：
 *    1、和要使用的包绑定在一起，判断依据是 package.json 中有
 *      types 字段，或者有一个 index.d.ts 声明文件。这种模式
 *      不需要额外安装其他包，最为推荐。所以我们自己创建包时也
 *      将声明文件和包这样绑定
 *    2、发布到 @types 里，只需要安装对应包的声明文件就可以了
 *      npm install @types/foo -S
 *
 * 如果上面都没有找到，需要自己写声明文件了。由于是通过 import
 * 语句导入的，所以声明文件存放的位置也有约束，有以下两种方式
 *    1、创建 node_modules/@types/foo/index.d.ts 文件，存放
 *      foo 模块的声明文件。但是这里有缺点，因为 node_modules
 *      不稳定，代码也不好同步到代码库，无法回溯版本，有被删除
 *      的风险，不太建议用这个方案
 *    2、创建一个 types 目录，用来管理自己的声明文件，将 foo
 *      是声明文件放在 types/foo/index.d.ts 中。这种方式需要
 *      配置 tsconfig.json 中的 paths 和 baseUrl 字段
 *    tsconfig 中配置
 *    {
 *      "complierOptions": {
 *        "module": "commonjs", // 可以多种选择，这个是常用的
 *        "baseUrl": "./"
 *        "paths": {
 *          "*": ["types/*"]
 *        }
 *       }
 *    }
 *    按照上面这样配置后，在 import 的时候，会去 types 目录下
 *    寻找对应的声明文件
 *
 * npm 包的声明文件主要的几种语法
 *    1、export 导出变量
 *    2、export namespace 导出命名空间
 *    3、export default ES6 默认导出
 *    4、export =  commonJS 导出模块
 */

// export --------------------------
// npm 包的声明文件和全局变量的声明文件有较大区别
// npm 包声明文件中使用 declare 声明只在当前文件可用
// 要在其他地方使用需要 export,使用的时候 import

// 示例见 《当前根目录下结构目录》

// foo/index.d.ts export
// bar/index.d.ts declare 和 export 混用

// 默认导出见：types/bar/index.d.ts

// commonJS 导出见：types/bar/index.d.ts

/**
 * 后续还有一些，后面补充 ------------------------------------------------------
 *
 */
