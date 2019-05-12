<template>
	<div class="com">
		<div class="phone-wrap">
			<img src="../.../../../../images/home/m.png" alt="#" class="sircle">
			<img src="../../../images/home/1.png" alt="#" class="phone-left">
			<img src="../../../images/home/2.png" alt="#" class="phone-right">
		</div>
		<div class="txt">
			<div class="title">
				Increase your money in <span class="title-span">secure battles</span>
			</div>
			<div class="subtitle">
				Battles for traders with the ability to win Btc. The winner is the portfolio with the maximum margin during the battle. Just choose the opponent that suits you, click "Join game" and show who the boss is there.
			</div>
			<div class="btn-wrap">
				<button class="btn">Registration</button>
			</div>
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
.btn{
	max-width: 175px;
	width: 100%;
	background-color: #6968ff;
	color: #fff;
	font-size: 14px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	padding: 15px 0;
	border: none;
	outline: none;
	border-radius: 2px;
	letter-spacing: 1px;
}
.subtitle{
	color: #717376;
	line-height: 1.2;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	margin: 0 0 50px 0;
}
.txt{
	margin: 0 0 0 15px;
}
.title{
	color: #fff;
	font-size: 36px;
	font-family: HelveticaNeueCyr-Black, HelveticaNeueCyr;
	font-weight: 900;
	margin: 0 0 40px 0;
}
.title-span{
	color: #6968ff;
	display: block;
	margin: 20px 0 0 0;
}
.com{
	display: flex;
	justify-content: space-between;
	margin: 50px 0 0  0;
	align-items: center;
}
.phone-wrap{
	min-width: 600px;
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
}
.sircle{
	position: absolute;
	top: 0;
	left: -80px;
	z-index: 0;
}
.phone-left{
	z-index: 1;
	margin: 0px 40px 0 15px;
}
.phone-right{
	z-index: 1;
	margin: 100px 0 0 0;
}
</style>