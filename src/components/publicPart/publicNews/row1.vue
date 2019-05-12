<template>
	<div class="com">
		<div class="new-wrap">
			<img src="../../../images/news/new.png" alt="#">
			<div class="txt-wrap">
				<div class="date">
					September 12, 2018
				</div>
				<div class="txt">
					Convenient input and withdrawal  of money
				</div>
			</div>
		</div>
		<div class="video-wrap">
			<img src="../../../images/news/3.png" alt="#">
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
		}
	},
	components: { 
	},
}
</script>
<style scoped>
.video-wrap{
	max-width: 675px;
	width: 100%;
}
.video-wrap img{
	max-width: 100%;
	height: 100%;
}
.com{
	display: flex;
	max-height: 295px;
	height: 100%;
	margin: 0 0 25px 0 ;
}
.new-wrap{
	position: relative;
	max-width: 476px;
	width :100%;
	margin: 0 20px 0 0;
}
.new-wrap img{
	max-width: 100%;
	height: auto;
}
.txt-wrap{
	position: absolute;
	top: 140px;
	left: 40px;
	max-width: 350px;
	width: 100%;
}
.date{
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	position: relative;
	margin: 0 0 35px 0;
}
.date::after{
	position: absolute;
	content: '';
	bottom: -15px;
	left: 0;
	width: 20px;
	height: 2px;
	background-color: #6968ff;
}
.txt{
	color: #fff;
	font-size: 22px;
	font-weight: 300;
	font-family: HelveticaNeueCyr-Light, HelveticaNeueCyr;
}
</style>