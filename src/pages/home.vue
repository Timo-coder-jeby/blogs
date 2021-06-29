<template>
  <el-container>
    <el-header class="customH">
      <div class="h-left">
        <i class="iconfont icon-J"></i><span>笔记</span>
      </div>
      <!--<Aplayer :showlrc="true" :music="bgm[0]"/>-->
      <div class="h-right">
        <ul class="h-right__control">
          <li @click="$router.replace({name:'welcome'})"><i class="iconfont icon-home"></i>主页</li>
          <li>
            <el-dropdown
              trigger="click"
              @command="changeDropMenu"
            >
              <span class="h-right__dropMenu">{{dropMenu}}<i class="el-icon-arrow-down el-icon--right"></i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  :command="drop.name"
                  v-for="(drop,i) in dropMenus"
                  :key="i"
                  :disabled="drop.checked"
                >{{ drop.name }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
        <div id="he-plugin-simple"></div>
      </div>
    </el-header>
    <el-container>
      <Menus/>
      <Content/>
    </el-container>
  </el-container>
</template>

<script>
import {mapState} from 'vuex'
import Aplayer from 'vue-aplayer'
export default {
  name: "home",
  data(){
    return {
      dropMenu:'CSS',
      bgm:[
        {
          title:'成都',
          artist:'赵雷',
          url:'',
          pic:'https://img0.baidu.com/it/u=3215495165,1644239105&fm=26&fmt=auto&gp=0.jpg',
          lrc:'',
          mini:true
        }
      ]
    }
  },
  methods:{
    changeDropMenu(command){
      if (command !== this.dropMenu) {
        this.$store.commit('CHANGEPARENTMENU', command)
        this.bus.$emit('initPrism')
      }
      this.dropMenu = command
    }
  },
  computed:{
    ...mapState({
      dropMenus:state => state.data
    })
  },
  components:{Aplayer}
}
</script>

<style lang="stylus" scoped>
@import "~@/static/css/global.styl"
.customH
  display flex
  justify-content space-between
  align-items center
  box-shadow -2px 0 10px rgba(0,0,0,.2)
  .h-left
    font-weight 700
    color $theme
    font-size 20px
    i
     font-size 20px
    span
      margin-left -8px
  .h-right
    display flex
    align-items center
    .h-right__control
      display flex
      align-items center
      justify-content space-between
      color #666
      font-size 14px
      li
        margin-left 15px
        min-width 50px
        display flex
        align-items center
        justify-content center
        &:hover
          color $theme
          cursor: pointer;
        .h-right__dropMenu
          &:hover
            color $theme
  & >>> .aplayer
    box-shadow none
    border-radius 0
    .aplayer-pic
      width 60px !important
      height 60px !important
    .aplayer-info
      height 60px !important
      padding-top 2px !important
      width 300px
      .aplayer-music
        padding-bottom 4px
</style>
