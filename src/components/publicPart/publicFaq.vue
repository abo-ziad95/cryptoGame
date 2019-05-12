<template>
	<div class="com">
		<publicHeader></publicHeader>
		<div class="row">
			<!-- <app-Aside></app-Aside>  -->
			<div class="content">
				<div class="links">
				</div>
				<div class="title">	
					FAQ
				</div>
				<div class="component-wrap">	
					<div class="menu">	
						<div class="component-wrap-title">
							Categories of questions
						</div>
						<button class="menu-item" @click="active = 'general'">
							<span class="line" :class="{active: active === 'general'}"></span>
							<span class="text" :class="{active: active === 'general'}">General questions</span>
						</button>
						<button class="menu-item" @click="active = 'withdrawing'">
							<span class="line" :class="{active: active === 'withdrawing'}"></span>
							<span class="text" :class="{active: active === 'withdrawing'}">Withdrawing funds</span>
						</button>
						<button class="menu-item" @click="active = 'deposit'">
							<span class="line" :class="{active: active === 'deposit'}"></span>
							<span class="text" :class="{active: active === 'deposit'}">Deposit funds</span>
						</button>
						<button class="menu-item" @click="active = 'account'">
							<span class="line" :class="{active: active === 'account'}"></span>
							<span class="text" :class="{active: active === 'account'}">Account settiogs</span>
						</button>
						<button class="menu-item" @click="active = 'fun'">
							<span class="line" :class="{active: active === 'fun'}"></span>
							<span class="text" :class="{active: active === 'fun'}">FUN</span>
						</button>
						<button class="menu-item" @click="active = 'about'">
							<span class="line" :class="{active: active === 'about'}"></span>
							<span class="text" :class="{active: active === 'about'}">About battle</span>
						</button>
						<button class="menu-item" @click="active = 'tournaments'">
							<span class="line" :class="{active: active === 'tournaments'}"></span>
							<span class="text" :class="{active: active === 'tournaments'}">Tournaments</span>
						</button>
					</div>
					<div class="switched">
						<general v-if="active === 'general'"></general>
						<withdrawing v-if="active === 'withdrawing'"></withdrawing>
						<deposit v-if="active === 'deposit'" ></deposit>
						<account v-if="active === 'account'" ></account>
						<fun v-if="active === 'fun'"></fun>
						<about v-if="active === 'about'"></about>
						<tournaments v-if="active === 'tournaments'"></tournaments>
					</div>
				</div>
			</div>
		</div>
		<publicFooter></publicFooter>
	</div>
</template>	
<script>
import publicHeader from './shared/publicHeader.vue'
import publicFooter from './shared/publicFooter.vue'
import general from './publicFaq/general.vue'
import withdrawing from './publicFaq/withdrawing.vue'
import deposit from './publicFaq/deposit.vue'
import account from './publicFaq/account.vue'
import fun from './publicFaq/fun.vue'
import about from './publicFaq/about.vue'
import tournaments from './publicFaq/tournaments.vue'

export default {
	data(){
		return{
			active: 'general',
			// generalCount: 0,
			// withdrawingCount: 0,
			// depositCount: 0,
			// accountCount: 0,
			// funCount: 0,
			// cstCount: 0,
			// aboutCount: 0,
			// tournamentsCount: 0,
		}
	},
	components: {  
		publicHeader,
		withdrawing,
		deposit,
		general,
		account,
		fun,
		about,
		tournaments,
		publicFooter,
	},
}
</script>
<style scoped>
.component-wrap-title{
	color: #fff;
	font-size: 24px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	margin: 0 0 40px 0;
}
.count{
	color: #fff;
	background-color: #6a68ff;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 35px;
	height: 25px;
	border-radius: 3px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	font-size: 14;
}
.switched{
	margin: 0 0 0 100px;
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
	border: none;
	background-color: transparent;
	outline: none;
	padding: 0;
	margin: 0 0 30px 0 ;
	cursor: pointer;
}
.line{
	height: 2px;
	display: block;
	width: 15px;
	background-color: #6a68ff;
	opacity: 0;
}
.line.active{
	opacity: 	1;
}
.text{
	font-size: 18px;
	font-family: 	HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	color: #fff;
	padding: 0 0 0 10px;
	height: 100%;
	text-align: left;
}
.text.active{
	color: #6a68ff;
}
.menu{
	/*padding: 40px 0 0 0;*/
	/*background-color: #151a1f;*/
	max-width: 295px;
	width: 100%;
}
.content {
	max-width: 1202px;
	width: 100%;
	margin: 0 auto;
	padding: 0 10px;
}
.row{
	display: flex;
	padding: 0 0 120px;
}
.com{
	width: 100%;
	background-color: #212429;
}
.title{
	width: 100%;
	color: #6968ff;
	/*	margin: 0 0 30px 0;*/
	font-family: HelveticaNeueCyr-Black, HelveticaNeueCyr;
	font-size: 52px;
	font-weight: 900;
	margin: 65px 0  ;
}
.component-wrap{
	display: flex;
}
</style>