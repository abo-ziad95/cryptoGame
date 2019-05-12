<template>
	<div class="com">
		<app-header></app-header>
		<div class="row">
			<app-Aside></app-Aside> 
			<div class="referral">
				<div class="title program">
					Referral program
				</div>
				<div class="up">
					<div class="left">
						<div class="url-wrap">
							Refferal url
						</div>
						<div class="url-inp-wrap">
							<input type="text" id="copy" class="url-inp" v-model="ref">
							<button class="url-inp-btn" @click="copyLink"><copy-svg></copy-svg></button>
						</div>
						<div class="title-links">Share link</div>
						<div class="links-wrap">
							<div class="links-btns">
								<a href="#" class="links-btns-item"><svgFacebook></svgFacebook><span class="links-btns-txt">Telegram</span></a>
								<a href="#" class="links-btns-item"><svgFacebook></svgFacebook><span class="links-btns-txt">Facebook</span></a>
								<a href="#" class="links-btns-item"><svgFacebook></svgFacebook><span class="links-btns-txt">Twitter</span></a>
							</div>
						</div>
					</div>
					<div class="right">
						<div class="right-title">Instructions for using the referral program</div>
						<div class="right-subtitle">
							Refferal - a link, the transition of users on which brings profit to its creator, that is, a referral. In the referee there is an element identifying the person behind whom it is fixed. When users go through the hyperlink, perform registration and replenish the account, they automatically become referrals and their activity to bring a fixed income to the referral.
						</div>
					</div>
				</div>
				<div class="down">
					<div class="title-wrap">
						<div class="title">
							Reffered users
						</div>
						<div class="title-desc">
							<div class="total">
								<span class="txt">Total refferals</span>
								<span class="number">3</span>
							</div>
							<div class="amount">
								<span class="txt">Amount earned</span>
								<span class="number">$400.00</span>
							</div>
							<button class="title-btn">Withdraw</button>
						</div>
					</div>

					<div class="refferal-wrap">
						<div class="refferal-info">
							<div class="refferal-info-desc-img"></div>
							<div class="refferal-info-desc-id">ID</div>
							<div class="refferal-info-desc-mail">Mail</div>
							<div class="refferal-info-desc-date">Date registration</div>
							<div class="refferal-info-desc-earned">Amount earned</div>
							<div class="refferal-info-desc-btc">Amount earned in BTC</div>
						</div>
						<div class="refferal-items" v-for="item in 3">
							<div class="refferal-item-img">
								<img src="../images/photo1.png" alt="#" class="refferal-item-img-img">
								<div class="refferal-item-img-txt">
									Trading Guru
									<span class="refferal-item-img-txt-span"><img src="../images/ukr.png" alt="#"> Ukraine</span>
								</div>
							</div>
							<div class="refferal-item-id">
								121222
							</div>
							<div class="refferal-item-mail">
								Tradingguru@gmail.com
							</div>
							<div class="refferal-item-date">
								25.09.2018 16:00
							</div>
							<div class="refferal-item-earned">
								$ 292.99
							</div>
							<div class="refferal-item-btc">
								0.00330333 BTC
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
import svgFacebook from './svgIcones/svgFacebook.vue'
import Aside from './shared/aside.vue'
import copySvg from './svgIcones/copy.vue'
import Footer from './shared/footer.vue'
import axios from 'axios'

export default {
	data(){
		return{
			ref: ''
		}
	},
	components: {  
		appAside: Aside,
		appFooter: Footer,
		appHeader: Header,
		copySvg,
		svgFacebook
	},
	methods:{
		copyLink(){
			let testingCodeToCopy = document.querySelector('#copy')
      testingCodeToCopy.setAttribute('type', 'text')
			testingCodeToCopy.select()
			document.execCommand('copy')
		},
		getData(){
			let data = {token: localStorage.getItem('cryptoGameToken')}
			axios({
				url: `http://192.168.0.177:8000/api/referral`,
				method: 'POST',
				data
			})
			.then(res => {
				localStorage.setItem('cryptoGameToken', res.data.token)
				this.ref = `http://192.168.0.178:8080/register?ref=${res.data.ref}`
			})
			.catch(err => console.log(err))
		}
	},
	created(){
		this.getData()
	}
}
</script>
<style scoped>
.refferal-item-btc{
	max-width: 180px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}

