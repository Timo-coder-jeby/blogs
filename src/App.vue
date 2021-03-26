<template>
  <div id="app">
    <keep-alive>
      <router-view/>
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

