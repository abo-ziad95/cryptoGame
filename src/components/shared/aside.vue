<template>
	<div class="aside" :class="{small: smallscreen}">
		<div class="aside-info">
			<div class="aside-info-photo">
				<img src="../../images/profile.jpg" alt="#" class="aside-info-photo-img">
				<router-link to="/setting" tag="a" class="aside-info-photo-btn">
					<img src="../../images/satting.png" alt="#">
				</router-link>
			</div>
			<div class="aside-info-mail">{{email}}</div>
			<div class="aside-info-country"><img src="../../images/ukr.png" alt="#"> <span>Ukraine</span></div>
		</div>
		<ul class="aside-menu"> 
			<router-link class="aside-menu-li" to="/dashboard" exact tag="li"  @click="activeLink = 'btn1'" :class="{active: activeLink === 'btn1'}">
				<span class="router-link-active-line"></span><a class="aside-menu-link"><span class="aside-menu-link-img">
					<svgDashboad></svgDashboad>
				</span><span class="aside-menu-link-txt">Dashboard</span></a>
			</router-link>
			<router-link class="aside-menu-li" to="/myWallet" tag="li"  @click="activeLink = 'btn2'" :class="{active: activeLink === 'btn2'}">
				<span class="router-link-active-line"></span><a class="aside-menu-link"><span class="aside-menu-link-img">
					<svgMyWallet></svgMyWallet>
				</span><span class="aside-menu-link-txt">My wallet</span></a>
			</router-link>
			<router-link class="aside-menu-li" to="/portfolio" tag="li"  @click="activeLink = 'btn3'" :class="{active: activeLink === 'btn3'}">
				<span class="router-link-active-line"></span><a class="aside-menu-link"><span class="aside-menu-link-img">
					<svgPortfolio></svgPortfolio>
				</span><span class="aside-menu-link-txt">Portfolios</span></a>
			</router-link>
			<router-link class="aside-menu-li" to="/tradersOnline" tag="li" @click="activeLink = 'btn4'" :class="{active: activeLink === 'btn4'}">
				<span class="router-link-active-line"></span><a class="aside-menu-link"><span class="aside-menu-link-img">
					<svgTradersOnline></svgTradersOnline>
				</span><span class="aside-menu-link-txt">Traders online</span></a>
			</router-link>
			<router-link class="aside-menu-li" to="/gamesHistory" tag="li" @click="activeLink = 'btn5'" :class="{active: activeLink === 'btn5'}">
				<span class="router-link-active-line"></span><a class="aside-menu-link"><span class="aside-menu-link-img">
					<svgGamesHistory></svgGamesHistory>
				</span><span class="aside-menu-link-txt">Games history</span></a>
			</router-link>
			<router-link class="aside-menu-li" to="/usersRating" tag="li"  @click="activeLink = 'btn6'" :class="{active: activeLink === 'btn6'}">
				<span class="router-link-active-line"></span><a class="aside-menu-link"><span class="aside-menu-link-img">
					<svgUsersRating></svgUsersRating>
				</span><span class="aside-menu-link-txt">Users rating</span></a>
			</router-link>
			<router-link class="aside-menu-li" to="/referralProgram" tag="li"  @click="activeLink = 'btn7'" :class="{active: activeLink === 'btn7'}">
				<span class="router-link-active-line"></span><a class="aside-menu-link"><span class="aside-menu-link-img">
					<svgReferralProgram></svgReferralProgram>
				</span><span class="aside-menu-link-txt">Referral program</span></a>
			</router-link>
		</ul>
		<div class="aside-links">
			<a href="#">About</a>
			<router-link to="/faq" tag="a" >FAQ</router-link>
		</div>
	</div>
