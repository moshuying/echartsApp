<template>
  <div id="app">
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import vfooter from './components/public/v-footer.vue'
  export default {
    components:{
      'v-footer':vfooter,
    }
  }
</script>
<style lang="scss">
body{
  margin: 0;
  padding: 0;
  width: 100%;
  background: #eeeeee;
}
#app {
  font-family: 'pingfang','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
