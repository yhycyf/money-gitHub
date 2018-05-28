<template>
      <!-- 列表 -->
	<div class="main_list">
		<router-link :to={path:router}>
				<a :class='{red_dot:redDot,exclusive:exclusive}'><img :src=lsrc alt=""><b class="posi_biaoqian" v-show='isShow'>{{number}}</b></a>
		</router-link>
		<span>{{text}}</span>  
	</div>
</template>

<script>
export default {
	 props: {
        lsrc: {

        },
        text: {

        },
        isShow: {
	
        },
        router: {

		},
		number: {

		},
		redDot: {

		},
		exclusive: {

		}
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
	.main {
		margin-top: 10px;
		font-size: 16px;
		display:flex;
		flex-flow:row wrap;
		align-content:center;
		background:#fff;
		padding-top:15px;
		.main_list {
			width: 25%;
			text-align:center;
			// padding-bottom: 15px;
		}
		a {
			width: 2.94em;
			height: 2.94em;
			display: block;
			margin: 0 auto 10px;
			position: relative;
		}
		span {
			display: block;
			width: 100%;
			font-size: 0.875em;
			text-align: center;
			margin: 0 auto 15px;
		}
		b {
			position: absolute;
			top: 1px;
			right:-22px;
			background: #ff5847;
			color: #fff;
			padding: 0 6px;
			border-radius: 15px;
			font-size: 10px;
			border: 1px solid #fff;
		}
		.red_dot:after {
			content: '';
			display: block;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background: red;
			top: -4px;
			right: -4px;
			position: absolute;
		}
		.exclusive .posi_biaoqian {
			right: -10px;
			top: -2px;
		}
	}
</style>
