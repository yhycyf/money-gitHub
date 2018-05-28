<template>
    <a :style="bor"><span><img :src="iconsrc" /></span>{{title}}<em>{{rightTitle}}<img :src="imgsrc" /></em></a>
</template>

<script>
export default {
    props: {
        iconsrc: {},
        imgsrc: {},
        title: {},
        bor: {},
        rightTitle: {}
    },
    // created () {
    //     console.log(this.bor)
    // }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
 
</style>
