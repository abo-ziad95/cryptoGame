<template>
	<div class="com">
		<app-header></app-header>
		<div class="row">
			<app-Aside></app-Aside>
			<div class="trades">
				<div class="title-wrap">
					<div class="title">
						Traders online
					</div>
					<div class="seach">
						<input type="text" class="seach-input">
						<button class="seach-btn"><img src="../images/trades/search-icon.png" alt="#"></button>	
					</div>
				</div>
				<div class="trades-wrap">
					<div class="trades-info">
						<div class="trades-info-desc-img"></div>
						<div class="trades-info-desc-date">Date registered</div>
						<div class="trades-info-desc-rating">Rating</div>
						<div class="trades-info-desc-total">Total battles</div>
						<div class="trades-info-desc-winrait">Winrait</div>
						<div class="trades-info-desc-btn"></div>
					</div>
					<div class="trades-items" v-for="item in paginatedData">
						<div class="trades-item-img">
							<img src="../images/photo1.png" alt="#" class="trades-item-img-img">
							<div class="trades-item-img-txt">
								{{item.firstName}}
								<span class="trades-item-img-txt-span"><img src="../images/ukr.png" alt="#"> {{item.country}}</span>
							</div>
						</div>
						<div class="trades-item-date">
							{{ getDateRegister(item.dateRegistered) }}
						</div>
						<div class="trades-item-rating">
							{{item.rating}}
						</div>
						<div class="trades-item-total">
							{{ item.totalGames }}
						</div>
						<div class="trades-item-winrait">
							{{item.winRate / item.totalGames * 100 }}
						</div>
						<div class="trades-item-btn">
							<button class="trades-item-btn-link">Game invite</button>
						</div>
					</div>
				</div>
				<div class="dashboard-mode-items-bts">
					<button @click="prevPage" :disabled="pageNumber === 0">
						<img src="../images/prevArrow.png" alt="#">
					</button>
					<div class="dashboard-mode-items-bts-counter" >
						<span class="dashboard-mode-items-bts-counter-span" 
						@click="changePage(value)" 
						v-for="(value) in pageCountNum" 
						:class="{active: value === pageNumber + 1 }">{{value}}</span>
					</div>
					<button @click="nextPage" :disabled="pageNumber >= pageCount -1">
						<img src="../images/nextArrow.png" alt="#">
					</button>
				</div>
			</div>
		</div>
		<app-footer></app-footer>
	</div>
</template>	
<script>
import svg1x1Game from './svgIcones/svg1x1_icon.vue'
import svgTournament from './svgIcones/svgTournament_icn.vue'
import Header from './shared/header.vue'
import Aside from './shared/aside.vue'
import Footer from './shared/footer.vue'
import axios from 'axios'

