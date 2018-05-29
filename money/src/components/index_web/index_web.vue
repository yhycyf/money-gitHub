<template>
    <div class="index_web">
        <v-header></v-header>
        <v-wrapper></v-wrapper>
        <v-footer></v-footer>
    </div>
</template>

<script>
import header from '../index_web/header.vue';
import wrapper from '../index_web/wrapper.vue';
import footer from '../index_web/footer.vue';
import Vue from 'vue'
import axios from 'axios'
import store from '../../store'
export default {
    data () {
        return {
            info: {}
        }
    },
    components: {
        'v-wrapper': wrapper,
        'v-header': header,
        'v-footer': footer
    },
    created () {
        let LocalAPI = 'http://scorewall.lieqicun.cn/ios/index'
        let _this = this;
        axios.post(LocalAPI).then((res) => {
            console.log(res.data)
            this.info = res.data
            store.dispatch('set_info', res.data)
        }),(err) => {
            alert(err)
        }
        
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>

</style>
