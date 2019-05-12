<template>
	<header class="header"  :class="{small: smallscreen}">
		<div class="row">
			<div class="header-logo">
				<a href="#" class="header-logo-link">Bat<span>tle of Traders</span></a>
			</div>
			<div class="header-create-wrap">
				<a href="#" class="header-create-wrap-link"><img src="../../images/back-icon.svg" alt="#"></a>
				<span class="header-line"></span>
				<router-link tag="button" to="/creategame" class="header-create-btn">
					Creat game
				</router-link>
				<button class="header-create-btn-game" v-for="item in myGames" @click="sendInfo(item.walletTable, item.nameGame, item.deposit)">
					<div class="header-create-btn-game-desc">{{item.userNameGame}}</div>
					<div class="header-create-btn-game-name">{{item.creator_user_firstname}}</div>
				</button>
			</div>
			<div class="header-info-wrap">
				<div class="header-info-real">
					<div class="header-info-real-info">
						<img src="../../images/b.png" alt="#">
						<span class="header-info-real-info-span">{{balanceFactual}}</span>
						<span class="header-info-real-info-span">BTC</span>
					</div>
					<div class="header-info-real-desc">
						Real money
					</div>
				</div>
				<span class="header-line"></span>
				<div class="header-info-funny">
					<div class="header-info-funny-info">
						<img src="../../images/f.png" alt="#">
						<span class="header-info-funny-info-span">{{balanceFun}}</span>
						<span class="header-info-funny-info-span">FUN</span>
					</div>
					<div class="header-info-funny-desc">
						Funny money
					</div>
				</div>
				<span class="header-line"></span>
				<div class="header-info-notification" @click="notificationShowFn()">
					<img src="../../images/nat.png" alt="#">
				</div>
				<ul class="header-notification" :class="{open: opened}">
					<span class="header-notification-title">
						Your notifications
					</span>
					<li class="header-notification-list" v-for="notification in notifications">
						<div class="header-notification-list-img-wrap" v-if="notification.src != ''">
							<img :src="notification.src" alt="#">
						</div>
						<div class="header-notification-list-info">
							<span class="header-notification-list-name"> {{ notification.creatorUserFirstName }} </span>
							<span class="header-notification-list-txt"> invite you in game </span>
							<button class="header-notification-list-btn"> {{ notification.userNameGame }} </button>
							<!-- <span class="header-notification-list-time"> {{ notification.time }} </span> -->
						</div>
					</li>
				</ul>
				<div class="header-info-profile">
					<!-- <img src="../../images/profile-photo.png" alt="#"> -->
					<button class="header-info-profile-btn">
						<img src="../../images/drop-down.svg" alt="#">
					</button>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
import axios from 'axios'


