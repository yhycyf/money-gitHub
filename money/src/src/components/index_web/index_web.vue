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
export default {
        data () {
            return {
            }
         },
        components: {
            'v-wrapper': wrapper,
            'v-header': header,
            'v-footer': footer
        },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>

</style>
