<template>
	<div class="footer-row">
		<ul class="footer-menu">
			<router-link 
			class="footer-mune-item" 
			to="/publicHome">
			<span class="footer-menu-item-txt">Rules</span>
		</router-link>
		<router-link 
		class="footer-mune-item" 
		to="/publicVideo" 
		exact tag="li">
		<span class="footer-menu-item-txt">Contacts</span>
	</router-link>
	<router-link 
	class="footer-mune-item" 
	to="/publicRules" 
	exact tag="li">
	<span class="footer-menu-item-txt">Privacy policy</span>
</router-link>
</ul>
<div class="footer-lang">
	<span class="footer-lang-span footer-lang-span-lan">Language: </span> <span class="footer-lang-span">Engilsh</span> 
	<button class="footer-lang-btn" @click="langFn()">
		<img src="../../../../images/bri.png" alt="#"> 
		<img src="../../../../images/drop-down.svg" alt="#">
	</button>
	<ul class="footer-lang-menu" :class="{open: opened === true}">
		<li v-for="lang in langs" class="footer-lang-menu-li" @click="changeLang(lang)">
			<span class="active-line" :class="{active: activeLang === lang}"></span>
			<span class="active-txt">{{ lang }}</span>
		</li>
	</ul>
</div>
</div>
</template>
<script>

export default{
	data(){
		return{
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
}
</script>
<style scoped>
.footer-row{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0 30px;
}
.footer-menu{
	display: flex;
	max-width: 495px;
	width: 100%;
	align-items: center;
	justify-content: space-between;
}
.footer-lang-menu{
	cursor: pointer;
	position: absolute;
	bottom: -75px;
	right: 0px;
	background-color: #fff;
	width: 200px;
	border-radius: 2px;
	display: none;
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
.footer-lang-menu.open{
	display: block
}
.footer-lang-menu-li{
	width: 100%;
	display: flex;
	margin: 15px 0;
	position: relative;
}
.footer-lang{
	max-width: 210px;
	width: 100%;
	color: #fff;
	display: flex;
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	align-items: center;
	justify-content: center;
	position: relative;
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
.footer-mune-item{
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	cursor: pointer;
	max-width: 100px;
	width: 100%;
}
</style>