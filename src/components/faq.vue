<template>
	<div class="com">
		<app-header></app-header>
		<div class="row">
			<app-Aside></app-Aside> 
			<div class="content">
				<div class="title">	
					FAQ
				</div>
				<div class="component-wrap">	
					<div class="menu">	
						<button class="menu-item" @click="active = 'general'">
							<span class="line" :class="{active: active === 'general'}"></span>
							<span class="text" :class="{active: active === 'general'}">General questions</span>
							<span class="count">{{generalCount}}</span>
						</button>
						<button class="menu-item" @click="active = 'withdrawing'">
							<span class="line" :class="{active: active === 'withdrawing'}"></span>
							<span class="text" :class="{active: active === 'withdrawing'}">Withdrawing funds</span>
							<span class="count">{{withdrawingCount}}</span>
							
						</button>
						<button class="menu-item" @click="active = 'deposit'">
							<span class="line" :class="{active: active === 'deposit'}"></span>
							<span class="text" :class="{active: active === 'deposit'}">Deposit funds</span>
							<span class="count">{{depositCount}}</span>
							
						</button>
						<button class="menu-item" @click="active = 'account'">
							<span class="line" :class="{active: active === 'account'}"></span>
							<span class="text" :class="{active: active === 'account'}">Account settiogs</span>
							<span class="count">{{accountCount}}</span>
						</button>
						<button class="menu-item" @click="active = 'fun'">
							<span class="line" :class="{active: active === 'fun'}"></span>
							<span class="text" :class="{active: active === 'fun'}">FUN</span>
							<span class="count">{{funCount}}</span>
						</button>
						<button class="menu-item" @click="active = 'cst'">
							<span class="line" :class="{active: active === 'cst'}"></span>
							<span class="text" :class="{active: active === 'cst'}">CST</span>
							<span class="count">{{cstCount}}</span>
						</button>
						<button class="menu-item" @click="active = 'about'">
							<span class="line" :class="{active: active === 'about'}"></span>
							<span class="text" :class="{active: active === 'about'}">About battle</span>
							<span class="count">{{aboutCount}}</span>
						</button>
						<button class="menu-item" @click="active = 'tournaments'">
							<span class="line" :class="{active: active === 'tournaments'}"></span>
							<span class="text" :class="{active: active === 'tournaments'}">Tournaments</span>
							<span class="count">{{tournamentsCount}}</span>
						</button>
					</div>
					<div class="switched">	
						<general v-if="active === 'general'" @questionsCount="generalCount = $event"></general>
						<withdrawing v-if="active === 'withdrawing'" @questionsCount="withdrawingCount = $event"></withdrawing>
						<deposit v-if="active === 'deposit'" @questionsCount="depositCount = $event"></deposit>
						<account v-if="active === 'account'" @questionsCount="accountCount = $event"></account>
						<fun v-if="active === 'fun'" @questionsCount="funCount = $event"></fun>
						<cst v-if="active === 'cst'" @questionsCount="cstCount = $event"></cst>
						<about v-if="active === 'about'" @questionsCount="aboutCount = $event"></about>
						<tournaments v-if="active === 'tournaments'" @questionsCount="tournamentsCount = $event"></tournaments>
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
import general from './faq/general.vue'
import withdrawing from './faq/withdrawing.vue'
import deposit from './faq/deposit.vue'
import account from './faq/account.vue'
import fun from './faq/fun.vue'
import cst from './faq/cst.vue'
import about from './faq/about.vue'
import tournaments from './faq/tournaments.vue'
export default {
	data(){
		return{
			active: 'general',
			generalCount: 0,
			withdrawingCount: 0,
			depositCount: 0,
			accountCount: 0,
			funCount: 0,
			cstCount: 0,
			aboutCount: 0,
			tournamentsCount: 0,
		}
	},
	components: {  
		withdrawing,
		deposit,
		general,
		account,
		fun,
		cst,
		about,
		tournaments,
		appAside: Aside,
		appFooter: Footer,
		appHeader: Header,
	},
}
</script>
<style scoped>
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
	max-width: 475px;
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
}
@media all and (max-width: 1440px) {
	.content{
		padding: 110px 20px 100px 20px;
	}
	.title{
		font-size: 24px;
	}
	.menu{
		max-width: 265px;
	}
	.text{
		font-size: 14px;
		padding: 0  0 0 25px;
	}
	.switched{
		margin: 0 0 0 20px;
	}
}
</style>