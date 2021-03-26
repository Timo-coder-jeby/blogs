import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '@/static/css/element-variables.scss'
import element from "@/static/js/element";
Vue.use(element)

import router from "@/router";
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
