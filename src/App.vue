<template>
  <div id="app">
    <keep-alive>
      <!--<transition name="slide">-->
        <router-view/>
      <!--</transition>-->
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      isShowBtn:true
    }
  },
  methods:{
    toHome(){
      this.isShowBtn = false
      this.$router.push({name:'home'})
    }
  },
}
</script>
<style scoped lang="stylus">
.slide-enter-active
  animation slideIn 1s
.slide-leave-active
  animation slideOut 1s
@keyframes slideIn
  from
    height 0
    opacity 0
  to
    opacity 1
    height 100%
@keyframes slideOut
  from
    height 100%
    opacity 1
  to
    opacity 0
    height 0

</style>
<style lang="stylus">
.iconfont
  padding-right 2px
.customMain
  pre
    padding-top 20px !important
</style>
