<template>
    <div class="wrapper detail_new_v2">
        <div class="head_top clearfix">
            <h2>任务奖励:<span>1.00元</span></h2>
            <p><em><img width="100%" src="../../../static/images/alarm.png" /></em>剩余时间 19:42</p>
        </div>
        <div class="keyword_box">
            <img src="http://a2.mzstatic.com/us/r30/Purple69/v4/c9/0f/a7/c90fa73e-2b1e-f5b0-620c-dc097570c75e/icon200x200.png">
            <p class="txt_c">关键词：<span>火车票</span></p>
        </div>
        <div class="step">
            <p>1、点击<i> 复制关键词 </i>，跳转AppStore粘贴搜索，约第<i class="bigger"> 2 </i>位，找到该图标应用下载安装。</p>
            <p>2、返回本页面，点击<i> 打开应用 </i>，试玩该应用；打开应用时，请务必 <i>“允许使用数据”</i>。</p>
            <p>3、<i>首次下载，联网打开注册试玩3分钟，24小时请勿删除，谢谢！</i></p>
        </div>
        <div class="keyword_btn"><a class="copy_keyword">复制关键词</a></div>
        <div class="keyword_btn"><a class="open_app">打开应用（必须在此打开）</a></div>
        <div class="keyword_btn"><a class="open_app">领取奖励</a></div>
        <div class="keyword_btn no_style"><a>放弃任务</a ></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang='less'>
     .wrapper {
         height: 100%;
        background: #fff;
    }
    .detail_new_v2 .head_top {
        background: #FC4A1B;
        color: #fff;
    }
    h2 {
        font-weight: 400;
    }
    .wrapper {
        margin-top: 44px;
    }
    .head_top {
        padding: 10px 0.9em;
        overflow: hidden;
    }
    .detail_new_v2 .head_top h2 {
        font-size: 18px;
        line-height: 30px;
        text-align: center;
    }
    .detail_new_v2 .head_top h2 span {
        font-size: 30px;
    }
    .detail_new_v2 .head_top p {
        text-align: center;
        font-size: 13px;
        line-height: 15px;
        margin: 7px 0 5px;
    }
    .detail_new_v2 .keyword_box {
        margin: 10px 0;
        color: #000;
    }
    .detail_new_v2 .keyword_box img {
        display: block;
        margin: 0 auto;
        width: 58px;
        height: 58px;
        border-radius: 5px;
    }
    .detail_new_v2 .keyword_box p {
        font-size: 15px;
        line-height: 30px;
        margin-top: 7px;
        margin-bottom: 13px;
    }
    .txt_c {
        text-align: center;
    }
    .detail_new_v2 .keyword_box p span {
        font-size: 20px;
    }
    .detail_new_v2 .step {
        border: none;
        padding: 0 15px 0 52px;
        text-indent: -21px;
        margin-bottom: 1.5em;
    }
    .detail_new_v2 .step p {
        line-height: 22px;
        font-size: 15px;
        width: 310px;
        margin: 0 auto 16px;
        color: #000;
    }
    .step p i {
        font-style: normal;
        color: #ff8003;
        font-weight: 600;
    }
    .step i.bigger {
        font-size: 20px;
    }
    .detail_new_v2 .keyword_btn {
    margin: 0 auto 15px;
    }
    .keyword_btn {
        height: 45px;
        line-height: 45px;
        overflow: hidden;
    }
    .detail_new_v2 .keyword_btn a.copy_keyword {
        background: #FD9623;
    }
    .detail_new_v2 .keyword_btn a {
        margin: 0 auto;
        border-radius: 5px;
        width: 210px;
        background: #CDCDCD;
    }
    .keyword_btn a {
        width: 100%;
        background: #ff4e00;
        border-radius: 3px;
        font-size: 16px;
        color: #fff;
        display: block;
        text-align: center;
    }
    .detail_new_v2 .head_top p em {
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: bottom;
        margin-right: 5px;
    }
    .detail_new_v2 .keyword_btn a.open_app {
        background: #FC4A1B;
    }
    .detail_new_v2 .no_style a {
        color: #43A1FC;
        background: transparent;
        border: none;
    }
    .detail_new_v2 .no_style {
        margin-top: -10px;
    }
</style>