export default {
	data(){
		return{
			smallscreen: false,
			opened: false,
			notifications: [
			// {'src': '../../../images/photo1.png', 'name': 'Trading', 'txt': 'invite you in game', 'link': 'GoGonigga', 'time': '10 min ago'},
			// {'src': '', 'name': 'Trading', 'txt': 'invite you in game', 'link': 'GoGonigga', 'time': '10 min ago'},
			]
		}
	},
	created(){
		this.$route.path === '/game1x1' ? this.changeMenu(true) : this.changeMenu(false)
	},
	methods: {
		setIntervalFn(){
			let _self = this
			let intervalRequsest = setInterval(function(){
				if (_self.opened === true) {
					console.log(true)
					let data = {token: localStorage.getItem('cryptoGameToken')}
					axios({
						url: `http://192.168.0.177:8000/api/invitedgames`,
						method: 'POST',
						data
					})
					.then(res => {
						_self.notifications = res.data.invitedGames
					})
					.catch(err => console.log(err))
				}else{
					console.log(false)

					clearInterval(intervalRequsest)
				}
			}, 5000)
		},
		notificationShowFn(){
			this.opened = !this.opened
			this.setIntervalFn()
		},
		changeMenu(boolean){
			this.smallscreen = boolean
		},
		sendInfo(wallet, name, deposit){
			// this.$store.state.gameName = name
			// this.$store.state.walletTable = wallet
			// this.$router.push({ path: `game1x1` })
			let data = {nameGame: name,walletTable: wallet, token: localStorage.getItem('cryptoGameToken')}
			axios({
				url: `http://192.168.0.177:8000/api/joingame`,
				method: 'POST',
				data: data,
			})
			.then((res) => {
				// this.$store.commit('changeSatrtGame', null)
				localStorage.setItem('cryptoGameToken', res.data.token)
				res.data.gameStatus === 3 ? this.$store.commit('changeSatrtGame', true) : this.$store.commit('changeSatrtGame', false)
				this.$store.state.deposit = res.data.deposit
				this.$store.state.oponentBalance = 0
				this.$store.state.oponent = res.data.opponent.firstName
				this.$store.state.nameGame = res.data.nameGame
				this.$store.state.walletTable = res.data.walletTable
				this.$store.state.nameGameOld = res.data.nameGame
				// this.$store.state.gameUserId = res.data.gameUserId
				res.data.transactions === undefined ? this.$store.state.transactions = [] : this.$store.state.transactions = res.data.transactions
				this.$store.state.wallet = res.data.wallet
				this.$store.state.balance = res.data.wallet[0].quantity
				this.$store.state.balanceFun = res.data.balanceFun
				this.$store.state.balanceFactual = res.data.balanceFactual
				// this.$store.state.timelive = res.data.timelive
				this.$store.state.userNameGame = res.data.userNameGame
				if(res.data.timeLeft != null){
					this.$store.state.timeleft = res.data.timeLeft
				}
				if(res.data.timeLeft === null){
					this.$store.state.nameGameOld = res.data.nameGame
				}
				this.$store.commit('nameGame', res.data.nameGame)
				this.$store.commit('message', 'Are you Ready?')
				this.$store.commit('gameEnded', true)
				this.$store.commit('gameUserId', res.data.gameUserId)
				this.$store.commit('culcLiveTime', res.data.timelive)
				this.$router.push({ path: `/dashboard` })
				setTimeout(() => {
					this.$router.push({ path: `${res.data.link}` })
				}, 10)
			})
			.catch((err) => console.log(err))
		},
	},
	computed: {
		myGames(){
			return this.$store.getters.currentGames
		},
		balanceFun(){
			return this.$store.getters.balanceFun
		},
		balanceFactual(){
			return this.$store.getters.balanceFactual
		},
	}
}
</script>
<style scoped>
.header-info-notification{
	cursor: pointer;
}
.header-notification-list-time{
	display: block;
	width: 100%;
	font-family: 	HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	color: #a2a4ac;
	font-size: 	16px;
	margin: 5px 0 0 0;
}
.header-notification-title{
	color: #000;
	font-size: 	18px;
	font-family: 	HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: 	bold;
	margin: 0 0 20px 0;
	display: flex;
}
.header-notification-list{
	display: flex;
	align-items: center;
	padding: 15px 20px;
	background-color: #f4f4ff; 
	margin: 0 0 10px 0;
}
.header-notification-list-img-wrap{
	margin: 0 10px 0 0;
}
.header-notification-list-info{
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}
.header-notification-list-name{
	font-size: 16px;
	font-family: 	HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: 	bold;
}
.header-notification-list-txt{
	font-size: 	16px;
	padding: 0 3px;
	font-family: 	HelveticaNeueCyr-Medium, HelveticaNeueCyr;
}
.header-notification-list-btn{
	background-color: transparent;
	border-bottom: 1px solid #000;
	border-right: none;
	border-left: none;
	border-top: none;
	font-size: 	16px;
	outline: none;
	cursor: pointer;
	font-family: 	HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	font-weight: 500;
	padding: 0;
}
.header-notification{
	background-color: #fff;
	padding: 30px 20px;
	position: absolute;
	top: 85px;
	right: 0;
	max-width: 475px;
	width: 100%;
	border-radius: 5px;
	display: none;
}
.header-notification.open{
	display: block;
}
.header{
	background-color: #1a1f25;
	padding: 15px 30px;
	width: 100%;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 100;
}
.header.small{
	padding: 15px 30px 15px 0;
}

