<template>
	<div class="footer-wrap" :class="{small: smallscreen}">
		<div class="footer-lang">
			<span class="footer-lang-span footer-lang-span-lan">Language: </span> <span class="footer-lang-span">Engilsh</span> 
			<button class="footer-lang-btn" @click="langFn()">
				<img src="../../images/bri.png" alt="#"> 
				<img src="../../images/drop-down.svg" alt="#">
			</button>
			<ul class="footer-lang-menu" :class="{open: opened === true}">
				<li v-for="lang in langs" class="footer-lang-menu-li" @click="changeLang(lang)">
					<span class="active-line" :class="{active: activeLang === lang}"></span>
					<span class="active-txt">{{ lang }}</span>
				</li>
			</ul>
		</div>
		<router-link to="/contactSupport" tag="a" class="footer-wrap-link"><span class="footer-wrap-link-span"><svgSupport class="footer-wrap-link-img"></svgSupport></span>Contact Support </router-link>
		<div class="footer-wrap-time">
			<span>Current time:</span> 16 september, 23:13:16 (UTC+3)
		</div>
	</div>
</template>
<script>
import svgSupport from '../svgIcones/svgSupport.vue'

export default{
	data(){
		return{
			smallscreen: false,	
			opened: false,
			activeLang: 'English',
			langs: ['English','Русский' ]
		}
	},
	methods: {
		langFn(lang){
			this.opened = !this.opened
		},
		changeLang(lang){
			this.activeLang = lang
		},
		changeMenu(boolean){
			this.smallscreen = boolean
		}
	},
	created () {
		this.$route.path === '/game1x1' ? this.changeMenu(true) : this.changeMenu(false)
	},
	components: {
		svgSupport
	},
}
</script>
<style scoped>
.footer-lang-menu{
	cursor: pointer;
	position: absolute;
	bottom: 45px;
	right: 30px;
	background-color: #fff;
	width: 200px;
	border-radius: 2px;
	display: none;
}
.footer-lang-menu.open{
	display: block
}
.footer-lang-menu-li{
	width: 100%;
	display: flex;
	margin: 15px 0;
	position: relative;
}
.active-line{
	width: 3px;
	height: 100%;
	background-color: #6a68ff;
	position: absolute;
	content: '';
	top: 0;
	left: 0;
	opacity: 0;
	border-radius: 3px
}
.active-line.active{
	opacity: 1;
}
.active-txt{
	padding: 0 0 0 30px;
	color: #000;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.footer-wrap-link-img{
	padding: ;
}
.footer-wrap{
	position: fixed;
	z-index: 100;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	padding: 20px 15px 20px 0;
	width: 100%;
	background-color: #1a1f25;
}
.footer-wrap.small .footer-lang span{
	display: none;
}
.footer-wrap.small .footer-lang-menu{
	left: 0;
}
.footer-wrap.small .footer-lang-menu span{
	display: block;
}
.footer-wrap-link-span{
	padding: 0 20px 0 0 ;
}
.footer-wrap-link{
	color: #fff;
	font-size: 	18px;
	display: flex;
	align-items: center;
	padding: 0 0 0 20px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
}
.footer-wrap-time{
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	color: #fff;
	margin: 0 0 0 auto;
}
.footer-wrap-time span{
	color: #616162;
}
.footer-lang{
	max-width: 376px;
	width: 100%;
	color: #fff;
	display: flex;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	align-items: center;
	justify-content: center;
	position: relative;
}
.footer-wrap.small .footer-lang{
	max-width: 130px;
	
}
.footer-lang-span-lan{
	color: #5b5c5d;
}
.footer-lang-btn{
	border: none;
	outline: none;
	background-color: transparent;
	display: flex;
	justify-content: space-between;
	width: 65px;
	align-items: center;
	margin: 0 0 0 15px;
	padding: 0;
	position: relative;
	cursor: pointer
}
@media all and (max-width: 1440px) {
	.footer-lang{
		max-width: 	280px;
		font-size: 	14px;
	}
	.footer-wrap-link{
		font-size: 	14px;
	}
	.footer-wrap-time{
		font-size: 	14px;
	}
}
</style>