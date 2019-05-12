<template>
	<div class="com">
		<div class="container">
			<div class="txt">
				{{ txt }}
			</div>
			<div class="info" v-if="!ended">
				<div class="info-txt" :class="{'green': result === 1}">
					{{ gameResult() }}
				</div>
				<div class="gameBalance">
					<div class="gameBalance-item">Your balance = {{userBalanceGame}}</div>
					<div class="gameBalance-item">Oppenent balance = {{opponentBalanceGame}}</div>
				</div>
				<div class="gameResult" :class="{'green': result === 1}">
					{{userBalanceGame - opponentBalanceGame}}
				</div>
			</div>
			<button class="btn" @click="ready" v-if="ended">Ready</button>
			<button class="btn" v-if="!ended" @click="close">Close</button>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
// import VueNativeSock from 'vue-native-websocket'

export default {
	data(){
		return{
			nameGame: this.$store.state.nameGame,
			txt: this.$store.getters.message,
			ended: this.$store.getters.gameEnded,
			userBalanceGame: this.$store.getters.userBalanceGame,
			result: 0,
			opponentBalanceGame: this.$store.getters.opponentBalanceGame,
		}
	},
	methods: {
		gameResult(){
			let result = this.userBalanceGame - this.opponentBalanceGame,
					msg = ''
			result > 0 ? msg = 'You win' : msg = 'You Lost'
			msg === 'You win' ? this.result = 1 : this.result = 0
			return msg
		},
		ready(){
			// let msg = {'nameGame': this.nameGame, 'status': 'ready'}
			// this.$socket.sendObj(msg)
			// this.$options.sockets.onmessage = (data) => {
			// 	let res = JSON.parse(data.data)
			// 	console.log(res)
			// 	// if(res.status === 'start'){
			// 	// 	this.$store.commit('changecheckGame', res.nameGame)
			// 	// }
			// }
			const data = 
			{
				'token': localStorage.getItem('cryptoGameToken'),
				'nameGame': this.nameGame,
			}
			axios({
				url: `http://192.168.0.177:8000/api/startAgree`,
				method: 'POST',
				data: data,
			})
			.then((res) => {
				localStorage.setItem('cryptoGameToken', res.data.token)
				this.txt = res.data.message
			})
			.catch((err) => console.log(err))
		},
		close(){
			const data = 
			{
				'token': localStorage.getItem('cryptoGameToken'),
				'nameGame': this.nameGame,
			}
			axios({
				url: `http://192.168.0.177:8000/api/dropGame`,
				method: 'POST',
				data: data,
			})
			.then((res) => {
				localStorage.setItem('cryptoGameToken', res.data.token)
				this.$router.push({ path: `/dashboard` })
			})
			.catch((err) => console.log(err))
		},
		startGame(){
			let _self = this
			setTimeout(function(){
				const data = 
				{
					'token': localStorage.getItem('cryptoGameToken'),
					'nameGame': _self.nameGame,
				}
				axios({
					url: `http://192.168.0.177:8000/api/startGame`,
					method: 'POST',
					data: data,
				})
				.then((res) => {
					localStorage.setItem('cryptoGameToken', res.data.token)
					_self.$store.commit('changeTimeLeft', res.data.timeLeft)
					_self.txt = res.data.message
					_self.$emit('startGame', true)
				})
				.catch((err) => console.log(err))
			},3000)
		},
	},
	computed: {
		checkGame(){
			return this.$store.getters.checkGame
		},
		// message(){
		// 	return this.$store.getters.message
		// }
	},
	watch:{
		checkGame(){
			this.startGame()
		},
		// message(){
		// 	console.log(message)
		// 	console.log('message')
		// 	this.txt = this.$store.getters.message
		// }
	}
}
</script>
<style scoped>
.info{
	width: 100%;
}
.gameResult{
	font-size: 18px;
	text-align: center;
	color: red;
	font-family:  HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	margin: 0px 0 10px 0;
}
.gameResult.green {
	color: #53dd2b;
}
.gameBalance-item{
	margin: 0px 0 10px 0;
}
.gameBalance{
	color: #fff;
	font-size: 18px;
	font-family:  HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin: 0px 0 10px 0;
}
.gameBalance{
	color: #fff;
	margin: 5px 0;
}
.info-txt{
	color: red;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 20px;
	text-align: center;
	margin: 0px 0 10px 0;
}
.info-txt.green {
	color: #53dd2b;
}
.txt{
	color: #fff;
	text-align: center;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	width: 100%;
	margin: 0px 0 15px 0;
}
.container{
	background-color: #101217;
	max-width: 400px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	padding: 20px 0;
}
.com{
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	background-color: rgba(0,0,0, .5);
	display: flex;
	justify-content: center;
	align-items: center;
}
.btn{
	background-color: #6a68ff;
	color: #fff;
	height: 50px;
	max-width: 210px;
	font-size: 	16px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	border: none;
	outline: none;
	border-radius: 30px;
	cursor: pointer;
}
</style>