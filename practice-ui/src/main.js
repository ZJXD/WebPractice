import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './plugins/element.js'
import 'assets/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
