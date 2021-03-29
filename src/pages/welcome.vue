<template>
  <div class="container">
    <el-button type="text" @click="toHome">Hello World</el-button>
    <div class="origin"></div>
    <div class="theme"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods:{
    toHome(){
      setTimeout(()=>{
        this.$router.push({name:'home'})
      },300)
    }
  }
}
</script>

<style lang="stylus" scoped>
$theme = #41B883
.container
  display flex
  justify-content center
  .el-button
    margin-top 20vh
    font-size 30px
    transition all .3s
    &:hover
      transform scale(1.5)
    &:active
      transform rotate(360deg)
  .origin
    width 500px
    height 500px
    background orange
    border-radius 30px
    position fixed
    left -300px
    bottom -300px
    animation rotateInfinity 8s linear infinite
  .theme
    width 200px
    height 200px
    background $theme
    border-radius 30px
    position fixed
    right -120px
    top -120px
    animation rotateInfinity 8s linear infinite

@keyframes rotateInfinity
  0%
    transform rotate(0)
  50%
    transform rotate(180deg) translateX(-50px)
  100%
    transform rotate(360deg)
</style>
