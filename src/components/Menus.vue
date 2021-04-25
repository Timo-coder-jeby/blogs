<template>
  <el-aside width="260px" class="custom-m">
    <ul class="menus-wrap">
      <li
        class="menus-item"
        v-for="(menu,i) in menus.data"
        :key="i"
        :class="{active:menu.checked}"
        @click="changeMenu(menu)"
        :title="menu.title"
      >{{menu.title}}</li>
    </ul>
  </el-aside>
</template>

<script>
import {mapState} from 'vuex'
import Bus from '@/static/js/bus'
export default {
  name: "Menus",
  data(){
    return {}
  },
  methods:{
    changeMenu(menu){
      this.$store.commit('CHANGEMENU',menu)
      Bus.$emit('initPrism')
    }
  },
  computed:{
    ...mapState({
      menus:state => state.data.find(v=>v.checked)
    })
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/static/css/global.styl"
.custom-m
  box-shadow 0 2px 10px rgba(65,184,131,.2)
  overflow-x hidden
.menus-wrap
  display flex
  flex-direction column
  .menus-item
    margin 15px 0
    padding 0 15px 0 34px
    display flex
    align-items center
    cursor: pointer;
    color #666
    transition transform .3s
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
    position relative
    &:hover
      color $theme
      transform translateX(10px) scale(1.1)
    &.active
      padding-left 15px
      color $theme
      transform translateX(10px) scale(1.1)
      &::before
        content '\e603'
        font-family "iconfont"
        margin-right 4px
      &::after
        content ''
        width 4px
        height 100%
        background $theme
        position absolute
        right 20px
        top 0
</style>
