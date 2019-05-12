<template>
	<div class="com">
		<div class="container">
			<div class="title">
				Best traders
			</div>
			<div class="persons">
				<div class="person padding">
					<div class="img-wrap sc">
						<img src="../../../images/home/trade.png" alt="#">
					</div>
					<div class="name">
						Aboltus
					</div>
					<div class="country">
						Ukraine
					</div>
				</div>
				<div class="person">
					<div class="img-wrap ft">
						<img src="../../../images/home/trade.png" alt="#">
					</div>
					<div class="name">
						Aboltus
					</div>	
					<div class="country">
						Ukraine
					</div>			
				</div>
				<div class="person padding">
					<div class="img-wrap th">
						<img src="../../../images/home/trade.png" alt="#">
					</div>
					<div class="name">
						Aboltus
					</div>
					<div class="country">
						Ukraine
					</div>
				</div>
			</div>
<!-- 			<div class="trades-wrap">
				<div class="trades-info">
					<div class="trades-info-desc-img"></div>
					<div class="trades-info-desc-date">Date registered</div>
					<div class="trades-info-desc-rating">Rating</div>
					<div class="trades-info-desc-total">Total battles</div>
					<div class="trades-info-desc-winrait">Winrait</div>
					<div class="trades-info-desc-btn"></div>
				</div>
				<div class="trades-items" v-for="item in persons">
					<div class="trades-item-img">
						<img src="../images/photo1.png" alt="#" class="trades-item-img-img">
						<div class="trades-item-img-txt">
							{{item.firstName}}
							<span class="trades-item-img-txt-span"><img src="../images/ukr.png" alt="#"> {{item.country}}</span>
						</div>
					</div>
					<div class="trades-item-date">
						{{ getDateRegister(item.dateRegistered) }}
					</div>
					<div class="trades-item-rating">
						{{item.rating}}
					</div>
					<div class="trades-item-total">
						{{ item.totalGames }}
					</div>
					<div class="trades-item-winrait">
						{{item.winRate / item.totalGames * 100 }}
					</div>
					<div class="trades-item-btn">
						<button class="trades-item-btn-link">Game invite</button>
					</div>
				</div>
			</div> -->
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
.name{
	color: #fff;
	font-size: 16px;
	text-align: center;
	margin: 10px 0;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.country{
	font-size: 14px;
	color: #fff;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	text-align: center;
}
.img-wrap{
	border: 1px solid #fff;
	padding: 10px;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}
.img-wrap.sc::before {
	position: absolute;
	right: 10px;
	bottom: 5px;
	content: '2';
	width: 20px;
	height: 20px;
	border-radius: 100%;
	background-color: #6968ff;
	text-align: center;
	color: #ffd500;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Black, HelveticaNeueCyr;
}
.img-wrap.ft::before {
	position: absolute;
	right: 10px;
	bottom: 5px;
	content: '1';
	width: 20px;
	height: 20px;
	border-radius: 100%;
	background-color: #6968ff;
	text-align: center;
	color: #ffd500;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Black, HelveticaNeueCyr;
}
.img-wrap.th::before {
	position: absolute;
	right: 10px;
	bottom: 5px;
	content: '3';
	width: 20px;
	height: 20px;
	border-radius: 100%;
	background-color: #6968ff;
	text-align: center;
	color: #ffd500;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Black, HelveticaNeueCyr;
}
.person{
	display: flex;
	flex-direction: column;
	margin: 0 50px;
}
.person.padding{
	padding: 20px 0 0 0 ;
}
.title{
	color: #fff;
	font-size: 36px;
	font-family: HelveticaNeueCyr-Black, HelveticaNeueCyr;
	font-weight: 900;
	padding: 40px 0;
	text-align: center;
}
.persons{
	display: flex;
	justify-content:center;
}
.com{
	background-color: #6968ff;
}
.container{
	max-width: 1202px;
	width: 100%;
	margin: 0 auto;
}
</style>