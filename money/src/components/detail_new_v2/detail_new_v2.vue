<template>
    <div class="wrapper">
        <v-header></v-header>
        <v-wrapper></v-wrapper>
    </div>
</template>
<script>
import header from '../detail_new_v2/header_v2.vue';
import wrapper from '../detail_new_v2/wrapper_v2.vue';
export default {
    data () {
        return {
        }
    },
    components: {
        'v-header': header,
        'v-wrapper': wrapper
    },
}
</script>
<style>

</style>
