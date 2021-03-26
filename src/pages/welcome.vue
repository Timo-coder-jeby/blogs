<template>
  <div class="container">
    <el-button type="text" @click="toHome">Hello World</el-button>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return {
    }
  },
  methods:{
    toHome(){

    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  justify-content center
  .el-button
    margin-top 15vh
    font-size 30px
</style>
