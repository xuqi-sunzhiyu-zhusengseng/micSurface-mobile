import Vue from 'vue'
import Router from 'vue-router'
import store  from '../store'


import Home from '../pages/Home/Home'
import Register from '../pages/Register/Register'
import Review from '../pages/Review/Review'
import Success from '../pages/Success/Success'
import Redirect from '../pages/Redirect/Redirect'


Vue.use(Router)


const router = new Router({
  // mode: 'history',
  // base: 'dist/',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        headerStatus: true,
        tabStatus: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        headerStatus: true,
        tabStatus: true
      }
    },
    {
      path: '/review',
      name: 'Review',
      component: Review,
      meta: {
        headerStatus: true,
        tabStatus: true
      }
    },
    {
      path: '/success',
      name: 'Success',
      component: Success,
      meta: {
        headerStatus: true,
        tabStatus: true
      }
    },
    {
      path: '/redirect',
      name: 'Redirect',
      component: Redirect,
      meta: {
        headerStatus: true,
        tabStatus: true
      }
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

// 路由的前置守卫
router.beforeEach((to, from, next) => {
  next()
});
export default router
