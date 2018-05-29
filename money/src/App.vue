<template>
  <div id="app">
    <transition name="shrink">
        <router-view/>
    </transition>  
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
    }
  },
}
</script>

<style lang="less" rel="stylesheet/less">
@import 'assets/common.css';
// .shrink-enter-to,.sideUp-leave-to {
//     transition: transform 1s;
// }
// .shrink-enter,.sideUp-leave-to {
//     transform:translate3d(100%,0,0);
// }
body {
  padding: 0;
  margin: 0;
}
i {
  font-style:normal;
}
em {
  font-style:normal;
}
a {
  text-decoration: none;
  color: #fff;
}
.dn {
	display: none;
}
.fl {
	float:left;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;      
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
