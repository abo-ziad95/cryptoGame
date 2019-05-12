<template>
	<div class="com">
		<app-header></app-header>
		<div class="row">
			<app-Aside></app-Aside> 
			<div class="profile">
				<div class="title">
					My profile
				</div>
				<div class="blocks-wrap">
					<div class="left">
						<div class="img">
							<img src="../images/photo1.png" alt="#">
							<button class="btn">Settings</button>
						</div>
						<div class="profile-desc">
							<div class="name">
								Boro
							</div>
							<div class="country">
								<img src="../images/ukr.png" alt="#">
								<span class="country-name">Ukraine</span>
							</div>
							<div class="date-wrap">
								<div class="date">
									Date registered: <span>September 12, 2018</span>
								</div>
								<div class="id">
									Profile ID: 39390738
								</div>
							</div>
							<div class="rating-wrap">
								<div class="rating">
									<div class="title-val">
										Rating
									</div>
									<div class="val">
										1504
									</div>
								</div>
								<div class="rating">
									<div class="title-val">
										Total battles
									</div>
									<div class="val">
										11
									</div>
								</div>
							</div>
							<div class="battle-wrap">
								<div class="battle">
									<div class="title-val">
										Battle won
									</div>
									<div class="val">
										10
									</div>
								</div>
								<div class="battle">
									<div class="title-val">
										Battle lose
									</div>
									<div class="val">
										1
									</div>
								</div>
								<div class="battle">
									<div class="title-val">
										Winrait
									</div>
									<div class="val">
										90 %
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="right">
						<div class="right-title">
							<div class="txt">
								Best portfolio in battle
							</div>	
							<div class="tr-val val-title">
								+6.03%
							</div>
						</div>
						<div class="val-wrap">
							<div class="deagram">
								<img src="../images/profile/5.png" alt="#">
							</div>
							<div class="list-wrap">
								<div class="tr">
									<div class="tr-val"></div>
									<div class="tr-val up">Value</div>
									<div class="tr-val up">%</div>
									<div class="tr-val"></div>
								</div>
								<div class="tr" v-for="item in 4">
									<div class="tr-val cur">BTC</div>
									<div class="tr-val">7.510876</div>
									<div class="tr-val">13.24</div>
									<div class="tr-val">+2.05%</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<app-footer></app-footer>
	</div>
</template>	
<script>
import Header from './shared/header.vue'
import Aside from './shared/aside.vue'
import Footer from './shared/footer.vue'
export default {
	components: {  
		appAside: Aside,
		appFooter: Footer,
		appHeader: Header,
	},
}
</script>
<style scoped>
.list-wrap{
	display: flex;
	flex-direction: column;
	width: 100%;
}
.tr{
	display: flex;
	width: 100%;
	justify-content: space-between;
}
.deagram{
	margin: 0 30px 0 0;
}
.val-wrap{
	display: flex;
}
.txt{
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.right-title{
	display: flex;
	justify-content: space-between;
	margin: 0 0 25px;
}
.profile-desc{
	width: 100%;
}
.title-val{
	color: #505253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	margin: 0 0 5px;
}
.title{
		color: #fff;
	font-family: Gotham-Bold;
	font-size: 	30px;
	margin:  0 0 30px;
}
.val{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.rating-wrap{
	display: flex;
	margin: 0 0 25px;
}
.battle-wrap{
	display: flex;
	justify-content: space-between;
	max-width: 380px;
	width: 100%;
}
.battle{
	width: 33%;
	max-width: 130px;
}
.rating{
	max-width: 130px;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.id{
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.date{
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	margin: 0 0 10px;
}
.date span{
	font-weight: bold;
}
.date-wrap{
	margin: 0  0 25px;
	color: #fff;
}
.name{
	color: #fff;
	font-size: 16px;
	font-family: Gotham-Bold;
	margin: 0 0 10px;
}
.country{
	display: flex;
	align-items: center;
	margin: 0 0 20px;
}
.country img{
	margin: 0 10px 0 0;
}
.country-name{
	color: #fff;
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.img{
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 222px;
	width: 100%;
}
.btn{
	max-width: 145px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	border: none;
	outline: none;
	background-color: #6a68ff;
	border-radius: 50px;
	height: 50px;
}
.img img{
	margin: 0 0 25px;
}
.left{
	background-color: #151a1f;
	max-width: 725px;
	width: 100%;
	padding: 30px 0px;
	max-height: 100%;
	display: flex;
}
.right{
	background-color: #151a1f;
	max-width: 725px;
	width: 100%;
	padding: 40px 0 40px 40px;
	max-height: 100%;
}
.tr-val.val-title{
	color: #53dd2b;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	padding: 0;
}
.tr-val{
	max-width: 115px;
	width: 100%;
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	padding: 0  0 25px;
}
.tr-val.cur{
	font-weight: bold;
}
.tr-val.up{
	padding: 0  0 15px;
	color: #303336;
}
.blocks-wrap{
	display: flex;
	justify-content: space-between;
	max-height: 300px;
}
.profile{
	background-color: #101217;
	width: 100%;
	padding: 145px 30px 65px 30px;
}
.row{
	display: flex;
}
.com{
	width: 100%;
}
</style>