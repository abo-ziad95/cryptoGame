<template>
	<div class="com">
		<div class="title-wrap">
			<div class="title">
				My transaction
			</div>
			<div class="title-btns">
				<button class="title-btn" @click="sort('ALL')" :class="{active: activeBtn === 'ALL'}">All</button>
				<button class="title-btn" @click="sort('BUY')" :class="{active: activeBtn === 'BUY'}">Buy</button>
				<button class="title-btn" @click="sort('SELL')" :class="{active: activeBtn === 'SELL'}">Sell</button>
			</div>
		</div>
		<div class="list">
			<div class="currencies-item-empty" v-if="transactionsArr === null">
				Empty
			</div>
			<div class="list-item" v-for=" item in transactionsArr">
				<div class="list-item-col-ft">
					<div class="name">
						{{item.currency}}
					</div>
					<div class="val">
						Value
					</div>
					<div class="num">
						{{item.quantity}}
					</div>
				</div>
				<div class="list-item-col-sc">
					<div class="name operetion" :class="{'green': checkOperation(item.sellBuy) === 'BUY'}">
						{{ checkOperation(item.sellBuy) }}
					</div>
					<div class="val">
						Price
					</div>
					<div class="num">
						{{item.currencyPrice}}
					</div>
				</div>
				<div class="list-item-col-th">
					<div class="time name">
						22:00
					</div>
					<div class="val">
						% portfolio
					</div>
					<div class="num">
						13.22
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			transactionsArr: null,
			activeBtn: 'ALL'
		}
	},
	methods: {
		sort(option){
			let newTransactionsArr = []
			option === '' || option === undefined ? option = this.activeBtn : this.activeBtn = option
			if(option === 'ALL'){
				this.transactionsArr = this.$store.getters.transactions
			}
			if(option === 'BUY'){
				this.transactionsArr = this.$store.getters.transactions
				newTransactionsArr = this.transactionsArr.filter((el) => {
					if(el.sellBuy === 1) return el;
					else return ''
				})
				this.transactionsArr = newTransactionsArr
			}
			if(option === 'SELL'){
				this.transactionsArr = this.$store.getters.transactions
				newTransactionsArr = this.transactionsArr.filter((el) => {
					if(el.sellBuy === 0) return el;
					else return ''
				})
				this.transactionsArr = newTransactionsArr
			}
		},
		checkOperation(num){
			let txt = ''
			num === 0 ? txt = 'SELL' : txt = 'BUY'
			return txt
		}
	},
	computed: {
		transactions: {
			get() {
				return this.$store.getters.transactions
			},
			set(newValue) {
				this.transactionsArr = newValue
			}
		},
	},
	watch: {
		transactions(arr){
			this.sort()
		}
	},
	mounted(){
		if(this.$store.getters.transactions != undefined){
			console.log(this.$store.getters.transactions)
			this.transactionsArr = this.$store.getters.transactions
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
.num{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.val{
	color: #666;
	padding: 0 0 10px 0;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 14px;
}
.name{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	padding: 0 0 15px 0;
}
.name.operetion.green{
	color: #53dd2b;
}
.name.operetion {
	color: red;
}
.list{
	overflow-y: scroll; 
	max-height: 445px;
	height: 100%;
	position: relative;
	padding: 0 0 40px;
}
.list::-webkit-scrollbar {
	width: 5px;
	height: 5px;
	position: absolute;
	right: 0;
	top: 0;
}
/* Handle */
.list::-webkit-scrollbar-thumb {
	background: #6a68ff; 
	border-radius: 5px;
}
.list-item{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 0px;
	margin: 0 25px 0 0;
	border-bottom: 1px solid #666;
}
.list-item-col-ft{
	width: 40%;
}
.list-item-col-sc, .list-item-col-th{
	width: 30%;
}
.com{
	width: 100%;
	background-color: #151a1f;
	padding: 40px 0px 30px 40px;
	max-width: 425px;
	max-height: 620px;
	height: 100%;
	position: relative;
}
.title-wrap{
	display: flex;
	justify-content: space-between;
	padding: 0 35px 0 0;
	margin: 0 0 30px 0; 
}
.title{
	font-size: 22px ;
	font-family: Gotham-Bold;
	color: #fff;
}
.title-btns{
	display: flex;
	align-items: center;

}
.title-btn{
	cursor: pointer;
	background-color: transparent;
	color: #666666;
	margin: 0 0px 0 10px;
	border: none;
	outline: none;
	padding: 0;
}
.title-btn.active{
	color: #fff;
}
</style>