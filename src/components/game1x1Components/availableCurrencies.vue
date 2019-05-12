<template>
	<div class="com">
		<div class="title">
			Available currencies
		</div>
		<div class="search">
			<input type="text" class="search-input" v-model="search" @keyup="show">
			<button class="search-btn">
				<img src="../../images/game1x1/search-icon.png" alt="#" class="search-img">
			</button>
		</div>
		<div class="currencies">
			<div class="" v-for="(price, name) in symbol">
				<div class="currencies-i" v-for="(item, i) in arrSymbol" v-if="item == name">
					<div class="currencies-item">
						<div class="currencies-item-name">
							<span class="currencies-item-name-img-wrap">
								<img src="../../images/game1x1/eth.png" alt="#">
							</span>
							<div class="cur">
								<span class="currencies-item-name-name">{{name}}</span>
								<span class="currencies-item-name-price">{{price}}</span>
								<input type="number" class="cur-input" min="1" v-model="inputParams[i]">
							</div>
						</div>
						<div class="currencies-item-btn-wrap">
							<button class="currencies-item-btn" @click="buyCur(name, price, inputParams[i])">Buy</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import SocketIO from 'socket.io-client'

export default {
	data(){
		return{
			socket: null,
			symbol: {},
			results: [],
			arrSymbol: [],
			dataProperty: '',
			quantity: '',
			search: '',
			inputParams: [],
			game_name: this.$store.getters.gameName,
			walletTable: this.$store.getters.walletTable
		}
	},
	created () {
		// var channel = this.$pusher.subscribe('prices');
		// channel.bind('prices-changed', (data) => {
		// 	this.symbol = data
		// });
		this.getPusher()
	},
	mounted(){
		// setTimeout(() => this.show(), 3000)
		// console.log('mounted')
	},
	methods:{
		inputFinds(){
			// this.arrSymbol.length != 0 ? 
			// this.arrSymbol.forEach(()=> {
			// 	console.log(1)
			// 	this.findes.push({value: ''})
			// }) : null
		},
		buyCur(name, price, quantity){
			console.log(quantity)
			const data = 
			{
				'token': localStorage.getItem('cryptoGameToken'),
				'nameGame': this.$store.getters.nameGame,
				'currency': `${name}`,
				'quantity': quantity,
				'sellBuy': 1,
				'walletTable': this.$store.getters.walletTable,
				'gameUserId': this.$store.getters.gameUserId
			}
			axios({
				url: `http://192.168.0.177:8000/api/transaction`,
				method: 'POST',
				data: data,
			})
			.then((res) => {
				localStorage.setItem('cryptoGameToken', res.data.token)
				this.$store.state.balance = res.data.wallet[0].quantity
				this.$store.state.wallet = res.data.wallet
				console.log(this.$store.getters.transactions)
				console.log(this.$store.state.transactions)
				this.$store.commit('addTransaction', res.data.transaction)
				this.$store.commit('cuclMarge', res.data.opponentBalanceGame.quantity)
				this.$store.commit('addCurBuyed', name)
			})
			.catch((err) => console.log(err))
		},
		show(){
			let arrSymbol = Object.keys(this.symbol)
			var comp = this.search;
			var newSymbol = arrSymbol.filter(function (elem) {
				if(comp==='') return true;
				else return elem.toLowerCase().indexOf(comp.toLowerCase()) > -1;
			})
			this.arrSymbol = newSymbol
		},
		getPusher(){
			let _self = this
			// var channel = this.$pusher.subscribe('prices');
			// channel.bind('prices-changed', (data) => {
			// 	this.symbol = data
			// 	this.$store.commit('currency', data)

			// });
			// setTimeout(() => this.show(), 1000)
			var timer;
			var ws=new WebSocket("ws://192.168.0.177:8047/currencies");
			// ws.onopen=function() {
			// 	timer=window.setInterval(function() {
			// 		var date = new Date();
			// 		var message='ping at '+date.getSeconds();
			// 		ws.send(message);
			// 		console.log('Client sent message "'+message+'"');
			// 	}, 30000);
			// };

			ws.onmessage=function(evt) {
				// console.log(JSON.parse(evt.data))
				_self.symbol = JSON.parse(evt.data)
				_self.$store.commit('currency', JSON.parse(evt.data))
				// _self.$store.commit('symbol', JSON.parse(evt.data))
				// console.log(JSON.parse(evt.data))
			};

			// ws.onclose=function() {
			// 	console.log('Connection closed');
			// 	window.clearTimeout(timer);
			// };
		},
		// makeAnArr(){
		// 	console.log(Object.keys(this.symbol))
		// 	console.log(this.symbol)
		// 	return Object.keys(this.symbol)
		// }
	},
	computed: {
		currency: {
			get(){
				return this.$store.getters.currency
			},
			set(symbolArr){
				this.symbol = symbolArr
			}
		}
	},
	watch: {
		currency(){
			this.show()
		}
	}

}
</script>
<style scoped>
.cur-input{
	display: block;
	background-color: #23272a;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	width: 80%;
	padding: 5px;
	border: none;
	margin: 5px 0 0 0;
}
.cur{
	display: flex;
	flex-wrap: wrap;
}
.currencies-item-name-price{
	padding: 0 10px;
	font-weight: 100;
	font-size: 20px;
	letter-spacing: 1.5px
}
.currencies-item-btn{
	display: flex;
	justify-content: center;
	align-items: center;
	color:#fff;
	border: none;
	outline: none;
	cursor: pointer;
	border-radius: 40px;
	max-height: 45px;
	height: 100%;
	max-width: 100px;
	width: 100%;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	background-color: #6a68ff;
}
.currencies-item-btn-wrap{
	max-width: 100px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.currencies{
	overflow-y: scroll; 
	max-height: 445px;
	height: 100%;
	position: relative;
	padding: 0 0 40px;
}
.currencies::-webkit-scrollbar {
	width: 5px;
	height: 5px;
	position: absolute;
	right: 0;
	top: 0;
}
/* Handle */
.currencies::-webkit-scrollbar-thumb {
	background: #6a68ff; 
	border-radius: 5px;
}
.com::after{
	width: 100%;
	content: '';
	position: absolute;
	height: 50px;
	bottom: 0;
	left: 0;
	background: linear-gradient(to top, rgba(21, 26, 31,1) 0%,rgba(255,255,255,0) 100%)
}
.currencies-item-name{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	display: flex;
	align-items: center;
}
.currencies-item-name-img-wrap{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 55px;
	height: 55px;
	border: 2px solid #363875;
	border-radius: 100%;
	margin: 0 30px 0 0;
}
.currencies-item{
	padding: 11px 0 ;
	border-bottom: 1px solid #202529;
	display: flex;
	justify-content: space-between;
	margin: 0 35px 0 0;
	/*align-items: center;*/
}
.com{
	width: 100%;
	background-color: #151a1f;
	padding: 40px 0px 0 35px;
	max-width: 525px;
	max-height: 620px;
	height: 100%;
	position: relative;
}
.title{
	color: #fff;
	font-family: Gotham-Bold;
	font-size: 22px;
	margin: 0 0 30px;
	padding: 0 40px 0 0;
}
.search{
	position: relative;
	padding: 0 40px 0 0;
	margin: 0 0 30px;
}
.search-btn{
	position: absolute;
	cursor: pointer;
	right: 50px;
	top: 10px;
	background-color: transparent;
	border: none;
	outline: none;
}
.search-input{
	width: 100%;
	background-color: #23272a;
	max-height: 50px;
	border: none;
	padding: 10px 80px 10px 10px;
	font-size: 26px;
	border-radius: 3px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	color: #fff;
}
@media all and (max-width: 1440px) {
	.com{
		max-width: 360px;
		padding: 30px 0 0 20px;
	}
	.title{
		font-size: 	20px;
	}
	.search{
		padding: 0 20px 0 0;
	}
	.search-btn{
		right: 30px;
		top: 10px;
	}
	.search-input{
		padding: 10px 60px 10px 10px;
		font-size: 	22px;
	}
	.currencies-item{
		margin: 0 20px 0 0;
	}
	.currencies-item-name-img-wrap{
		margin: 0 15px 0 0;
	}
}

</style>