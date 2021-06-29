import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import '@/static/css/global.styl'
import '@/static/css/element-variables.scss'
import element from "@/static/js/element";
Vue.use(element)

import '@/static/js/component'
import store from '@/store'

Vue.prototype.bus = new Vue()

import router from "@/router";
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
