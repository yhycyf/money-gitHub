<template>
	<div class="income">
		<div class="tishi_box">
			<div class="prompt"><marquee scrollamount="3">公告：即日起积分将转换为金币，前往“我的金币”查看详情</marquee><!-- <span><img src="../images/duobao/right_black.png" /></span> --></div>
		</div>
		<!-- 收入 -->
		<div class="income income_box">
			<p>今日收益(元)：</p>
			<div class="flex_box"> 
				<h1 class="fl dn">580.00<b>元</b></h1>
				<h1 class="fl"><i>竟然没有</i></h1>
				<a class="tixian"><em>立即提现</em></a>
			</div>
			<div class="income_bot">
				<p><span>5.00</span><br/>账户余额</p>
				<p><span>100.00</span><br/>累计收入</p>
				<p><span>6</span><br/>今日收徒</p>
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
	.tishi_box {
		width: 100%;
		height: 30px;
		line-height: 30px;
		background: #fefced;
		overflow: hidden;
	}
	.prompt {
		height: 30px;
		font-size: 14px;
		color: #f3501d;
		padding: 0 10px;
		display: block;
	}
	.income p {
		line-height: 1.25em;
		padding: 0.9em 1em 0.5em;
	}
	.income_box a.tixian em {
		font-size: 13px;
		color: #f3501d;
		font-style: normal;
		display: block;
	}
	.income_box {
		width: 100%;
		height: inherit;
		background: #fe7f58;
		overflow: hidden;
		padding-bottom: 0;
	}
	.income {
		position: relative;
	}
	.income_box p {
		font-size: 13px;
		color: #fff;
	}
	.income_box h1 {
		height: 60px;
		font-size: 40px;
		color: #fff;
		font-weight: normal;
		padding-left: 10px;
	}
	.income_box h1 i {
		font-size: 34px;
		font-style: normal;
		padding-left: 10px;
	}
	.income_box h1 b {
		font-size: 15px;
		color: #fff;
		font-weight: normal;
	}
	.income_box a.tixian {
		width: 75px;
		height: 30px;
		line-height: 30px;
		float: right;
		background: #fff;
		border-radius: 3px;
		text-align: center;
		display: block;
		margin: 10px 10px 0 0;
		border: 1px solid #fff;
	}
	.income_box .income_bot {
		height: inherit;
		padding: 10px 0;
		width: 100%;
		position: inherit;
		overflow: hidden;
		border: none;
		background: #fc7248;
	}
	.income_bot {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.income_box .income_bot p {
		line-height: 20px;
		font-size: 11px;
		color: #fff;
		margin: 0;
		padding:0;
		text-align:center;
		border: none;
	}
	.income_box .income_bot p span {
		width: inherit;
		height: inherit;
		margin: 0;
		display: initial;
		font-size: 17px;
}
</style>