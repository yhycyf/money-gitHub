<template>
    <div>
        <v-header :lsrc="l_src" :rsrc="r_src" :titlec="title"></v-header>
    </div>
</template>

<script>
import header from '../detail_new_v2/header_common.vue';
export default {
    data () {
        return {
            l_src: 'http://mapi.lieqicun.cn/static/images/img/left_icon.png',
            r_src: 'http://mapi.lieqicun.cn/static/images/img/refresh.png',
            title: '应用详情',
        }
    },
    components: {
        'v-header': header,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>

</style>
