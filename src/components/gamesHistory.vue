<template>
	<div class="com">
		<app-header></app-header>
		<div class="row">
			<app-Aside></app-Aside>
			<div class="history">
				<div class="title-wrap">
					<div class="title">
						Games history
					</div>
					<div class="mode">
						<button class="mode-btn">1x1</button>	
						<button class="mode-btn">tour</button>	
					</div>
				</div>
				<div class="history-wrap">
					<div class="history-info">
						<div class="history-info-desc-img"></div>
						<div class="history-info-desc-game">Game</div>
						<div class="history-info-desc-prize">Prize pool</div>
						<div class="history-info-desc-time">Play time</div>
						<div class="history-info-desc-date">Date</div>
					</div>
					<div class="history-items" v-for="item in 10">
						<!-- paginatedData -->
						<div class="history-item-img">
							<img src="../images/photo1.png" alt="#" class="history-item-img-img">
							<div class="history-item-img-txt">
								{{item.opponentFirstName}}
								<span class="history-item-img-txt-span"><img src="../images/ukr.png" alt="#"> {{item.opponentCountry}}</span>
							</div>
						</div>
						<div class="history-item-game">
							{{item.userNameGame}}
						</div>
						<div class="history-item-prize">
							{{item.deposit}}
						</div>
						<div class="history-item-time">
							{{convertTime(item.timelive)}}
						</div>
						<div class="history-item-date">
							{{item.finishGameTime}}
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
		changePage(value){
			this.pageNumber = value - 1
		},
		convertTime(mil){
			let min = (mil % 3600000) / 60000,
			hour = Math.floor(mil / 3600000)
			min < 10 ? min = `0${min}` : min
			hour < 10 ? hour = `0${hour}` : hour
			return `${hour}h:${min}m`
		},
		// getArrey(cls){
		// 	this.activeBtn = cls
		// 	return [
		// 	{'src': 'photo1.png', 'name': 'sawdq', 'game': 'dslksdsdhsikda', 'entryFee': '200', 'prizePool': '1100', 'playTime': '1 hours 45 min'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'sawdq', 'game': 'dslksdsdhsikda', 'entryFee': '200', 'prizePool': '1100', 'playTime': '1 hours 45 min'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'sawdq', 'game': 'dslksdsdhsikda', 'entryFee': '200', 'prizePool': '1100', 'playTime': '1 hours 45 min'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'sawdq', 'game': 'dslksdsdhsikda', 'entryFee': '200', 'prizePool': '1100', 'playTime': '1 hours 45 min'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'sawdq', 'game': 'dslksdsdhsikda', 'entryFee': '200', 'prizePool': '1100', 'playTime': '1 hours 45 min'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'sawdq', 'game': 'dslksdsdhsikda', 'entryFee': '200', 'prizePool': '1100', 'playTime': '1 hours 45 min'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'sawdq', 'game': 'dslksdsdhsikda', 'entryFee': '200', 'prizePool': '1100', 'playTime': '1 hours 45 min'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'sawdq', 'game': 'dslksdsdhsikda', 'entryFee': '200', 'prizePool': '1100', 'playTime': '1 hours 45 min'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'sawdq', 'game': 'dslksdsdhsikda', 'entryFee': '200', 'prizePool': '1100', 'playTime': '1 hours 45 min'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	{'src': 'photo1.png', 'name': 'sawdq', 'game': 'dslksdsdhsikda', 'entryFee': '200', 'prizePool': '1100', 'playTime': '1 hours 45 min'},
		// 	{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
		// 	]
		// },
		nextPage(){
			this.pageNumber++;
			console.log(this.pageNumber)
		},
		prevPage(){
			this.pageNumber--;
		},
		getHistory(){
			let data = {token: localStorage.getItem('cryptoGameToken')}
			axios({
				url: `http://192.168.0.177:8000/api/gameshistory`,
				method: 'POST',
				data
			})
			.then(res => {
				console.log(res)
				localStorage.setItem('cryptoGameToken', res.data.token)
				this.$store.state.balanceFun = res.data.balanceFun
				this.$store.state.balanceFactual = res.data.balanceFactual
				this.listData = res.data.games.data
			})
			.catch(err => console.log(err))
		}
	},
	computed: {
		pageCount(){
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
	this.getHistory()
}
}
</script>
<style scoped>
.mode{
	max-width: 275px;
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;

}
.mode-btn{
	display: flex;
	width: 100%;
	height: 50px;
	align-items: center;
	justify-content: center;
	color: #666;
	background-color: transparent;
	border: 1px solid #6a68ff;
	outline: none	
}
.mode-btn.active{
	color: #fff;
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
.history-item-btn{
	max-width: 160px;
	width: 100%;
	display: flex;
	align-items: center;
}
.history-item-btn-link{
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
.history-info-desc-btn{
	max-width: 160px;
	width: 100%;
}
.history-item-img{
	max-width: 275px;
	width: 100%;
	display: flex;
	align-items: center;
}
.history-item-img-img{
	margin: 0 20px 0 0 ;
}
.history-item-img-txt{
	color: #fff;
	font-family:  Gotham-Bold;
	font-size: 16px;

}
.history-item-img-txt-span{
	display: flex;
	width: 100%;
	align-items: center;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 14px;
	padding: 12px 0 0 0;
}
.history-item-img-txt-span img{
	margin: 0 10px 0 0 ;
}
.history-info-desc-img{
	max-width: 275px;
	width: 100%;
}
.history-info-desc-time{
	max-width: 250px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.history-item-time{
	max-width: 250px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}


.history-info-desc-date{
	max-width: 185px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.history-item-date{
	max-width: 185px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}

.history-info-desc-prize{
	max-width: 250px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.history-item-prize{
	max-width: 250px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.history-info-desc-entry{
	max-width: 180px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.history-item-entry{
	max-width: 180px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.history-wrap{
	background-color: #151a1f;
	padding: 60px 65px 0 30px;
}
.history-info-desc-game{
	max-width: 450px;
	width: 100%;
	color: #515253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.history-item-game{
	max-width: 450px;
	width: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.history{
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
.history-items{
	display: flex;
	border-bottom: 1px solid #202529;
	padding: 10px 0;
}
.history-info{
	width: 100%; 
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
@media all and (max-width: 1440px) {
	.history-item-img-img{
		margin: 0 10px 0 0 ;
	}
	.history{
		padding: 110px 20px 65px 20px;
	}
	.mode-btn{
		height: 40px;
	}
	.title-wrap{
		margin: 0 0 10px;
	}
	.title{
		font-size: 24px;
	}
	.history-wrap{
		padding: 40px 20px 0 20px;
	}
	.history-item-img{
		max-width: 205px;
	}
	.history-info-desc-img{
		max-width: 205px;

	}
	.history-info-desc-game{
		max-width: 250px;
		font-size: 12px;
	}
	.history-item-game{
		max-width: 250px;
		font-size: 14px;
	}
	.history-info-desc-prize{
		max-width: 190px;
		font-size: 12px;
	}
	.history-item-prize{
		max-width: 190px;
		font-size: 14px;
	}
	.history-info-desc-time{
		max-width: 190px;
		font-size: 12px;
	}
	.history-item-time{
		max-width: 190px;
		font-size: 14px;
	}
	.history-info-desc-date{
		max-width: 230px;
		font-size: 12px;
	}
	.history-info-date{
		max-width: 230px;
		font-size: 14px;
	}
	.history-item-date{
		max-width: 230px;
		font-size: 14px;
	}
	.history-item-img-txt-span{
		font-size: 11px;
		padding: 8px 0 0 ;
	}
	.history-item-img-txt{
		font-size: 12px;
	}
}
</style>