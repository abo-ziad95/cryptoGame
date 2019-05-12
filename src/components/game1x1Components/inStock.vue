<template>
	<div class="com">
		<div class="title-wrap">
			<div class="title">
				Currencies in stock
			</div>
			<div class="procent" :class="{'green': totalProfit > 0}">
				{{totalProfit}}%
			</div>
		</div>
		<div class="currencies-wrap" v-if="arrLenght > 1">
			<span class="value">
				value
			</span>
<!-- 			<span class="procent-mark">
				%
			</span> -->
		</div>
		<div class="currencies-items">
			<div class="currencies-item-empty" v-if="arrLenght <= 1">
				Empty
			</div>
			<div class="currencies-item"	v-for="(item, i) in wallet" v-if="i > 0">
				<div class="currencies-name">
					{{item.currency}}
				</div>
				<div class="currencies-value val">
					{{item.quantity}}
				</div>
<!-- 				<div class="currencies-value">
					13.24
				</div> -->
				<div class="currencies-value">
					{{ ((currency[item.currency] / item.currency_price - 1) * 100).toFixed(3) }}%
				</div>
				<div class="currencies-sell">
					<button class="currencies-sell-btn" @click="sellCur(item.currency)">
						Sell
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'

export default {
	data(){
		return{
			nameGame: this.$store.state.nameGame,
			walletTable: this.$store.state.walletTable,
			arrLenght: 0,
			totalProfit: 0,
			walletArr: {}
		}
	},
	methods:{
		pushToArr(cur, price){
			console.log(cur)
			console.log(price)
		},
		sellCur(name){
			const data = 
			{
				'token': localStorage.getItem('cryptoGameToken'),
				'nameGame': this.$store.getters.nameGame,
				'currency': `${name}`,
				'quantity': 1,
				'sellBuy': 0,
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
				this.$store.commit('addTransaction', res.data.transaction)
				this.$store.commit('cuclMarge', res.data.opponentBalanceGame.quantity)
			})
			.catch((err) => console.log(err))
		},
		totalProfitFn(arr, quantity){
			let count = 0
			arr.forEach((num) => {
				count = (count + Number(num))
			})
			count === 0 ? this.totalProfit = 0 : this.totalProfit = (count / quantity).toFixed(3)
		}
	},
	computed: {
		wallet(){
			this.arrLenght = this.$store.getters.wallet.length
			this.walletArr = this.$store.getters.wallet
			return this.$store.getters.wallet
		},
		currency(){
			return this.$store.getters.currency
		},
	},
	watch: {
		currency(n){
			let walletArr = this.walletArr,
					quantity = 0,
					finalObj = []
			walletArr.forEach((item) => {
				if(n[item.currency] != undefined){
					quantity += item.quantity * n[item.currency]
					finalObj.push(((n[item.currency] / item.currency_price - 1) * 100) * item.quantity * item.currency_price) 
				}
			})
			this.totalProfitFn(finalObj, quantity)
		}
	}
}

</script>
<style scoped>
.currencies-item-empty{
	background-color: rgba(255, 51, 51, .2);
	color:red;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.currencies-items{
	overflow-y: scroll;
	max-height: 185px;
	height: 100%;
	padding: 0 -30px 0 0 ;
}
.currencies-items::-webkit-scrollbar {
	width: 5px;
	height: 5px;
	position: absolute;
	right: 0;
	top: 0;
}
/* Handle */
.currencies-items::-webkit-scrollbar-thumb {
	background: #6a68ff; 
	border-radius: 5px;
}
.value{
	margin: 0 0 0 20%;
	width: 30%;
}
.procent{
	font-size: 24px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	color: red;
}
.procent.green{
	color: #53dd2b;
}

.com{
	background-color: #151a1f;
	padding: 40px 0px 40px 35px;
	max-width: 600px;
	width: 100%;
	position: relative;
}
.title-wrap{
	padding: 0 40px 30px 0;
	display: flex;
	justify-content: space-between;
}
.title{
	color: #fff;
	font-size: 22px;
	font-family: Gotham-Bold;
}
.currencies-wrap{
	display: flex;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 16px;
	color: #4a4c4e;
	padding: 0 40px 0  0;
}
.currencies-item{
	display: flex;
	padding: 30px 35px 0 0;
}
.currencies-name{
	color: #fff;
	font-size: 16px;
	font-family: Gotham-Bold;
	width: 20%;
}
.currencies-value{
	width: 20%;
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.currencies-value.val{
	width: 30%;
}
.currencies-value.green{
	color: #53dd2b;
}
.currencies-value.green{
	color: #ff2222;
}
.currencies-sell{
	width: 10%;
}
.currencies-sell-btn{
	border: none;
	background-color: transparent;
	color: #fff;
	border-bottom: 1px solid #fff;
	outline: none;
	padding: 0;
	cursor: pointer;
	margin: 0 0 0 auto;
	display: block;
}
</style>