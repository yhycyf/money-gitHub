<template>
    <div class="bottom_list"> 
        <div class="main clearfix">
            <b-www v-for="(item,index) in message" :key=index :index="index" :lsrc='item.img_src'
             :text='item.text' :isShow='item.isShow' :router='item.router' :number='item.number' :redDot='item.red_dot' :exclusive='item.isexclusive'></b-www>
        </div>
    </div>
</template>

<script>
import www from '../index_web/bottom_typelist.vue';
export default {
	data () {
		return {
            message: [
                {
                    img_src:"../../../static/images/home/task_icon1.png",
                    text: '每日签到',
                    id: 0,
                    isShow: false,
                    router: null,
                    number: null
                },
                {
                    img_src:'../../../static/images/home/task_icon2.png',
                    text: '限时任务',
                    id: 1,
                    isShow: true,
                    router: '/xianshirenwu',
                    number: 'NEW'
                },
                {
                    img_src:'../../../static/images/home/task_icon3.png',
                    text: '付费转发',
                    id: 2,
                    isShow:false,
                    router: null,
                    number: null

                },
                {
                    img_src:'../../../static/images/home/task_icon4.png',
                    text: '赚金币',
                    id: 3,
                    isShow:false,
                    router: null,
                    number: null
                },
                {
                    img_src:'../../../static/images/home/task_icon5.png',
                    text: '新手帮助',
                    id: 4,
                    isShow:false,
                    router: null,
                    number: null
                },
                {
                    img_src:'../../../static/images/home/task_icon6.png',
                    text: '新手引导',
                    id: 5,
                    isShow:false,
                    router: null,
                    number: null
                },
                {
                    img_src:'../../../static/images/home/task_icon7.png',
                    text: '新手任务',
                    id: 6,
                    isShow:false,
                    router: null,
                    number: null
                },
                {
                    img_src:'../../../static/images/home/task_icon8.png',
                    text: '收徒财神榜',
                    id: 7,
                    isShow:false,
                    router: null,
                    number: null
                },
                {
                    img_src:'../../../static/images/home/task_icon10.png',
                    text: '高额任务',
                    id: 8,
                    isShow:true,
                    router: null,
                    number: null,
                    red_dot: true
                },
                {
                    img_src:'../../../static/images/home/task_icon10.png',
                    text: '双倍任务',
                    id: 9,
                    isShow:false,
                    router: null,
                    number: null
                },
                {
                    img_src:'../../../static/images/home/task_icon12.png',
                    text: '热门游戏',
                    id: 10,
                    isShow:true,
                    router: null,
                    number: 'NEW'
                },
                {
                    img_src:'../../../static/images/home/task_icon13.png',
                    text: '独家淘宝券',
                    id: 11,
                    isShow:true,
                    router: null,
                    number: 'NEW'
                },
                {
                    img_src:'../../../static/images/home/task_icon14.png',
                    text: '收徒狂欢赛',
                    id: 12,
                    isShow:true,
                    router: null,
                    number: 'NEW'
                },
                {
                    img_src:'../../../static/images/home/task_icon15.png',
                    text: '收徒红包',
                    id: 13,
                    isShow:true,
                    router: null,
                    number: 'NEW'
                },
                {
                    img_src:'../../../static/images/home/task_icon16.png',
                    text: '专属任务',
                    id: 14,
                    isShow:true,
                    router: null,
                    number: 12,
                    isexclusive: true
                },
                {
                    img_src:'../../../static/images/home/task_icon17.png',
                    text: '每日开奖',
                    id: 15,
                    isShow:false,
                    router: null,
                    number: null
                },
            ],
        }
    },
    components: {
        'b-www': www
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
	
</style>
