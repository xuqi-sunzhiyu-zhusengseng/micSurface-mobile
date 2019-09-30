import Vue from 'vue'
import Router from 'vue-router'
import store  from '../store'
import {getActivityMessage} from '../assets/js/utils'

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
  let url = window.location.href;
  //请求用户的token，有数据：获取活动信息，无数据，返回 url，拼接 url 跳转
  //无 eventId
  if(!to.query.eventId && !store.state.activityMessage.eventId){
    if(to.path !='/redirect'){
      router.push({ 'path':'/redirect'})
      next()
    }
  }else if(!store.state.activityMessage.eventId){
    router.app.$store.dispatch('setEventId',to.query.eventId);
    getActivityMessage(store).then((res)=>{
      handleLink(res,to,router,next)
    })
  }else{
    next()
  }



});
export default router



function handleLink(res,to,router,next){
  if(!res.actStatus.IsEnable){ // 是否开启活动报名
    router.push({
      'name': 'Redirect',
    })
    next()
  }else{
    console.log(res);
    router.app.$store.dispatch('setActivityAllMessage',res)
    router.app.$store.dispatch('setCampaignChannelId',res.actStatus.Id)
    // 如果当前在审核页或成功页，判断是否有用户注册或报名信息，没有跳转到 Home 页，
    // if(to.name ==='Success' || to.name ==='Review'){
    // }else{
    // }
    router.push({
      'path': '/home',
      'query':{
        eventId:store.state.activityMessage.eventId,
        campaignChannelId:store.state.activityMessage.campaignChannelId,
      }
    })
    next()

  }
}
