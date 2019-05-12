<template>
	<div class="component" id="com">
		<app-header></app-header>
		<div class="row">
			<app-Aside></app-Aside> 
			<div class="content">
				<div class="right">
					<game1x1Players :hoursProp="hours" :minutesProp="minutes" :secondesProp="secondes"></game1x1Players>		
					<div class="bottom-row">
						<availableCurrencies></availableCurrencies>
						<div class="vertical">
							<inStock></inStock>
							<div class="wrap" @click="startTimer(1000)">
								<chart></chart>
							</div>
						</div>
						<div class="left">
							<transaction></transaction>
						</div>
					</div>
				</div>
				<div class="chat">
					<chat></chat>
				</div>
				<!--&& oldNameGame === nameGameL" -->
				<modalGame @startGame="startGame($event)"  v-show="((startGameG === false) && (oldNameGame === nameGameL))"></modalGame>
			</div>
		</div>
		<app-footer></app-footer>
	</div>
</template>	
<script>
import Header from './shared/header.vue'
import Aside from './shared/aside.vue'
import Footer from './shared/footer.vue'
import Players from './game1x1Components/game1x1Players.vue'
import Available from './game1x1Components/availableCurrencies.vue'
import inStock from './game1x1Components/inStock.vue'
import Chart from './game1x1Components/chart.vue'
import transaction from './game1x1Components/transaction.vue'
import chat from './game1x1Components/chat.vue'
import modalGame from './game1x1Components/modalGame.vue'
import axios from 'axios'
// import {mapGetters} from 'vuex'

export default {
	components: {
		appAside: Aside,
		appFooter: Footer,
		appHeader: Header,
		game1x1Players: Players,
		availableCurrencies: Available,
		chat,
		modalGame,
		inStock,
		chart: Chart,
		transaction
	},
	data(){
		return{
			oldNameGame: this.$store.state.nameGameOld,
			nameGameL: this.$store.state.nameGame,
			// nameGameModal: this.$store.getters.nameGameGetters,
			walletTable: this.$store.state.walletTable,
			// start: this.getStartGame(),
			isRunning: false,
			hours: 0,
			minutes:0,
			secondes:0,
			time: this.$store.getters.timeleft,
			timer:null,
			sound:new Audio("http://s1download-universal-soundbank.com/wav/nudge.wav")
		}
	},
	methods:{
		// getTimeStart(){
		// 	return this.$store.getters.timeleft
		// },
		startGame(boolean){
			this.$store.commit('changeSatrtGame', boolean)
		},
		startTimer (time) {
			this.isRunning = true
			if (!this.timer) {
				this.timer = setInterval( () => {
					if (this.time > 0) {
						this.getTime(this.time)
						this.time--
					} else {
						clearInterval(this.timer)
						this.sound.play()
						this.endGame()
					}
				}, 1000 )
			}
		},
		getTime(time){
			let minuteOnSecounds = time / 60
			let	hoursOnSecounds = time / 3600
			let	minutes = Math.floor(minuteOnSecounds)
			let finalHours = Math.floor(hoursOnSecounds)
			let finalMinutes = Math.floor((hoursOnSecounds -  this.hours) * 60)
			let finalSecondes = Math.round((minuteOnSecounds - minutes) * 60)
			finalHours < 10 ?  finalHours = `0${finalHours}` : finalHours
			finalMinutes < 10 ?  finalMinutes = `0${finalMinutes}` : finalMinutes
			finalSecondes < 10 ?  finalSecondes = `0${finalSecondes}` : finalSecondes
			this.hours = finalHours
			this.minutes =  finalMinutes
			this.secondes = finalSecondes
		},
		endGame(){
			const data = 
			{
				'token': localStorage.getItem('cryptoGameToken'),
				'nameGame': this.nameGameL
			}
			axios({
				url: `http://192.168.0.177:8000/api/endGame`,
				method: 'POST',
				data: data,
			})
			.then((res) => {
				localStorage.setItem('cryptoGameToken', res.data.token)
				this.$store.state.userBalanceGame = res.data.userBalanceGame.quantity
				this.$store.state.opponentBalanceGame = res.data.opponentBalanceGame.quantity
				this.$store.commit('gameEnded', false)
				this.$store.commit('message', 'Game is over!')
				this.$store.commit('changeSatrtGame', false)
			})
			.catch((err) => console.log(err))
		},
		// timeLeftFn(){
		// 	return this.$store.state.timeleft
		// },
		getStartGame(){
			return this.$store.getters.startGameGetters
		},
	},
	computed:{
		// ...mapGetters([
		// 	'startGameGetters',
		// 	]),
		startGameG(){
			return this.$store.getters.startGameGetters
		},
		timeLeft(){
			return this.$store.getters.timeleft
		},
		nameGame(){
			return this.$store.getters.nameGameGetters
		},
	},
	watch:{
		startGameG(n){
			console.log(n)
		},
		timeLeft(now){
			console.log(now)
			this.time = now
			this.startTimer()
		},
		nameGame(name, old){
			this.nameGameL = name
		}

	},
	mounted(){
		console.log('mount')
		if(this.getStartGame()){
			this.startTimer(this.$store.getters.timeleft)
		}
	}
}
</script>
<style scoped>
.right{
	margin: 0 150px 0 0;
	width: 100%;
}
.left{
	max-width: 425px;
	width: 100%;
	margin: 0 0 0 30px;
}
.wrap{
	margin: 30px 0 0 0 ;
}
.content{
	background-color: #101116;
	width: 100%;
	padding: 130px 0 100px 25px;
	display: flex;
	position: relative;
}
.row{
	display: flex;
}
.bottom-row{
	display: flex;
	padding: 30px 0 0 0;
}
.component{
	width: 100%;
}
.vertical{
	max-width: 600px;
	width: 100%;
	margin: 0 0 0 30px;
}
.down{
	margin: 35px 0 0 0;
}
.chat{
	height: 100%;
	max-height: 100vh;
	padding: 100px 0 65px 0;
	position: fixed;
	right: 0;
	top: 0;
}
@media all and (max-width: 1440px) {
	.content{
		padding: 110px 0 100px 20px
	}
}
</style>