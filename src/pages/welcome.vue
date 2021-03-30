<template>
  <div class="container">
    <div class="btn" @click="toHome">
      <span>Hello World</span>
    </div>
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
  .btn
    width 300px
    height 120px
    display flex
    align-items center
    justify-content center
    position fixed
    top 30%
    left 50%
    transform translateX(-50%)
    cursor: pointer;
    span
      font-size 30px
      color $theme
      transition all .3s ease-in-out
    &::before,&::after
      content ''
      position absolute
      width 20px
      height 20px
      transition all .3s ease-in-out
    &::before
      top -5px
      left -5px
      border-top 1px solid $theme
      border-left 1px solid $theme
    &::after
      right -5px
      bottom -5px
      border-bottom 1px solid $theme
      border-right 1px solid $theme
    &:hover::before,&:hover::after
      width calc(100% + 9px)
      height calc(100% + 9px)
    &:hover > span
      transform scale(1.2)
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
