import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store  from './store'

import './assets/stylus/index.styl'

// vue-lazyload
import VueLazyloader from 'vue-lazyload'
import lazyloadingImg from './assets/images/lazyDefault.png'
Vue.use(VueLazyloader,{
    loading:lazyloadingImg
})

Vue.config.productionTip = false

fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
