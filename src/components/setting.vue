<template>
	<div class="com">
		<app-header></app-header>
		<div class="row">
			<app-Aside></app-Aside> 
			<div class="content">
				<div class="title">	
					Settings
				</div>
				<div class="component-wrap">	
					<div class="menu">	
						<button class="menu-item" @click="active = 'personal'">
							<span class="line" :class="{active: active === 'personal'}"></span>
							<span class="text" :class="{active: active === 'personal'}">Personal data</span>
							<img src="../images/setting/person.png" alt="#" class="img" :class="{active: active === 'personal'}">
						</button>
						<button class="menu-item" @click="active = 'security'">
							<span class="line" :class="{active: active === 'security'}"></span>
							<span class="text" :class="{active: active === 'security'}">Security</span>
							<img src="../images/setting/security.png" alt="#" class="img" :class="{active: active === 'security'}">
						</button>
						<button class="menu-item" @click="active = 'notification'">
							<span class="line" :class="{active: active === 'notification'}"></span>
							<span class="text" :class="{active: active === 'notification'}">Notification Settings</span>
							<img src="../images/setting/notification.png" alt="#" class="img" :class="{active: active === 'notification'}">
						</button>
						<button class="menu-item" @click="active = 'sessions'">
							<span class="line" :class="{active: active === 'sessions'}"></span>
							<span class="text" :class="{active: active === 'sessions'}">Sessions</span>
							<img src="../images/setting/earth.png" alt="#" class="img"  :class="{active: active === 'sessions'}">
						</button>
					</div>
					<div class="switched">	
						<personal v-if="active === 'personal'"></personal>
						<security v-if="active === 'security'"></security>
						<notification v-if="active === 'notification'"></notification>
						<sessions v-if="active === 'sessions'"></sessions>
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
import personal from './settings/personal.vue'
import security from './settings/security.vue'
import notification from './settings/notification.vue'
import sessions from './settings/sessions.vue'
import axios from 'axios'


export default {
	data(){
		return{
			active: 'personal',
		}
	},
	components: {  
		personal,
		security,
		notification,
		sessions,
		appAside: Aside,
		appFooter: Footer,
		appHeader: Header,
	},
}
</script>
<style scoped>
.switched{
	margin: 0 0 0 30px;
	width: 100%;
}
.img{
	opacity: 0;
}
.img.active{
	opacity: 	1;
}
.menu-item{
	width: 100%;
	display: flex;
	align-items: center;
	height: 40px;
	border: none;
	background-color: transparent;
	outline: none;
	padding: 0;
	margin: 0 0 30px 0 ;
	cursor: pointer;
}
.line{
	height: 40px;
	display: block;
	width: 2px;
	background-color: #6a68ff;
	opacity: 0;
}
.line.active{
	opacity: 	1;
}
.text{
	font-size: 18px;
	font-family: 	HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	color: #666666;
	padding: 0 0 0 50px;
	width: 80%;
	height: 100%;
	text-align: left;
}
.text.active{
	color: #fff;
}
.menu{
	padding: 40px 0 0 0;
	background-color: #151a1f;
	max-width: 348px;
	width: 100%;
}
.content {
	background-color: #101116;
	width: 100%;
	padding: 150px 30px 100px 30px;
}
.row{
	display: flex;
}
.com{
	width: 100%;
}
.title{
	width: 100%;
	color: #fff;
	margin: 0 0 30px 0;
	font-size: 30px;
	font-family: Gotham-Bold;
}
.component-wrap{
	display: flex;
	align-items: flex-start;
}@media all and (max-width: 1440px) {
	.content{
		padding: 110px 20px 100px 20px;
	}
	.title{
		font-size: 24px;
		margin: 0 0 25px
	}
	.menu{
		padding: 20px 0 0 0;
		max-width: 265px;
	}
	.text{
		padding: 0 0 0 30px;
		font-size: 14px;
	}
	.switched{
		margin: 0 0 0 20px
	}
}
</style>