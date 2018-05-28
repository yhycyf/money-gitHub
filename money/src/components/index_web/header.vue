<template>
    <div class="header">
        <a class="kefu" @click.stop="showTitle"><img width="100%" :src=left_src>{{left_title}}</a>
        <transition name="sideUp">
            <div class="kefu_pop" v-show="isShow">
                <ul>
                <li id="shensu" num="0"><a><i><img src="../../../static/images/img/appeal.png" /></i>提现未到账申诉</a></li>
                <li id="kefu"><a><i><img src="../../../static/images/img/qq_kf.png" /></i>QQ客服</a></li>
                </ul>
                <div class="arrow_up"></div>
            </div>
        </transition>
        <span>{{title}}</span>
        <a class="right_btn"><img width="100%" :src=right_src></a>
    </div>

</template>
<script>
export default {
    data () {
        return {
            left_title: '客服',
            isShow: false,
            left_src: '../../../static/images/img/kefu.png',
            right_src: '../../../static/images/img/refresh.png',
            title: '秒赚大钱',
        }
    },
    methods: {
        showTitle () {
            this.isShow = !this.isShow
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.sideUp-enter-to,.sideUp-leave-to {
    transition: transform 0.2s;
}
.sideUp-enter,.sideUp-leave-to {
    transform:translate3d(-100%,0,0);
}
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
    .kefu {
        position: absolute;
        left: 15px;
        font-size: 16px;
    }
    .kefu img {
        width: 20px;
        height: 19px;
        display: inline-block;
        vertical-align: text-bottom;
        margin-right: 3px;
    }
    span,a {
        font-size: 18px; 
        color: #fff;
    }
    span {
        font-weight: bold;
    }
    .kefu img {
        width: 20px;
        height: 19px;
        display: inline-block;
        vertical-align: text-bottom;
        margin-right: 3px;
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
    .kefu_pop {
        position: absolute;
        top: 55px;
        left: 10px;
        background: #fff;
        padding: 0 10px;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0,0,0,.8);
    }
    .kefu_pop ul li a {
        line-height: 45px;
        display: block;
        font-size: 15px;
        color: #333;
        text-align: left;
        border-bottom: 1px solid #e1e1e1;
    }   
    .kefu_pop ul li a i {
        width: 22px;
        height: 22px;
        display: inline-block;
        vertical-align: middle;
        padding-right: 10px;
    }
    .arrow_up {
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #fff;
        position: absolute;
        top: -8px;
        left: 10px;
    }
}

</style>