export default {
	data(){
		return{
			activeBtn: 'btn1',
			pageNumber: 0,
			pageCountNum: 0,
			listData: {}
		}
	},
	components: {
		svg1x1Game,    
		appAside: Aside,
		appFooter: Footer,
		appHeader: Header,
		svgTournament
	},
	methods: {
		getDateRegister(date){
			console.log(date)
			let dateArr = date.split(' ')
			return dateArr[0]
 		},
		changePage(value){
			this.pageNumber = value - 1
		},
		// getArrey(cls){
		// 	this.activeBtn = cls
		// 	return [
		// 	{'src': 'photo1.png', 'name': 'sawdq', 'game': 'dslksdsdhsikda', 'entryFee': '200', 'prizePool': '1100', 'playTime': '1 hours 45 min'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	]
		// },
		nextPage(){
			this.pageNumber++;
		},
		prevPage(){
			this.pageNumber--;
		},
		getTrades(){
			let data = {token: localStorage.getItem('cryptoGameToken')}
			axios({
				url: `http://192.168.0.177:8000/api/tradersonline`,
				method: 'POST',
				data
			})
			.then(res => {
				console.log(res)
				localStorage.setItem('cryptoGameToken', res.data.token)
				this.$store.state.balanceFun = res.data.balanceFun
				this.$store.state.balanceFactual = res.data.balanceFactual
				this.listData = res.data.traders.data
			})
			.catch(err => console.log(err))
		}
	},
	computed: {
		pageCount(){
			console.log(this.listData)
			if(typeof this.listData !== 'undefined' && this.listData.length > 0){
				let l = this.listData.length,
				s = 10;
				this.pageCountNum = Math.ceil(l/s)
      // редакция переводчика спасибо комментаторам
      return Math.ceil(l/s);
      // оригинал
      // return Math.floor(l/s);
    }
  },
  paginatedData(){
  	if (typeof this.listData !== 'undefined' && this.listData.length > 0) {
  		const start = this.pageNumber * 10,
  		end = start + 10;
  		return this.listData.slice(start, end);
  	}
  }
},
created() {
	this.getTrades()
}
}
</script>
<style scoped>
.seach{
	max-width: 252px;
	width: 100%;
	position: relative;
}
.seach-btn{
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	width: 50px;
	height: 100%;
	align-items: center;
	background-color: transparent;
	border: none;
	outline: none	
}
.seach-input{
	width: 100%;
	padding: 0 55px 0 20px;
	height: 50px;
	border: none;
	outline: none;
	font-size: 20px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	color: #fff;
	background-color: #23272a;
}
.title-wrap{
	display: flex;
	justify-content: space-between;
	margin: 0 0 25px;
	align-items: center;
}
.title{
	color: #fff;
	font-size: 30px;
	font-family:  Gotham-Bold;
}
.trades-item-btn{
	max-width: 160px;
	width: 100%;
	display: flex;
	align-items: center;
}
.trades-item-btn-link{
	color: #fff;
	background-color: #6a68ff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	border: none;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	width: 100%;
	border-radius: 40px
}
.trades-info-desc-btn{
	max-width: 160px;
	width: 100%;
}
.trades-item-img{
	max-width: 370px;
	width: 100%;
	display: flex;
	align-items: center;
}
.trades-item-img-img{
	margin: 0 20px 0 0 ;
}
.trades-item-img-txt{
	color: #fff;
	font-family:  Gotham-Bold;
	font-size: 16px;

}
.trades-item-img-txt-span{
	display: flex;
	width: 100%;
	align-items: center;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 14px;
	padding: 12px 0 0 0;
}
.trades-item-img-txt-span img{
	margin: 0 10px 0 0 ;
}
.trades-info-desc-img{
	max-width: 370px;
	width: 100%;
}
.trades-info-desc-winrait{
	max-width: 245px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.trades-item-winrait{
	max-width: 245px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.trades-info-desc-total{
	max-width: 210px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.trades-item-total{
	max-width: 210px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.trades-info-desc-rating{
	max-width: 195px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.trades-item-rating{
	max-width: 195px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.trades-wrap{
	background-color: #151a1f;
	padding: 60px 65px 0 30px;
}
.trades-info-desc-date{
	max-width: 225px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.trades-item-date{
	max-width: 225px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.trades{
	width: 100%;
	background-color: #101216;
	padding: 145px 30px 65px 30px;
}
.row{
	display: flex;
}
.com{
	width: 100%;
}
.trades-items{
	display: flex;
	border-bottom: 1px solid #202529;
	padding: 10px;
}
.trades-info{
	width: 100%;
	padding: 0 10px; 
	display: flex;
}
.dashboard-mode-items-bts-counter-span{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	cursor: pointer;
	margin: 0 5px;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	color: #666;
}
.dashboard-mode-items-bts-counter-span.active{
	color: #fff;
}
.dashboard-mode-items-bts{
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 0 20px;
	background-color: #151a1f;
	height: 60px;
}
.dashboard-mode-items-bts-counter{
	display: flex;
	align-items: center
}
.dashboard-mode-items-bts button{
	background-color: transparent;
	color: #fff;
	margin: 0 10px;
	width: 20px;
	border: none;
	outline: none
}
</style>