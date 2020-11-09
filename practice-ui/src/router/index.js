import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/components/layout.vue'
import Welcome from '../views/pages/WelcomePage.vue'
import FirstPage from '../views/pages/FirstPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          component: Welcome
        },
        {
          path: '/firstPage',
          name: 'firstPage',
          component: FirstPage
        },
        {
          path: '/canvas',
          name: 'canvas',
          component: () => import('../views/pages/Canvas/index.vue')
        },
        {
          path: '/animation',
          name: 'animation',
          component: () => import('../views/pages/Animation.vue')
        },
        {
          path: '/bookpre',
          name: 'bookpre',
          component: () => import('../views/pages/BookPreview.vue')
        },
        {
          path: '/fang',
          name: 'fang',
          component: () => import('../views/pages/Fang.vue')
        }
      ]
    }
  ]
})
