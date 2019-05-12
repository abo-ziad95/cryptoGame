<template>
	<div class="com">
		<div class="title">
			My wallet
		</div>
		<div class="wallet-desc">
			<div class="wallet-desc-ft">
				<div class="wallet-desc-ft-title">
					<span class="wallet-desc-ft-title-txt">Btc wallet</span>
					<a href="#" class="wallet-desc-ft-title-link">or-Code</a>
				</div>
				<div class="wallet-desc-ft-input">
					<input class="wallet-desc-ft-input-inp" type="text" value="1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t">
					<button class="wallet-desc-ft-input-btn"><copy-svg></copy-svg></button>
				</div>
				<div class="wallet-desc-ft-btns">
					<div class="wallet-desc-ft-btns-ri">
						<button class="wallet-desc-ft-btns-ri-btn	">
							Withdraw
						</button>
						<button class="wallet-desc-ft-btns-ri-btn	">
							Buy tokens
						</button>
					</div>
					<div class="wallet-desc-ft-btns-link-wrap">
						<a href="#" class="wallet-desc-ft-btns-link">Change wallet</a>
					</div>
				</div>
			</div>
			<div class="wallet-desc-sc">
				<div class="wallet-desc-sc-absolute">
					<span>F</span>
				</div>
				<div class="wallet-desc-sc-up">
					<div class="wallet-desc-sc-up-txt">
						Fun balance
					</div>
					<div class="wallet-desc-sc-up-balance">
						12000 FUN
					</div>
				</div>
				<div class="wallet-desc-sc-down">
					Charge after 2 hours 15 min
				</div>
			</div>
			<div class="wallet-desc-sc">
				<div class="wallet-desc-sc-absolute">
					<span>B</span>
				</div>
				<div class="wallet-desc-sc-up">
					<div class="wallet-desc-sc-up-txt">
						Fun balance
					</div>
					<div class="wallet-desc-sc-up-balance">
						12000 FUN
					</div>
				</div>
				<div class="wallet-desc-sc-down">
					Charge after 2 hours 15 min
				</div>
			</div>
		</div>
		<div class="Transaction">
			<div class="title">
				Transaction
			</div>
			<div class="list-item" v-for="item in 3">
				<div class="state green">computed</div>
				<div class="id">
					<span class="list-item-title">ID</span>
					<span class="desc">2312121</span>
				</div>
				<div class="date">
					<span class="list-item-title">Open Date</span>
					<span class="desc">16:23, 01 oct 2018</span>
				</div>
				<div class="qr">
					<input class="wallet-desc-ft-input-inp" type="text" value="1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t" disabled>
				</div>
				<div class="status">
					<span class="desc red">Buy</span>
				</div>
				<div class="amount">
					<span class="list-item-title">Amount </span>
					<span class="desc">0.00330333 BTC</span>
				</div>
				<div class="btn">
					<button class="btn-item">
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import copySvg from '../svgIcones/copy.vue'
export default {
	components: {
		copySvg
	}
}
</script>
<style scoped>
.btn-item{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: transparent;
	width: 20px;
	outline: none;
	height: 50px;
	cursor: pointer;
	padding: 0;
	border: none;
}
.btn-item span{
	width: 10px;
	height: 10px;
	border-radius: 100%;
	background-color: #fff;
}
.amount{
	display: flex;
	flex-direction: column;

}
.status{
	max-width: 65px;
	width: 100%;
	display: flex;
	align-items: center;
}
.qr{
	max-width: 285px;
	width: 100%;
}
.date{
	max-width: 180px;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.list-item-title{
	color: #515253;
	padding: 0 0 10px;
	width: 100%;
	font-size: 16px;
	font-family:  HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.desc{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
}
.desc.red{
	color: #d02021
}
.id{
	max-width: 80px;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.state{
	max-width: 180px;
	width: 100%;
	height: 55px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-size: 18px;
	font-weight: bold;
	border-radius: 3px;
}
.state.red{
	background-color: #8b1e21;
	color: #e42122;
}
.state.green{
	color: #4fcd2c;
	background-color: #347c25;
}
.state.yallow{
	color: #d9bf28;
	background-color: #776d23;
}
.list-item{
	padding: 25px 35px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #151a1f;
	margin: 0 0 20px;
}
.wallet-desc-sc-absolute{
	color: #8e9192;
	font-size: 60px;
	font-family: Gotham-Bold;
	width: 190px;
	height: 190px;
	border-radius: 100%;
	background-color: #1c2126;
	position: absolute;
	right: -60px;
	top: -70px;
}
.wallet-desc-sc-absolute span{
	margin: 100px 0 0 65px;
	display: block;
}
.com{
	width: 100%
}
.title{
	font-family: Gotham-Bold;
	font-size: 30px;
	color: #fff;
	margin: 0 0 30px;
}
.wallet-desc{
	display: flex;
	margin: 0 0 50px;
}
.wallet-desc-ft{
	background-color: #151a1f;
	padding: 40px;
	max-width: 726px;
	width: 100%;
}
.wallet-desc-ft-title{
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 0 0 10px 0;
}
.wallet-desc-ft-title-txt{
	color: #666;
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.wallet-desc-ft-title-link{
	color: #fff;
	font-size: 14px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	border-bottom: 1px solid #fff;
}
.wallet-desc-ft-input{
	margin: 0 0 20px ;
	width: 100%;
	position: relative;
}
.wallet-desc-ft-input-inp{
	width: 100%;
	padding: 0 55px 0 20px;
	height: 50px;
	border: none;
	outline: none;
	font-size: 20px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	color: #fff;
	background-color: #23272a;
}
.wallet-desc-ft-input-btn{
	position: absolute;
	background-color: transparent;
	top: 0;
	right: 0;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	cursor: pointer;
}
.wallet-desc-ft-btns{
	display: flex;
	justify-content: space-between;
}
.wallet-desc-ft-btns-ri{
	display: flex;
	width: 70%;
}
.wallet-desc-ft-btns-ri-btn{
	border: none;
	background-color: #6a68ff;
	margin: 0 15px 0 0;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 150px;
	width: 100%;
	height: 45px;
	border-radius: 25px;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.wallet-desc-ft-btns-link-wrap{
	display: flex;
	align-items: center;
}
.wallet-desc-ft-btns-link{
	font-size: 14px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	color: #fff;
	font-weight: bold;
	border-bottom: 1px solid #fff;
}
.wallet-desc-sc{
	overflow: hidden;
	position: relative;
	background-color: #151a1f;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 40px 25px;
	margin: 0 0 0 30px;
	max-width: 350px;
	width: 100%;
}
.wallet-desc-sc-up-txt{
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	color: #666;
}
.wallet-desc-sc-up-balance{
	color: #fff;
	font-family: Gotham-Bold;
	font-size: 30px;
}
.wallet-desc-sc-down{
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
</style>