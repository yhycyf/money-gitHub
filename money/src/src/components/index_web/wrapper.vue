<template>
    <div class="wrapper">
        <v-income></v-income>
        <v-myCenter></v-myCenter>
        <v-list ></v-list>
    </div>

</template>

<script>
import Income from '../index_web/Income.vue';
import My_Center from '../index_web/My_Center.vue';
import list from '../index_web/bottomlist.vue';
export default {
    data () {
        return {
            
        }
    },
   components: {
        'v-income': Income,
        'v-myCenter': My_Center,
        'v-list': list,
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    .wrapper {
        margin-top: 44px;
    }
</style>