.refferal-item-earned{
	max-width: 140px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.refferal-item-date{
	max-width: 180px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.refferal-item-mail{
	max-width: 250px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.refferal-item-id{
	max-width: 90px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.refferal-item-img-txt-span{
	display: flex;
	width: 100%;
	align-items: center;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 14px;
	padding: 12px 0 0 0;
}
.refferal-item-img-txt-span img{
	margin: 0 10px 0 0 ;
}
.refferal-item-img-txt{
	color: #fff;
	font-family:  Gotham-Bold;
	font-size: 16px;
}
.refferal-item-img-img{
	margin: 0 20px 0 0 ;
}
.refferal-item-img{
	max-width: 275px;
	width: 100%;
	display: flex;
	align-items: center;
}
.refferal-items{
	display: flex;
	border-bottom: 1px solid #202529;
	padding: 10px 0;
	justify-content: space-between;
}
.refferal-info-desc-btn{
	max-width: 160px;
	width: 100%;
}
.refferal-info-desc-btc{
	max-width: 180px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.refferal-info-desc-earned{
	max-width: 140px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.refferal-info-desc-date{
	max-width: 180px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.refferal-info-desc-mail{
	max-width: 250px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.refferal-wrap{
	background-color: #151a1f;
	padding: 55px 65px 30px 30px;
}
.refferal-info{
	width: 100%; 
	display: flex;
	justify-content: space-between;
}
.refferal-info-desc-img{
	max-width: 275px;
	width: 100%;
}
.refferal-info-desc-id{
	max-width: 90px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}



.title-btn{
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 200px;
	width: 100%;
	height: 50px;
	background-color: #6a68ff;
	border: none;
	outline: none;
	border-radius: 3px;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.total{
	display: flex;
	flex-direction: column;
	max-width: 100px;
	width: 100%;
}
.amount{
	display: flex;
	flex-direction: column;
	max-width: 125px;
	width: 100%;
}
.txt{
	color: #666666;
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	margin: 0 0 10px;
}
.number{
	color: #fff;
	font-size: 24px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.title-wrap{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 0 15px;
}
.title-desc{
	display: flex;
	max-width: 510px;
	width: 100%;
	justify-content: space-between;
	align-items: center;
}
.right-subtitle{
	color: #989b9d;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	font-size: 16px;
	line-height: 2;
}
.right-title{
	color: #fff;
	margin: 0 0 35px ;
	font-size: 22px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.links-btns-txt{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	padding: 0 0 0 20px;
}
.links-wrap{
	max-width: 520px;
	width: 100%;
}
.links-btns-item{
	display: flex;
	height: 50px;
	align-items: center;
	justify-content: center;
	max-width: 165px;
	width: 100%;
	border: 1px solid #fff;
	border-radius: 40px;
}
.links-btns{
	display: flex;
	justify-content: space-between;
}
.title-links{
	color: #fff;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 18px;
	margin: 0 0 25px;
}
.url-inp-btn{
	background-color: transparent;
	width: 55px;
	height: 50px;
	border: none;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 0;
	top: 0;
	cursor: pointer;
}
.url-inp{
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
.url-inp-wrap{
	margin: 0 0 25px;
	max-width: 620px;
	width: 100%;
	position: relative;
}
.url-wrap{
	color: #fff;
	margin: 0 0 20px;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;

}
.left{
	max-width: 850px;
	width: 100%;
	background: url('../images/bg/refferalUrlBg.jpg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	padding: 100px 0 80px 0;
	align-items: center;
}
.up{
	display: flex;
	max-height: 370px;
	justify-content: space-between;
	margin: 0 0 30px;
}
.right{
	max-width: 600px;
	width: 100%;
	padding: 50px 50px 100px 50px;
	background-color: #151a1f;
}
.title{
	color: #fff;
	font-size: 30px;
	font-family: Gotham-Bold;
}
.total.program{
	margin: 0 0 30px;
}
.referral{
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
@media all and (max-width: 1440px) {
	.referral{
		padding: 110px 20px 65px 20px;
	}
	.title{
		font-size: 24px;
	}
	.up{
		max-height: 307px;
		margin: 30px 0
	}
	.left{
		max-width: 650px;
		padding: 60px 0;
	}
	.right{
		max-width: 455px;
		padding: 30px 40px 100px 30px;
	}
	.right-title{
		font-size: 18px;
		margin: 0 0 30px 0;
	}
	.right-subtitle{
		font-size: 14px;
		line-height: 1.5;
	}
	.url-wrap{
		font-size: 14px;

	}
	.url-inp-wrap{
		max-width: 460px;
		font-size: 16px;
	}
	.title-links{
		font-size: 14px;
		margin: 0 0 20px;
	}
	.links-btns-txt{
		font-size: 14px;
	}
	.txt{
		font-size: 12px;
	}
	.number{
		font-size: 20px;
	}
	.title-btn{
		font-size: 14px;
		max-width: 170px;
	}
	.refferal-info-desc-img{
		max-width: 230px;
	}
	.refferal-item-img{
		max-width: 230px;
	}
	.refferal-item-img-txt{
		font-size: 12px;
	}
	.refferal-item-img-txt-span{
		font-size: 11px;
	}
	.refferal-info-desc-id{
		max-width: 110px;
		font-size: 12px;
	}
	.refferal-item-id{
		max-width: 110px;
		font-size: 14px;
	}
	.refferal-info-desc-mail{
		max-width: 240px;
		font-size: 12px;
	}
	.refferal-item-mail{
		max-width: 240px;
		font-size: 14px;
	}
	.refferal-item-date{
		max-width: 170px;
		font-size: 14px;
	}
	.refferal-info-desc-date{
		max-width: 170px;
		font-size: 12px;
	}
	.refferal-info-desc-earned{
		/*max-width: 140px*/
		font-size: 12px;
	}
	.refferal-item-earned{
		font-size: 14px;
	}
	.refferal-info-desc-btc{
		max-width: 130px;
		font-size: 12px;

	}
	.refferal-item-btc{
		max-width: 130px;
		font-size: 14px;
	}
}
</style>