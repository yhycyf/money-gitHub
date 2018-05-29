<template>
    <div class="xianshirenwu">
        <v-list></v-list>
    </div>
</template>

<script>
import list from '../xianshirenwuList/list.vue';
import Vue from 'vue'
import axios from 'axios'
import store from '../../store'
export default {
    data () {
        return {
        }
    },
    created () {
        let LocalAPI = 'http://scorewall.lieqicun.cn/ios/task/index'
        let _this = this;
        axios.post(LocalAPI).then((res) => {
            console.log(res.data.data)
            store.dispatch('set_xianshiInfo', res.data.data)
        }),(err) => {
            alert(err)
        }
        
    },
    components: {
        'v-list': list,
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
</style>
