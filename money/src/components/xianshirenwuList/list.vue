<template>
    <div class="yizhuan_box">
        <div class="xianshi_box">
            <!-- 普通限时任务 -->
            <div class="xianshi_list" v-for="(item, index) in getdata" :index="index" :key="item.id">
                <em class="border_left"><img height="100%" src="../../../static/images/img/zuo.png" /></em>
                <b><img :src="item.icon"/></b>
                <div class="xianshi_text fl">
                    <h1>{{item.keywords}}</h1>
                    <h2>剩余{{item.hasLeftTasks}}份</h2>
                </div>
                <div class="xianshi_money wancheng">
                    <p>+<span>{{item.price}}</span>元</p>
                    <h3><i class="deep_red">进行中</i></h3>
                </div>
                <em class="border_right"><img height="100%" src="../../../static/images/img/you.png" /></em>
            </div>  
        </div>
        <div class="yugao_tishi">任务预告：精彩任务即将开始</div>
        <div class="xianshi_box">
            <div class="xianshi_list">
                <em class="border_left"><img height="100%" src="../../../static/images/img/zuo.png" /></em>
                <b><img src="../../../static/images/yizhuan/yugao.png" /></b>
                <div class="xianshi_text fl">
                    <h1>知***</h1>
                    <h2>今天16:00 总共2000份</h2>
                </div>
                <div class="xianshi_money">
                    <p class="gray">+<span>1</span>元</p>
                </div>
                <em class="border_right"><img height="100%" src="../../../static/images/img/you.png" /></em>
            </div>
            <div class="xianshi_list">
                <em class="border_left"><img height="100%" src="../../../static/images/img/zuo.png" /></em>
                <b><img src="../../../static/images/yizhuan/yugao.png" /></b>
                <div class="xianshi_text fl">
                    <h1>知***</h1>
                    <h2>今天16:00 总共2000份</h2>
                </div>
                <div class="xianshi_money">
                    <p class="gray">+<span>1</span>元</p>
                </div>
                <em class="border_right"><img height="100%" src="../../../static/images/img/you.png" /></em>
            </div>
        </div>
        <div class="foot_text">想赚更多？邀请好友，立得5元！</div>
        <div class="invite_btn"><a>邀请好友</a></div>
        <!-- {{getdata[0].icon}} -->
    </div>
    
</template>

<script>
export default {
    data () {
        return {

        }
    },
    computed: {
        getdata () {
            return this.$store.getters.getxianshi_Info
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
// .yizhuan_box {
    .xianshi_list {
        height: 50px;
        overflow: hidden;
        background: #fff;
        margin: 6px 10px;
        position: relative;
        padding: 15px 80px 15px 75px;
        border-top: 0.05em solid #e1e1e1;
        border-bottom: 0.05em solid #e1e1e1;
        overflow: hidden;
        position: relative;
        em {
            width: 3px;
            height: 80px;
            display: block;
            position: absolute;
            top: 0;
            z-index: 9;
        } 
    }    
    .border_left {
        left: 0;
    }
    em {
        color: #f28c48;
    }
    .xianshi_list b {
        background: url(../../../static/images/yizhuan/logo_gray.png) no-repeat;
        background-size: 100%;
    }
    .xianshi_list b {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        overflow: hidden;
        display: block;
        margin-left: -60px;
        float: left;
    }
    .xianshi_text {
        width: 100%;
    }
    .fl {
        float: left;
    }
    .xianshi_text h1 {
        width: 198px;
        height: 20px;
        font-size: 15px;
        color: #000;
        font-weight: normal;
        padding: 3px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }
    .xianshi_text h2 {
        font-size: 13px;
        color: #666;
        font-weight: normal;
    }
    .xianshi_money {
        width: 79px;
        height: 50px;
        overflow: hidden;
        border-left: 1px solid #e1e1e1;
        float: right;
        margin-right: -80px;
    }
    .xianshi_money p {
        font-size: 13px;
        color: #f3501d;
        text-align: center;
    }
    .xianshi_list .wancheng p span {
        line-height: 35px;
    }
    .xianshi_money p span {
        font-size: 27px;
        line-height: 50px;
    }
    .xianshi_money h3 {
        font-weight: normal;
        font-size: 12px;
        line-height: 13px;
        color: #666;
        text-align: center;
    }
    i.deep_red {
        color: #f3501d;
        font-style: normal;
    }
    .xianshi_list em.border_right {
        right: 0;
    }
    .xianshi_list em {
        width: 3px;
        height: 80px;
        display: block;
        position: absolute;
        top: 0;
        z-index: 9;
    }
    em {
        color: #f28c48;
    }
    .chaoshi {
        width: 78px;
        height: 52px;
        position: absolute;
        top: 50%;
        right: 45px;
        margin-top: -26px;
        background: url(http://cdn.miaozhuandaqian.com/mz/static/images/img/chaoshi.png) no-repeat;
        background-size: 100%;
    }
    .qiangguang {
        width: 78px;
        height: 52px;
        position: absolute;
        top: 50%;
        right: 45px;
        margin-top: -26px;
        background: url(http://cdn.miaozhuandaqian.com/mz/static/images/img/qiangguang.png) no-repeat;
        background-size: 100%;
    }
    .xianshi_money p.gray {
        color: #999;
    }
    .yugao_tishi {
        height: 40px;
        line-height: 40px;
        margin: 10px 20px;
        background: #fff;
        border: 0.05em solid #e1e1e1;
        border-radius: 3px;
        font-size: 15px;
        color: #666;
        text-align: center;
    }
    .foot_text {
        font-size: 13px;
        color: #666;
        padding: 15px 0;
        text-align: center;
    }
    .invite_btn {
        margin: 0 35px 15px;
        height: 45px;
        line-height: 45px;
        background: #f3501d;
        border-radius: 5px;
    }
    .invite_btn a {
        font-size: 14px;
        color: #fff;
        display: block;
        text-align: center;
    }
// }
</style>
