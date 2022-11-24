/**
 * Vue 核心知识
 * 数据绑定、单向数据流、双向数据绑定、Vdom 等要有总结
 
Vue三要素

响应式: 例如如何监听数据变化,其中的实现方法就是我们提到的双向绑定（数据劫持）
模板引擎: 如何解析模板
渲染: Vue如何将监听到的数据变化和解析后的HTML进行渲染
 */

// Vue 和 react 选型上面，怎么选的 ---------------------------------------------------------------------
// 1、vue 使用的是模板，react 使用的是 JSX（一种新的语言）
// 2、vue 双向数据绑定，react 单向数据流（这个是怎么实现的）
// 3、react 有React Native（能在手机上创建原生应用）
// 4、都有用虚拟 DOM（Virtual DOM）
// 参考：http://caibaojian.com/vue-vs-react.html

// 虚拟 DOM
// 这样的一个概念：改变真实的DOM远不改变一个 JavaScript 对象的花销大的多。
// Virtual DOM 是一个映射真实 DOM 的 JS 对象，如果需要改变任何元素的状态，那么先在 Virtual DOM 上改变
//

// 响应式：2.x 的 definedProperty 的弊端，为什么在 3.x 用了 proxy--------------------------------------
// 1、definedProperty 只能劫持对象的属性，对于属性也是对象的，需要深度遍历；Proxy 可以深度劫持对象，并返回新的对象；
// 2、2.x 中不能监测数组的变化，Proxy 还可以代理数组，
//    （definedProperty 是有监控到数组下标变化的能力，但是出于性能/体验弃用，可以参考：https://segmentfault.com/a/1190000015783546）

// 数据的双向绑定：主要是指 v-model，这个其实是一个语法糖，是 v-bind:value 和 @change 两个的合并

// v-if 和 v-show ------------------------------------------------------------------------------------
// v-if 是当前元素是否会添加到 DOM 树中，来进行显示与否
// v-show 是当前元素会被添加到 DOM 树中，用 display 控制是否显示

// 计算属性和监听属性 ---------------------------------------------------------------------------------

// 自定义指令 ----------------------------------------------------------------------------------------

// 注册一个全局指令
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

// 在组件中注册，添加 direcitves 选项
var vue = {
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}

// 如下所示使用 自定义指令
/* <input v-focus /> */

// 使用的钩子函数，以及作用
// bind：只调用一次，指令第一次绑定到该元素时调用。在这里可以进行一次性的初始化操作
// inserted：被绑定节点插入父节点时调用（仅保证父节点存在，不能保证插入文档）
// update：所在组件的 VNode 更新时调用，但是可能发生在子 VNode 更新前。指令的值可能发生改变，也可能没有。
// componentUpdate：指令所在的 VNode 以及子 VNode 全部更新后调用
// unbind：只调用一次，元素与指令解绑时调用

// 修饰符 --------------------------------------------------------------------------------------------
// vue 中的修饰符主要是和指令结合使用的，主要有以下几个

// 1、v-on 修饰符：
//    .stop：调用 event.stopPropagation()
//    .prevent：调用 event.preventDefault()
//    .native：监听组件根元素的原生事件
//    .once：只触发一次
//    .left：只当点击鼠标左键时发生
//    .right：只当点击鼠标右键时发生

// 2、v-bind 修饰符：
//    .prop：作为 DOM 的 property 绑定，而不是 attribute
//    .sync：语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器

// 3、v-model 修饰符：
//    .layz：当全部收入，光标离开再触发 change
//    .trim：过滤收尾输入的空格
//    .number：输入字符串转为数字

// vue-router 中的路由 -------------------------------------------------------------------------------

// vuex 中的几个核心点 ----------=---------------------------------------------------------------------
// 一般是这样写的
export default {
  // 是否使用命名空间，使用，在获取的时候加上对应的 namaspace
  namespaced: true,
  // 数据存放的地方，（单一状态数，唯一数据源）
  state: {
    name: 'zht',
    address: 'xihu'
  },
  // 获取数据，对应可以用：this.$store.getName()
  getters: {
    // state 这个参数带不带都可以
    getName(state) {
      return state.name
    },
    getAddress() {
      return state.address
    }
  },
  // 修改数据，这里面的都是同步的事务，有两个同时调用时，得到的是一样的，这样不理想，对应的是：this.$store.commit('SET_NAME','dl')
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_ADDRESS: (state, address) => {
      state.address = address
    }
  },
  // 包含任意异步操作，这里面的方法是用来异步触发 mutations 中的方法，对应的是：this.$store.dispatch('updateName','dl')
  actions: {
    updateName({ commit }, params) {
      commit('SET_NAME', params)
    },
    changeAddress({ commit }, params) {
      commit('SET_ADDRESS', params)
    }
  }
}

// 遇到的难点
// 1、调用接口，怎么就是不行，总是出错？（用 axios ，看了源码找到了问题）

// v-model 自定义使用
Vue.component('base-checkbox', {
  // 改变 v-model 默认的绑定属性和抛出事件
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  // 绑定 checked 值，并绑定 change 抛出事件
  template: `
    <input type="checkbox" v-bind="checked" v-on:change="$emit('change',$event.target.checked)">
  `
})

// 使用
{
  /* <base-checkbox v-model="lovingVue"></base-checkbox> */
}
