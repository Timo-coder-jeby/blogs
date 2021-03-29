<template>
  <el-main class="customMain">
    <template v-for="(cnt,i) in content">
      <p v-if="cnt.type === 'html'" style="padding: 10px">{{cnt.text}}</p>
      <a v-if="cnt.type === 'href'" :href="cnt.text" target="_blank">{{cnt.text}}</a>
      <pre v-if="cnt.type === 'code'">
        <code :class="`language-${cnt.show_type}`" v-html="cnt.text"></code>
      </pre>
    </template>
  </el-main>
</template>

<script>
import Prism from 'prismjs'
import {mapState} from 'vuex'
import Bus from '@/static/js/bus'
export default {
  name: "Content",
  data(){
    return {}
  },
  mounted() {
    this.initPrism()
    Bus.$on('initPrism',this.initPrism)
  },
  methods:{
    initPrism(){
      this.$nextTick().then(()=>{
        Prism.highlightAll()
      })
    }
  },
  computed:{
    ...mapState({
      content:state => state.data.find(v => v.checked).data.find(m => m.checked)['content']
    })
  }

}
</script>

<style lang="stylus" scoped>
@import "~@/static/css/global.styl"
.customMain
  height calc(100vh - 60px)
  overflow-y auto
  padding 20px 40px
  &::-webkit-scrollbar
    width:10px
    height:10px
  &::-webkit-scrollbar-track{
    background: rgb(239, 239, 239);
    border-radius:2px;
  }
  &::-webkit-scrollbar-thumb{
    background: #bfbfbf;
    border-radius:10px;
  }
  &::-webkit-scrollbar-thumb:hover{
    background: $theme;
  }
  &::-webkit-scrollbar-corner{
    background: #179a16;
  }

</style>
