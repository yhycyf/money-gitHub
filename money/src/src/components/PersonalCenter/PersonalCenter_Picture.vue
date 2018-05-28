<template>
    <div class="center_top">
		<div class="center_top_header clearfix">
			<div class="center_top_head fl"><img src="../../../static/images/img/head_pic.png" /></div>
			<div class="center_top_name fl">
				<h1>秒赚大钱</h1>
				<h2>ID:20150222</h2>
			</div>
		</div>
		<div class="center_top_nav clearfix">
			<div class="center_nav_list"><a>564.62<b>提现中心</b></a></div>
			<div class="center_nav_list"><a>2310<b>徒弟数量</b></a></div>
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
    padding: 10px 20px;
}
.center_top_header {
    background: #fff;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
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
    color: #4e4e4e;
    font-weight: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.center_top_name h2 {
    font-size: 12px;
    color: #4e4e4e;
    font-weight: normal;
    margin-top: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.center_top_nav {
    position: relative;
    background: #fe7f58;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
}
.center_nav_list {
    width: 50%;
    float: left;
}
.center_nav_list a {
    line-height: 20px;
    margin: 10px 25px 15px;
    display: block;
    text-align: center;
    font-size: 17px;
    color: #fff;
    font-family: "苹方";
}
.center_nav_list a b {
    line-height: 12px;
    font-weight: normal;
    font-size: 12px;
    color: #fff;
    display: block;
    padding-top: 8px;
}
.center_nav_list {
    width: 50%;
    float: left;
}
.center_top_nav:before {
    content: '';
    width: 1px;
    height: 25px;
    background: #fff;
    position: absolute;
    top: 20px;
    left: 50%;
}
</style>
