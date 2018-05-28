<template>
    <div>
        <v-header></v-header>
        <v-picture></v-picture>
        <v-list></v-list>
    </div>
</template>

<script>
import header from '../PersonalCenter/personalCenter_header.vue';
import picture from '../PersonalCenter/personalCenter_Picture.vue';
import list from '../PersonalCenter/personalCenter_list.vue';
export default {
    data () {
        return {
        }
    },
    components: {
        'v-header':header,
        'v-picture': picture,
        'v-list': list
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>

</style>
