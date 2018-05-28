<template>
    <div>  
        <!-- 第一个列表   -->
        <div class="center_list">
            <v-list v-for="(item,index) in message" :key="index" :index="index" :rightTitle="item.rightTitle" :iconsrc="item.iconsrc" :title="item.title" :imgsrc="item.imgsrc" :bor="item.bor"></v-list>
        </div>
        <!-- 第二个列表 -->
        <div class="center_list">
            <list-two v-for="(item,index) in list_two" :key="index" :index="index" :iconsrc="item.iconsrc" :title="item.title" :imgsrc="item.imgsrc" :bor="item.bor"></list-two>
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
                    iconsrc: '../../../static/images/icon_details1.png',
                    title: '我的金币',
                    imgsrc: '../../../static/images/img/right_ico.png',
                    rightTitle: '124金币'
                },
                {
                    iconsrc: '../../../static/images/icon_details9.png',
                    title: '我的积分',
                    imgsrc: '../../../static/images/img/right_ico.png',
                    rightTitle: '456积分'
                },
                {
                    iconsrc: '../../../static/images/icon_details2.png',
                    title: '绑定手机号',
                    imgsrc: '../../../static/images/img/right_ico.png',
                    rightTitle: '暂无绑定'
                },
                {
                    iconsrc: '../../../static/images/icon_details3.png',
                    title: '关注微信',
                    imgsrc: '../../../static/images/img/right_ico.png',
                    bor: 'border-bottom:0px',
                    rightTitle: '已关注'
                },
                
            ],
            list_two: [
                {
                    iconsrc: '../../../static/images/icon_details4.png',
                    title: '关于我们',
                    imgsrc: '../../../static/images/img/right_ico.png'
                },
                {
                    iconsrc: '../../../static/images/icon_details5.png',
                    title: '商务合作',
                    imgsrc: '../../../static/images/img/right_ico.png',
                    bor: 'border-bottom:0px'
                },
            ],
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
    margin-top: 10px;
    padding-left: 10px;
}
.center_list a {
    padding: 10px 0;
    display: block;
    border-bottom: 1px solid #dcdcdc;
    font-size: 15px;
    color: #333;
}
.center_list span {
    width: 25px;
    height: inherit;
    display: inline-block;
    margin-left: 0;
    // margin: 0 10px 0 -30px;
}
.center_list em {
    width: 165px;
    line-height: 30px;
    font-size: 13px;
    color: #999;
    font-style: normal;
    float: right;
    text-align: right;
}
.center_list em img {
    width: 8px;
    display: inline-block;
    float: right;
    margin: 8px 10px 0 3px;
}

</style>
