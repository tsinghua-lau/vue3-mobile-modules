<template>
  <div id="app">
    <router-view />
    <!-- <layout id="footer" /> -->
  <IsPopUpVue />
  </div>
</template>
<script setup>
  import layout from './components/layout/index.vue'
  import IsPopUpVue from '../../components/IsPopUp.vue';
</script>
<style lang="less" scoped>

#app {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  position:relative;
}
#footer{
position: fixed;
height:70px;
}
html,body{
  width: 100%;
  height: 100%;
}

</style>
