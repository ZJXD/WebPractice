import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout.vue'
import Welcome from '../views/WelcomePage.vue'
import FirstPage from '../views/FirstPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/welcome',
      children: [
        {
          path: '/',
          name: 'welcome',
          component: Welcome,
        },
        {
          path: '/firstPage',
          name: 'firstPage',
          component: FirstPage,
        },
      ],
    },
  ],
})
