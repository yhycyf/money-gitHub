<template>
    <div class="center_top clearfix">
		<div class="center_top_left clearfix fl">
			<div class="center_top_head fl"><img src="../../../static/images/img/head_pic.png" /></div>
			<div class="center_top_name fr">
				<h1>秒赚大钱</h1>
				<h2>ID:20150222</h2>
			</div>
		</div>
		<div class="center_top_number fr">
			<em><img src="../../../static/images/img/mobile_icon.png" /></em>
			<span>13800138000</span>
			<i><img src="../../../static/images/duobao/right_black.png" /></i>
		</div>
	</div>
</template>

<script>
export default {
    data () {
        return {
           
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.center_top {
    background: #f3501d;
    border-top: 1px solid #d03302;
}
.center_top_head {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    overflow: hidden;
    margin: 20px 15px;
    display: inline-block;
}
.center_top_name {
    max-width: 135px;
    margin-top: 40px;
    overflow: hidden;
}
.center_top_name h1 {
    font-size: 15px;
    color: #fff;
    font-weight: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.center_top_name h2 {
    font-size: 12px;
    color: #fff;
    font-weight: normal;
    margin-top: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.center_top_number {
    margin: 50px 10px 0 0;
}
.center_top_number em {
    width: 10px;
    display: inline-block;
}
.center_top_number span {
    font-size: 12px;
    color: #fff;
}
.center_top_number i {
    width: 12px;
    display: inline-block;
}
</style>
