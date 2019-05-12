<template>
	<header class="header">
		<div class="container">
			<div class="header-wrap">
				<button class="btn">
					<span class="btn-content">{{ leng }} <img src="../../../images/drop-down.svg" alt="#"></span>
				</button>
				<ul class="header-menu">
					<router-link 
					class="header-mune-item" 
					to="/publicHome" 
					exact tag="li"  
					@click="activeLink = 'btn1'" :class="{active: activeLink === 'btn1'}">
						<span class="header-menu-item-txt">Home page</span>
					</router-link>
					<router-link 
					class="header-mune-item" 
					to="/publicVideo" 
					exact tag="li"  
					@click="activeLink = 'btn1'" :class="{active: activeLink === 'btn2'}">
						<span class="header-menu-item-txt">Video</span>
					</router-link>
					<router-link 
					class="header-mune-item" 
					to="/publicRuls" 
					exact tag="li"  
					@click="activeLink = 'btn1'" :class="{active: activeLink === 'btn3'}">
						<span class="header-menu-item-txt">Rules</span>
					</router-link>
					<router-link 
					class="header-mune-item" 
					to="/publicFaq" 
					exact tag="li"  
					@click="activeLink = 'btn1'" :class="{active: activeLink === 'btn4'}">
						<span class="header-menu-item-txt">FAQ</span>
					</router-link>
					<router-link 
					class="header-mune-item" 
					to="/publicNews" 
					exact tag="li"  
					@click="activeLink = 'btn1'" :class="{active: activeLink === 'btn5'}">
						<span class="header-menu-item-txt">News</span>
					</router-link>
					<router-link 
					class="header-mune-item" 
					to="/publicContacts" 
					exact tag="li"  
					@click="activeLink = 'btn1'" :class="{active: activeLink === 'btn6'}">
						<span class="header-menu-item-txt">Contacts</span>
					</router-link>
				</ul>
				<div class="profile-state">
					<span class="profile-img">
						<img src="../../../images/public-part/header/profile-img.png" alt="#">
					</span>
					<span class="profile-txt">Login</span>
				</div>
				<button class="profile-btn">Sign up</button>
			</div>
		</div>
	</header>
</template>
<script>

export default {
	data(){
		return{
			leng: 'Eng',
			activeLink: '',
		}
	},
	components: {
		
	},
	created(){
		
	},
	methods: {

	},
	computed: {
	}
}
</script>
<style scoped>
.profile-btn{
	background-color: #6968ff;
	max-width: 180px;
	width: 100%;
	color: #fff;
	font-size: 14px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px 0;
	border: none;
	outline: none;
	border-radius: 3px;
}
.btn-content{
	display: flex;
	align-items: center;
	justify-content: center;
}
.btn{
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	color: #fff;
	font-family: HelveticaNeueCyr-Light, HelveticaNeueCyr;
	outline: none;
	border: none;
	max-width: 80px;
	width: 100%;
	font-size: 14px;
	margin: 0 120px 0 0;
}
.profile-txt{
	display: flex;
	color: #fff;
	font-size: 14px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	margin: 0 0 0 10px;
}
.profile-img{
	display: flex;
	justify-content: center;
	align-items: center;
}
.profile-state{
	display: flex;
	align-items: center;
	/*justify-content: center;*/
	margin: 0 20px 0 0;
	max-width: 100px;
	width: 100%;
}
.header-mune-item{
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	color: #fff;
	position: relative;
	padding: 0 2px;
	cursor: pointer;
}
.header-mune-item.router-link-active::before{
	content: '';
	width: 100%;
	height: 2px;
	background-color: #6968ff;
	bottom: -30px;
	left: 0;
	position: absolute;

}
.header-menu{
	display: flex;
	max-width: 590px;
	width: 100%;
	align-items: center;
	justify-content: space-around;
	margin: 0 80px 0 0;
}
.header{
	position: relative;
}
.container{
	max-width: 1202px;
	width: 100%;
	margin: 0 auto;
	padding: 0 10px;
}
.header-wrap{
	display: flex;
	z-index: 1;
	align-items: center;
	padding: 13px 0;
	border-bottom: 1px solid  #35383c;
}
</style>