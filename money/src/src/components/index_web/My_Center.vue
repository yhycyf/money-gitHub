
<!-- 个人中心、收徒 -->
<template>
	<div class="my_center">
		<div class="my_content">
            <div class="marquee_text fl">
                <i class="marquee_text_ico"><img src="../../../static/images/img/tongzhi_v2.png" /></i>
                <marquee class="marquee" id="msg-panel" scrollamount="3">恭喜您成为我们的新用户，系统奖</marquee>
            </div>
            <a class="my_content_box">
                <router-link to="/PersonalCenter">
                    <em><img src="../../../static/images/img/my_content.png" />我的</em>
                </router-link>
            </a>
        </div>
        <div class="bg_f">
			<div class="my_task">
                <router-link to="/detail_new_v2">
                    <a class="db">
                        <em><img src="../../../static/images/img/xianshi_ico.png" />个人中心</em>
                        <div class="my_task_txt">
                            <p class="task_title">限时任务<b class="biaoqian">HOT</b></p>
                            <p class="task_tishi">下载体验APP，即可获得任务奖金</p>
                        </div>
                        <i><img width="100%" src="../../../static/images/duobao/img/right_btn_gray.png" /></i>
                    </a>
                </router-link>
            </div>
            <div class="my_task">
                <a class="db">
                    <em><img src="../../../static/images/img/shoutu_ico.png" />个人中心</em>
                    <div class="my_task_txt">
                        <p class="task_title">收徒 <b class="red">《跨年收徒红包大派送》现已开启</b></p>
                        <p class="task_tishi">新徒弟完成前10个限时任务每个奖励师父1元！</p>
                    </div>
                    <i><img width="100%" src="../../../static/images/duobao/img/right_btn_gray.png" /></i>
                </a>
            </div>
        </div>
	</div>
</template>
<script>
export default {
	data () {
        return {
            dn: false
        }
	}
}
</script>
<style lang='less'>
	.my_content {
        margin: 0 0 10px 0;
        background: #fff;
        border-radius: 3px;
        padding: 0 90px 0 40px;
        overflow: hidden;
    }
    .marquee_text i.marquee_text_ico {
        width: 20px;
        display: block;
        float: left;
        margin-left: -30px;
        margin-top: 9px;
    }
    .my_content i {
        width: 9px;
        display: block;
        float: right;
        margin-right: -25px;
    }
    .my_content .marquee {
        width: 100%;
        margin-top: 5px;
        // -webkit-animation: inherit;
    }
    .marquee {
        float: left;
        height: 30px;
        line-height: 30px;
        color: #ff6600;
        font-size: 13px;
        overflow: hidden;
        white-space: nowrap;
    }
    .my_content a.my_content_box {
        width: 80px;
        padding: 9px 0;
        display: block;
        float: right;
        border-radius: 3px;
        text-align: center;
        border-left: 1px solid #e1e1e1;
        margin-right: -90px;
    }
    .my_content a.my_content_box em {
        font-size: 16px;
        color: #333;
        font-style: normal;
    }
    .my_content a em img {
        width: 22px;
        height: 22px;
        display: inline-block;
        margin-right: 5px;
        vertical-align: bottom;
    }
    .bg_f {
        background: #ffffff;
    }
    .my_task {
        margin-left: 10px;
        background: #fff;
        border-radius: 3px;
        padding: 10px 35px 10px 60px;
        overflow: hidden;
        border-bottom: 1px solid #ececec;
    }
    .my_task a em {
        width: 40px;
        height: 40px;
        float: left;
        margin-left: -50px;
    }
    .task_title {
        line-height: 16px;
        font-size: 16px;
        color: #333;
        font-weight: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .task_title b {
        font-size: 14px;
    }
    .biaoqian {
        height: 15px;
        line-height: 15px;
        background: #ff5847;
        padding: 0 6px;
        border-radius: 15px;
        display: inline-block;
        color: #fff;
        margin-left: 5px;
        font-style: normal;
        vertical-align: middle;
        font-weight: normal;
        text-align: center;
    }
    .task_tishi {
        line-height: 14px;
        font-size: 13px;
        color: #666;
        padding-top: 5px;
    }
    .my_task a i {
        width: 8px;
        float: right;
        margin: -27px -25px 0 0;
    }
    b.red {
        color: #FC554C;
        font-style: normal;
    }
</style>