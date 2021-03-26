import Vue from 'vue'
import Router from "vue-router";

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}
Vue.use(Router)
const router = [
  {
    path:'/welcome',
    name:'welcome',
    component:()=>import("@/pages/welcome.vue")
  },
  {
    path: '/',
    redirect:'/welcome'
  }
]

export default new Router({
  routes: router
})