.row{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.header-logo{
	max-width: 348px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.header.small .header-logo{
	max-width: 130px;
}
.header-logo-link{
	color: #fff;
	font-size: 23px;
}
.header.small .header-logo-link{
	text-align: center;
}
.header.small .header-logo-link span{
	display: none;
}
.header.small .header-create-wrap-link{
	padding: 0 40px;
}
.header-create-wrap{
	/*max-width: 348px;*/
	width: 100%;
	display: flex;
	align-items: center;
	/*justify-content: space-between;*/
}
.header.small .header-create-wrap{
	justify-content: flex-start;
	max-width: 100%;
}
.header-create-wrap-link{
	margin: 0 0px 0 30px;
}
.header-create-btn-game{
	cursor: pointer;
	display: flex;
	flex-wrap: wrap;
	background-color: #33383d;
	color: #fff;
	height: 60px;
	border: 1px solid #878a8d;
	border-radius: 5px;
	margin: 0 10px 0 0;
	max-width: 190px;
	width: 100%;
	padding: 0 19px 0;
}
.header-create-btn-game .header-create-btn-game-desc{
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-size: 18px;
	width: 100%;
	-ms-text-align-last: auto;
	text-align: left;
}
.header-create-btn-game .header-create-btn-game-name{
	color: #6968ff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;

}
.header-info-wrap{
	margin: 0 0 0 auto;
	max-width: 550px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
}
.header-info-profile{
	display: flex;
	align-items: center;
}
.header-line{
	width: 1px;
	background-color: #272c31;
	height: 70px;
	margin: 0 10px 0;
}
.header.small .header-line{
	margin: 0 30px 0 0;
}
.header-create-btn{
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	color: #fff;
	max-width: 255px;
	width: 100%;
	height: 57px;
	max-height: 57px;
	background-color: #6a68ff;
	border: none;
	outline: none;
	cursor: pointer;
	margin: 0 10px 0 0;
}
.header.small .header-create-btn{
	margin: 0 20px 0 0;
}
.header-info-profile-btn{
	background-color: transparent;
	border: none;
	outline: none;
	cursor: pointer;
}
.header-info-real-info{
	font-weight: 	bold;
	display: flex;
	align-items: center;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-size: 30px;
}
.header-info-funny-info{
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-size: 30px;
	font-weight: bold;
	display: flex;
	align-items: center;
}
.header-info-real-desc, .header-info-funny-desc, .header-info-funny-info-span, .header-info-real-info-span{
	color: #fff;
}
.header-info-funny-desc{
	display: flex;
	justify-content: flex-end;
	color: #666;
	letter-spacing: .5px;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	padding: 5px 0 0;
}
.header-info-funny-info-span{
	padding: 0 0 0 10px;
}
.header-info-funny-info-span{
	padding: 0 0  0 10px;
}
.header-info-real-desc{
	color: #666666;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 18px;
	letter-spacing: .5px;
	padding: 5px 0 0;
}
.header-info-real-info-span{
	padding: 0 0 0 10px;
}
@media all and (max-width: 1440px) {
	.header{
		padding: 10px 15px;
	}
	.header-logo{
		max-width: 280px;
	}
	.header-create-wrap-link{
		margin: 0;
	}
	.header-create-btn{
		max-width: 200px;
		font-size: 14px;
		height: 50px;
	}
	.header-info-wrap{
		max-width: 400px;
	}
	.header-info-wrap{
		font-size: 24px;
	}
	.header-info-real-info{
		font-size: 	24px;
	}
	.header-info-real-desc{
		font-size: 	14px;
	}
	.header-info-funny-info{
		font-size: 	24px;
	}
	.header-info-funny-desc{
		font-size: 	14px;
	}
	.header-line{
		height: 60px;
	}
	.aside-info-photo{
		margin: 0 auto 25px;
	}
	.aside-menu{
		margin: 60px 0 0 ;
	}
	.header-notification{
		top: 70px;
	}
}
</style>