</template>
<script>
import svgDashboad from '../svgIcones/svgDashboard.vue'
import svgGamesHistory from '../svgIcones/svgGamesHistory.vue'
import svgMyWallet from '../svgIcones/svgMyWallet.vue'
import svgPortfolio from '../svgIcones/svgPortfolio.vue'
import svgReferralProgram from '../svgIcones/svgReferralProgram.vue'
import svgTradersOnline from '../svgIcones/svgTradersOnline.vue'
import svgUsersRating from '../svgIcones/svgUsersRating.vue'
export default {
	data() {
		return{
			activeLink: '',
			smallscreen: false,
			email: this.$store.getters.email
		}
	},
	methods: {
		changeMenu(boolean){
			this.smallscreen = boolean
		}
	},
	created () {
		this.$route.path === '/game1x1' ? this.changeMenu(true) : this.changeMenu(false)
  },
  components: {
  	svgDashboad,
  	svgGamesHistory,
  	svgMyWallet,
  	svgPortfolio,
  	svgReferralProgram,
  	svgTradersOnline,
  	svgUsersRating,
  },
}
</script>
<style scoped>
.aside.small{
	max-width: 130px;
}
.aside.small .aside-menu-link-img{
	width: auto;
	padding: 0;
}
.aside.small .aside-menu-link-txt, .aside.small .aside-info-mail, .aside.small .aside-info-country{
	display: none;
}
.aside.small .aside-info-photo-img{
	max-width: 85px;
	width: 100%;
}
.router-link-active{
	color: #fff;
	background-color: #6a68ff;
}
.router-link-active .router-link-active-line{
	opacity: 1;
}
.router-link-active-line{
	height: 40px;
	width: 2px;
	opacity: 0;
	background-color: #fff;
	display: block;
}
.aside-menu-li{
	display: flex;
	align-items: center;
}
.aside{
	background-color: #151a1f;
	width: 100%;
	max-width: 378px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 155px 0 65px;
	z-index: 99;

}
.aside-info-photo{
	position: relative;
	max-width: 140px;
	width: 100%;
	margin: 0 auto 30px;
}
.aside-info-photo-img{
	border-radius: 3px;
	max-width: 100%;
	height: auto;
}
.aside-info-photo-btn{
	border: none;
	outline: none;
	background-color: #6a68ff;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 3px;
	width: 40px;
	height: 40px;
	position: absolute;
	right: -10px;
	cursor: pointer;
	bottom: -10px;
}
.aside-info-mail{
	color: #fff;
	margin: 0 0 15px;
	font-size: 16px;
	font-family: Gotham-Bold;
}
.aside-info-country{
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	display: flex;
	align-items: center;
	justify-content: center
}
.aside-info-country span{
	color: #fff;
	padding: 0 0 0 8px;
}
.aside-menu{
	margin: 75px 0 0 ;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

}
.aside-menu-link{
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-size: 18px;
	background-color: transparent;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 25px 0;
	color: #fff;
}
.aside-menu-link-img{
	padding: 0 20px 0 ;
	width: 50px;
}
.aside-menu-link-txt{
	width: 200px;
}
.aside-menu-link.active{
	background-color: #6a68ff;
}
.aside-links{
	max-width: 195px;
	width: 100%;
	margin: 150px 0 60px;
	display: flex;
	justify-content: space-between;
}
.aside.small .aside-links{
	margin: 60px 0 25px;
	flex-direction: column;
}
.aside.small .aside-links a {
	text-align: center;
	margin: 0 0 35px;
}
.aside-links a {
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
@media all and (max-width: 1440px) {
	.aside{
		max-width: 280px;
		padding: 110px 0 65px;
	}
	.aside-menu-link-txt{
		width: 115px;
	}
	.aside-menu-link{
		font-size: 	14px;
		padding: 20px 0;
	}
	.aside-info-country{
		font-size: 	14px;
	}
	.aside-info-mail{
		font-size: 	12px;
	}
	.aside.small{
		max-width: 90px
	}
	.aside.small .aside-info-photo{
		max-width: 60px;
	}
	.aside.small .aside-info-photo-btn{
		width: 35px;
		height: 35px;
		bottom: -20px;
		right: 12px;

	}
}
</style>