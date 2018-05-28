<template>
    <div class="header" :style="{position:lposition}">
        <router-link to="/">
            <a class="back"><img width="100%" :src=lsrc></a>
        </router-link>
        <span>{{titlec}}</span>
        <a class="right_btn"><img width="100%" :src=rsrc></a>
    </div>

</template>

<script>
export default {
    props: {
        lsrc: {

        },
        rsrc: {

        },
        titlec: {

        },
        lposition: {

        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
ul {
    list-style-type: none;
    padding: 0;
}
a {
    cursor: pointer;
}
.header {
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background: #19191f;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    .back {
        width: 14px;
        height: 24px;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 15px;
    }
    span,a {
        font-size: 18px; 
        color: #fff;
    }
    span {
        font-weight: bold;
    }
    img {
        vertical-align: top;
    }
    .right_btn {
        width: 24px;
        height: 24px;
        display: block;
        position: absolute;
        top: 0;
        right: 5px;
        padding: 10px;
    }
}

</style>
