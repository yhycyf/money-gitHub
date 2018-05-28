<template>
    <div>  
        <!-- 第一个列表   -->
        <div class="center_list">
            <v-list v-for="(item,index) in message" :key="index" :index="index" :iconsrc="item.iconsrc" :title="item.title" :imgsrc="item.imgsrc" :bor="item.bor"></v-list>
        </div>
        <!-- 第二个列表 -->
        <div class="center_list">
            <list-two v-for="(item,index) in list_two" :key="index" :index="index" :iconsrc="item.iconsrc" :title="item.title" :imgsrc="item.imgsrc" :bor="item.bor"></list-two>
        </div>
        <!-- 第三个列表 -->
        <div class="center_list">
		    <a :style="list_three.bor"><span><img :src="list_three.iconsrc" /></span>{{list_three.title}}<em><img :src="list_three.imgsrc"/></em></a>
	    </div>
    </div>
</template>

<script>
import list from '../PersonalCenter/PersonalCenter_listtype.vue';
import list_two from '../PersonalCenter/PersonalCenter_listtype_two.vue';
export default {
    data () {
        return {
            message: [
                {
                    iconsrc: '../../../static/images/myincome_06.png',
                    title: '限时任务记录',
                    imgsrc: '../../../static/images/img/right_ico.png'
                },
                {
                    iconsrc: '../../../static/images/myincome_zf.png',
                    title: '转发任务记录',
                    imgsrc: '../../../static/images/img/right_ico.png'
                },
                {
                    iconsrc: '../../../static/images/myincome_04.png',
                    title: '收徒记录',
                    imgsrc: '../../../static/images/img/right_ico.png'
                },
                {
                    iconsrc: '../../../static/images/myincome_12.png',
                    title: '提现记录',
                    imgsrc: '../../../static/images/img/right_ico.png',
                    bor: 'border-bottom:0px'
                },
                
            ],
            list_two: [
                {
                    iconsrc: '../../../static/images/myincome_13.png',
                    title: '我的收入',
                    imgsrc: '../../../static/images/img/right_ico.png'
                },
                {
                    iconsrc: '../../../static/images/myincome_11.png',
                    title: '我的金币',
                    imgsrc: '../../../static/images/img/right_ico.png',
                    bor: 'border-bottom:0px'
                },
            ],
            list_three: {
                iconsrc: '../../../static/images/myincome_10.png',
                title: '设置',
                imgsrc: '../../../static/images/img/right_ico.png',
                bor: 'border-bottom:0px'
            }
        }
    },
    components: {
        'v-list': list,
        'list-two':list_two
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.center_list {
    background: #fff;
    border-bottom: 1px solid #dcdcdc;
    padding-left: 40px;
    margin-top: 10px;
}
.center_list a {
    padding: 10px 0;
    display: block;
    border-bottom: 1px solid #dcdcdc;
    font-size: 15px;
    color: #333;
}
.center_list span {
    width: 22px;
    height: 22px;
    display: inline-block;
    margin: 0 10px 0 -30px;
}
.center_list em {
    width: 8px;
    display: inline-block;
    float: right;
    margin-right: 10px;
}
</style>
