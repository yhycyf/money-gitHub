<template>
    <div class="breakdown">
		<div class="center_list">
			<a><span><img width="100%" src="../../../static/images/myincome_14.png" /></span>我的明细</a>
		</div>
		<div class="clearfix">
			<div class="breakdown_list">
				<a>
					<em><img src="../../../static/images/ico_details01.png" /></em>
					<span>任务明细</span>
				</a>
			</div>
			<div class="breakdown_list">
				<a>
					<em><img src="../../../static/images/ico_details02.png" /></em>
					<span>收徒明细</span>
				</a>
			</div>
			<div class="breakdown_list">
				<a>
					<em><img src="../../../static/images/ico_details03.png" /></em>
					<span>提现明细</span>
				</a>
			</div>
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
.breakdown {
    background: #fff;
}
.center_list {
    background: #fff;
    margin-top: 10px;
}
.breakdown .center_list a {
    margin-right: 10px;
    border-bottom: 0.5px solid #dcdcdc;
}
.center_list a {
    padding: 10px 0;
    display: block;
    font-size: 15px;
    color: #333;
}
.breakdown .center_list a span {
    width: 18px;
}
.center_list span {
    height: inherit;
    margin-left: 0;
}
.center_list span {
    display: inline-block;
    margin: 0 10px 0 10px;
}
.breakdown_list {
    width: 33.3%;
    float: left;
}
.breakdown_list a {
    display: block;
}
a {
    text-decoration: none;
    color: #fff;
}
.breakdown_list a em {
    width: 50px;
    display: block;
    margin: 18px auto 10px;
}
.breakdown_list a span {
    font-size: 12px;
    color: #4c4c4c;
    display: block;
    text-align: center;
    padding-bottom: 15px;
}
</style>
