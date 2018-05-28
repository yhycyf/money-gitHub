<template>
    <b-header :lsrc="l_src" :titlec="title"></b-header>
</template>

<script>
import header from '../detail_new_v2/header_common.vue';
export default {
    data () {
        return {
            l_src: 'http://mapi.lieqicun.cn/static/images/img/left_icon.png',
            title: '个人中心',
            // position: 'static'
        }
    },
    components: {
       'b-header': header
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
 
</style>
