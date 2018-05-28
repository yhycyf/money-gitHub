<template>
    <div class="mb10 mt44">
        <v-header></v-header>
        <v-picture></v-picture>
        <v-details></v-details>
        <v-list></v-list>
    </div>
</template>

<script>
import header from '../PersonalCenter/personalCenter_header.vue';
import picture from '../PersonalCenter/personalCenter_Picture.vue';
import list from '../PersonalCenter/personalCenter_list.vue';
import details from '../PersonalCenter/details.vue';
export default {
    data () {
        return {
        }
    },
    components: {
        'v-header':header,
        'v-picture': picture,
        'v-list': list,
        'v-details': details
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.mt44 {
    margin-top: 44px;
}
.mb10 {
    margin-bottom: 10px;
}
</style>
