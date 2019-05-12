<template>
	<div class="com">
		<div class="row row-up">
			<div class="price-pool">
				<img src="../../images/game1x1/pricePool.png" alt="#">
				<div class="price-pool-txt">
					{{ deposit / 2}} FUN
					<span>Price pool</span>
				</div>
			</div>
			<div class="price-pool-content">
				<div class="price-pool-content-info">
					<div class="price-pool-content-info-name">
						{{ firstName }}
					</div>
					<div class="price-pool-content-info-country">
						<img src="../../images/ukr.png" alt="#" class="price-pool-content-info-country-img"> <span>Ukraine</span>
					</div>
				</div>
				<div class="price-pool-content-pic">
					<img src="../../images/profile.jpg" alt="#">
				</div>
				<div class="price-pool-content-vs">
					<img src="../../images/game1x1/vs1.png" alt="#">
				</div>
				<div class="price-pool-content-pic">
					<img src="../../images/profile.jpg" alt="#">
				</div>
				<div class="price-pool-content-info">
					<div class="price-pool-content-info-name price-pool-content-info-name-sc">
						{{oponent}}
					</div>
					<div class="price-pool-content-info-country">
						<img src="../../images/ukr.png" alt="#" class="price-pool-content-info-country-img"> <span>Ukraine</span>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="game-desc">
				<div class="game-name">
					{{ userNameGame }}
				</div>
				<div class="last-rebalance">
					<span>Last rebalance</span>
					10 nin ago
				</div>
				<div class="last-rebalance">
					<span>Balance</span>
					{{ balance }}
				</div>
				<div class="last-rebalance">
					<span>Margin</span>
					{{ marge }}
				</div>
			</div>
			<div class="game-time">
				<div class="game-time-wrap">
					<span class="game-time-wrap-time">{{hoursProp}}</span>
					<span class="game-time-wrap-txt">Hour</span>
				</div>
				<div class="game-time-wrap">
					<span class="game-time-wrap-time">{{minutesProp}}</span>
					<span class="game-time-wrap-txt">Minutes</span>
				</div>
				<div class="game-time-wrap">
					<span class="game-time-wrap-time" >{{secondesProp}}</span>
					<span class="game-time-wrap-txt">Secounds</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	props: ['hoursProp', 'minutesProp', 'secondesProp'],
	data(){
		return{
			nameGame: this.$store.state.nameGame,
			walletTable: this.$store.state.walletTable,
			socket: io("http://192.168.0.177:3000"),
			// userNameGame: this.$store.getters.userNameGame,
			gameUserId: this.$store.getters.gameUserId,
			firstName: 	this.$store.getters.firstName,
			lastName: 	this.$store.getters.lastName
			// oponent: this.$store.getters.oponent,
			// isRunning: false,
			// hours: 0,
			// minutes:0,
			// secondes:0,
			// time: this.$store.getters.timelive,
			// timer:null,
			// sound:new Audio("http://s1download-universal-soundbank.com/wav/nudge.wav")
		}
	},
	methods: {
		// start () {
		// 	this.isRunning = true
		// 	if (!this.timer) {
		// 		this.timer = setInterval( () => {
		// 			if (this.time > 0) {
		// 				this.getTime(this.time)
		// 				this.time--
		// 			} else {
		// 				clearInterval(this.timer)
		// 				this.sound.play()
		// 				this.endGame()
		// 			}
		// 		}, 1000 )
		// 	}
		// },
		// getTime(time){
		// 	let minuteOnSecounds = time / 60
		// 	let	hoursOnSecounds = time / 3600
		// 	let	minutes = Math.floor(minuteOnSecounds)
		// 	this.hours = Math.floor(hoursOnSecounds)
		// 	this.minutes = Math.floor((hoursOnSecounds -  this.hours) * 60) 
		// 	this.secondes = Math.round((minuteOnSecounds - minutes) * 60)
		// },
		// endGame(){
		// 	const data = 
		// 	{
		// 		'token': localStorage.getItem('cryptoGameToken'),
		// 		'nameGame': this.nameGame,
		// 		'walletTable': this.walletTable
		// 	}
		// 	axios({
		// 		url: `http://192.168.0.177:8000/api/endGame`,
		// 		method: 'POST',
		// 		data: data,
		// 	})
		// 	.then((res) => {
		// 		localStorage.setItem('cryptoGameToken', res.data.token)
		// 		console.log(res)
		// 	})
		// 	.catch((err) => console.log(err))
		// }
	},
	computed: {
		oponent(){
			return this.$store.getters.oponent
		},
		balance(){
			return this.$store.getters.balance
		},
		deposit(){
			return this.$store.getters.deposit * 2
		},
		marge(){
			return this.$store.getters.oponentBalance
		},		
		userNameGame(){
			return this.$store.getters.userNameGame
		},
	},
	watch: {
		// minutesProp: (num) => {
		// 	// console.log(num)
		// 	this.minutesPropP = num
		// },
		// secondesProp: (num) => {
		// 	console.log(num)
		// 	this.secondesPropP = num
		// },
	},
	created() {
		var _self = this
		this.socket.on(`game1x1.${this.nameGame}:StartGame`, function(res) {
			_self.$store.commit('changecheckGame', res)
			// res.eventCreator != this.gameUserId ? _self.$store.commit('cuclMarge', res.opponentBalanceGame) : console.log(' читай тут ne delaio')
		})
		this.socket.on(`game1x1.${this.nameGame}:MarginChange`, function(res) {
			res.eventCreator != this.gameUserId ? _self.$store.commit('cuclMarge', res.opponentBalanceGame) : console.log(' читай тут ne delaio')
		})
	}
}
</script>
<style scoped>
.game-time{
	display: flex;
	align-items: center;
}
.game-time-wrap{
	display: flex;
	flex-direction: column;
	margin: 0 30px 0 0;
}
.game-time-wrap-time{
	color: #6a68ff;
	padding: 0 0 5px 0;
	font-family:  HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-size: 30px;
	font-weight: bold;
	display: flex;
	justify-content: center;
}
.game-time-wrap-txt{
	font-size: 12px;
	color: #666;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.price-pool-content-vs img{
	max-width: 100%;
	height: auto;
}
.price-pool-content-vs{
	max-width: 175px;
	width: 100%;
}
.price-pool-content{
	margin: 0 auto;
	display: flex;
	align-items: center;
	max-height: 150px;
	height: 100%;
}
.price-pool-content-info{
	display: flex;
	flex-direction: column;
	color: #fff;
	margin: 0 15px;
}
.price-pool-content-info-name{
	font-family: Gotham-Bold;
	font-size: 16px;
	text-align: right;
}
.price-pool-content-info-country{
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 14px;
	display: flex;
	align-items: center;
	padding: 10px 0 0;
}
.price-pool-content-pic{
	width: 85px;
	height: 85px;
	border-radius: 100%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 15px;
}
.price-pool-content-pic img{
	max-width: 100%;
	height: auto;
}
.price-pool-content-info-country-img{
	padding: 0 10px 0 0;
}
.price-pool-content-info-name-sc{
	text-align: left
}
.price-pool{
	position: absolute;
	top: 30px;
	left: 35px;
	display: flex;
}
.price-pool-txt{
	padding: 0 0 0 10px;
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.price-pool-txt span{
	display: block;
	color: #666;
	padding: 10px 0 0;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.com{
	width: 100%;
	position: relative;
}
.row.row-up{
	background-color: #1a1f25;
}
.row{
	padding: 0 35px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #151a1f;
}
.game-desc{
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.game-name{
	color: #fff;
	font-family: Gotham-Bold;
	font-size: 30px;
	margin: 0 50px 0 0;
}
.last-rebalance{
	color: #fff;
	margin: 0 50px 0 0 ;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.last-rebalance span{
	display: block;
	color: #666;
	font-size: 16px;
	padding: 0 0 7px 0;
}
@media all and (max-width: 1440px) {
	.row{
		padding: 0 20px;
	}
	.price-pool{
		top: 20px;
		left: 20px;
	}
	.price-pool-txt{
		font-size: 12px;
	}
	.price-pool-content-info-country{
		font-size: 11px;
	}
	.game-name{
		font-size: 26px;
	}
	.last-rebalance span{
		font-size: 12px;
	}
	.last-rebalance{
		font-size: 16px;
	}
	.game-time-wrap-time{
		font-size: 26px;
	}
	.game-time-wrap-txt{
		font-size: 10px;
	}
}
</style>

