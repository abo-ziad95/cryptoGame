<template>
	<div class="com">
		<div class="info">
			<div class="title">
				Battle with the <span>best traders</span> in the world
			</div>
			<div class="box-wrap">
				<div class="box-wrap-row">
					<div class="box-wrap-row-item" v-for="item in upBox">
						<div class="line"></div>
						<div class="desc">
							<span class="count">
								{{item.count}}
							</span>
							<span class="txt">
								{{item.txt}}
							</span>
						</div>
					</div>
				</div>
				<div class="box-wrap-row">
					<div class="box-wrap-row-item" v-for="item in downBox">
						<div class="line"></div>
						<div class="desc">
							<span class="count">
								{{item.count}}
							</span>
							<span class="txt">
								{{item.txt}}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="image">
			<img src="../../../images/home/Shape.png" alt="#">
		</div>
		<div class="soc-wrap">
			<soc></soc>
		</div>
	</div>
</template>
<script>
import soc from '../shared/soc.vue'
export default {
	data(){
		return{
			upBox:[{'count': 300000, 'txt': 'trades'},{'count': '100+', 'txt': 'Battles per day'}],
			downBox:[{'count': '$1118480', 'txt': 'Paid in the last month'},{'count': '10+', 'txt': 'Tournaments per day'}]
		}
	},
	components: { 
		soc
	},
}
</script>
<style scoped>
.soc-wrap{
	position: absolute;
	left: 0;
	bottom: 0
}
.txt{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Light, HelveticaNeueCyr;
	font-weight: 300;
}
.count{
	color: #fff;
	font-size: 30px;
	font-family: HelveticaNeueCyr-Light, HelveticaNeueCyr;
	font-weight: 300;
	padding: 0 0 10px 0;
}
.desc{
	margin: 0 0 0 15px;
	display: flex;
	flex-direction: column;
}
.box-wrap-row-item{
	display: flex;
	align-items: center;
	width: 50%;
}
.line{
	background-color: #6968ff;
	width: 20px;
	height: 2px;
}
.title{
	color: #fff;
	font-size: 52px;
	font-family: HelveticaNeueCyr-Black, HelveticaNeueCyr;
	font-weight: 900;
	position: absolute;
	max-width: 775px;
	width: 100%;
	z-index: 1;
	top: 150px;
	left: 0;
}
.title span{
	color: #6968ff;
}
.com{
	display: flex;
	justify-content: space-between;
	position: relative;
}
.image{
	transform: translateX(115px);
	width: 50%;
}
.image img{
	max-width: 100%
}
.info{
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.box-wrap{
	display: flex;
	flex-direction: column;
	width: 100%;
	transform: translateY(100px);
}
.box-wrap-row{
	display: flex;
	justify-content: space-between;
	margin: 0 0 40px 0;
}
</style>