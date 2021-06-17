import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// import store from './store/index'

import './plugins/element.js'
import 'assets/styles/index.scss'
// Tailwind
// import 'tailwindcss/tailwind.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'
// import './utils/rem.js'

// sync(store, router)
window.resizeCallbackList = []
window.onresize = () => {
  window.resizeCallbackList.map(callback => {
    callback.fun()
  })
}

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
