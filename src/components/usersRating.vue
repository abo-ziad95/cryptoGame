<template>
	<div class="com">
		<app-header></app-header>
		<div class="row">
			<app-Aside></app-Aside>
			<div class="rating">
				<div class="title-wrap">
					<div class="title">
						<span class="title-txt">Users rating</span>
					</div>
					<div class="seach">
						<input type="text" class="seach-input">
						<button class="seach-btn"><img src="../images/trades/search-icon.png" alt="#"></button>	
					</div>
				</div>
				<div class="rating-wrap">
					<div class="rating-info">
						<div class="rating-info-desc-img"></div>
						<div class="rating-info-desc-date">Date registered</div>
						<div class="rating-info-desc-rating">Rating</div>
						<div class="rating-info-desc-total">Total battles</div>
						<div class="rating-info-desc-winrait">Winrait</div>
						<div class="rating-info-desc-btn"></div>
					</div>
					<div class="rating-items static" >
						<div class="place">
							<div class="place-id"></div>
						</div>
						<div class="rating-item-img">
							<img src="../images/photo1.png" alt="#" class="rating-item-img-img">
							<div class="rating-item-img-txt">
								{{user.firstName}}
								<span class="rating-item-img-txt-span"><img src="../images/ukr.png" alt="#"> {{user.country}}</span>
							</div>
						</div>
<!-- 						<div class="state">
							<span class="online-wrap"></span>
							<span class="online-txt">Online</span>
						</div> -->
						<div class="rating-item-date">
							{{getDateRegister(user.dateRegistered)}}
						</div>
						<div class="rating-item-rating">
							{{user.rating}}
						</div>
						<div class="rating-item-total">
							{{ user.totalGames }}
						</div>
						<div class="rating-item-winrait">
							{{ getWinRate(user.winGames ,user.totalGames) }}%
						</div>
						<div class="rating-item-btn">
						</div>
					</div>
					<div class="rating-items" v-for="(item, i) in paginatedData" >
						<div class="place">
							<div class="place-id" :class="{gold: i <= 3}">{{i + 1}}</div>
						</div>
						<div class="rating-item-img">
							<img src="../images/photo1.png" alt="#" class="rating-item-img-img">
							<div class="rating-item-img-txt">
								{{ item.firstName }}
								<span class="rating-item-img-txt-span"><img src="../images/ukr.png" alt="#"> {{ item.country }}</span>
							</div>
						</div>
<!-- 						<div class="state">
							<span class="online-wrap"></span>
							<span class="online-txt">Online</span>
						</div> -->
						<div class="rating-item-date">
							{{ getDateRegister(item.dateRegistered) }}
						</div>
						<div class="rating-item-rating">
							{{ item.rating }}
						</div>
						<div class="rating-item-total">
							{{ item.totalGames }}
						</div>
						<div class="rating-item-winrait">
							{{ getWinRate(item.winGames ,item.totalGames) }}%
						</div>
						<div class="rating-item-btn">
							<button class="rating-item-btn-link" @click="gameInvite(item.inviteToken)">Game invite</button>
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
			listData: [],
			user: []
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
		gameInvite(token){
			this.$store.commit('changeInviteToken', token)
			this.$router.push({ path: '/creategame' })
		},
		getWinRate(win, total){
			let data = 0
			Number(win) === 0 &&  Number(total) === 0 ?  data = 0 :  data = Number(win) / Number(total) * 100
			return data.toFixed(2)
		},
		getDateRegister(date){
			if(date != undefined){
				let data = date.split(' ')
				return data[0]
			}
		},
		changePage(value){
			this.pageNumber = value - 1
		},
		// getArrey(cls){
		// 	this.activeBtn = cls
		// 	return [
		// 	{'src': 'photo1.png', 'name': 'sawdq', 'game': 'dslksdsdhsikda', 'entryFee': '200', 'prizePool': '1100', 'playTime': '1 hours 45 min'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	]
		// },
		nextPage(){
			this.pageNumber++;
			console.log(this.pageNumber)
		},
		prevPage(){
			this.pageNumber--;
		}
	},
	computed: {
		pageCount(){
			let l = this.listData.length,
			s = 6;
			this.pageCountNum = Math.ceil(l/s)
      // редакция переводчика спасибо комментаторам
      return Math.ceil(l/s);
      // оригинал
      // return Math.floor(l/s);
    },
    paginatedData(){
    	const start = this.pageNumber * 6,
    	end = start + 6;
    	return this.listData.slice(start, end);
    }
  },
  created(){
  	let data = {token: localStorage.getItem('cryptoGameToken')}
  	axios({
  		url: `http://192.168.0.177:8000/api/userrating`,
  		method: 'POST',
  		data
  	})
  	.then((res) =>{
  		console.log(res)
  		localStorage.setItem('cryptoGameToken', res.data.token)
  		this.listData = res.data.traders.data
  		this.user = res.data.trader
  	})
  	.catch((err) =>{
  		console.log(err)
  	})
  }
}
</script>
<style scoped>
.place{
	max-width: 50px;
	margin: 0 20px 0 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.place-id{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.place-id.gold{
	color: #ffd600
}
.state{
	max-width: 140px;
	width: 100%;
	display: flex;
	align-items: center;
}
.online-wrap{
	width: 5px;
	height: 5px;
	display: block;
	margin: 0 15px 0 0;
	background-color: #4cc02d;
	border-radius: 100%;
}
.online-txt{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
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
.rating-item-btn{
	max-width: 160px;
	width: 100%;
	display: flex;
	align-items: center;
}
.rating-item-btn-link{
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
.rating-info-desc-btn{
	max-width: 160px;
	width: 100%;
}
.rating-item-img{
	max-width: 390px;
	width: 100%;
	display: flex;
	align-items: center;
}
.rating-item-img-img{
	margin: 0 20px 0 0 ;
}
.rating-item-img-txt{
	color: #fff;
	font-family:  Gotham-Bold;
	font-size: 16px;

}
.rating-item-img-txt-span{
	display: flex;
	width: 100%;
	align-items: center;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 14px;
	padding: 12px 0 0 0;
}
.rating-item-img-txt-span img{
	margin: 0 10px 0 0 ;
}
.rating-info-desc-img{
	max-width: 420px;
	width: 100%;
}
.rating-info-desc-winrait{
	max-width: 205px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.rating-item-winrait{
	max-width: 205px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.rating-info-desc-total{
	max-width: 195px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.rating-item-total{
	max-width: 195px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.rating-info-desc-rating{
	max-width: 152px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.rating-item-rating{
	max-width: 152px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.rating-wrap{
	background-color: #151a1f;
	padding: 30px 60px 20px 30px;
}
.rating-info-desc-date{
	max-width: 220px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.rating-item-date{
	max-width: 220px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.rating{
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
.rating-items{
	display: flex;
	border-bottom: 1px solid #202529;
	padding: 10px;
}
.rating-items.static{
	background-color: #2d3136;
}
.rating-info{
	width: 100%;
	padding: 0 10px; 
	display: flex;
	margin: 0 0 15px;
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