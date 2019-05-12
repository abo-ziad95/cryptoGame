<template>
	<div class="com">
		<app-header></app-header>
		<div class="row">
			<app-Aside></app-Aside> 
			<div id="dashboard" class="dashboard">
				<div class="dashboard-title">
					Games mode
				</div>
				<div class="dashboard-btns">
					<a class="dashboard-btns-item" @click="getArrey('btn1')" :class="{active: activeBtn === 'btn1' }">
						<div class="dashboard-btns-item-up">	
							<div class="dashboard-btns-item-up-mode">	
								For Fun 1x1
							</div>
							<div class="dashboard-btns-item-players">	
								12
								<span class="dashboard-btns-item-players-span">player in game</span>
							</div>
						</div>
						<div class="dashboard-btns-item-down">	
							<div class="dashboard-btns-item-down-txt">	
								Games per day: 24
								<span class="dashboard-btns-item-down-span">Total Games: 1223</span>
							</div>
							<div class="dashboard-btns-item-down-img">	
								<svg1x1Game></svg1x1Game>
							</div>
						</div>
					</a>
					<a class="dashboard-btns-item" @click="getArrey('btn2')" :class="{active: activeBtn === 'btn2' }">
						<div class="dashboard-btns-item-up">	
							<div class="dashboard-btns-item-up-mode">	
								For BT 1x1
							</div>
							<div class="dashboard-btns-item-players">	
								12
								<span class="dashboard-btns-item-players-span">player in game</span>
							</div>
						</div>
						<div class="dashboard-btns-item-down">	
							<div class="dashboard-btns-item-down-txt">	
								Games per day: 44
								<span class="dashboard-btns-item-down-span">Total Games: 1565</span>
							</div>
							<div class="dashboard-btns-item-down-img">	
								<svg1x1Game></svg1x1Game>

							</div>
						</div>
					</a>
					<a class="dashboard-btns-item" @click="getArrey('btn3')" :class="{active: activeBtn === 'btn3' }">
						<div class="dashboard-btns-item-up">	
							<div class="dashboard-btns-item-up-mode">	
								Tournaments For FUN
							</div>
						</div>
						<div class="dashboard-btns-item-down">	
							<div class="dashboard-btns-item-down-txt">	
								Open tournaments: 3
								<span class="dashboard-btns-item-down-span">Total tournaments: 122</span>
							</div>
							<div class="dashboard-btns-item-down-img">	
								<svgTournament></svgTournament>
							</div>
						</div>
					</a>
					<a class="dashboard-btns-item" @click="getArrey('btn4')" :class="{active: activeBtn === 'btn4' }">
						<div class="dashboard-btns-item-up">	
							<div class="dashboard-btns-item-up-mode">	
								Tournaments For CST
							</div>
						</div>
						<div class="dashboard-btns-item-down">	
							<div class="dashboard-btns-item-down-txt">	
								Open tournaments: 3
								<span class="dashboard-btns-item-down-span">Total tournaments: 66</span>
							</div>
							<div class="dashboard-btns-item-down-img">	
								<svgTournament></svgTournament>
							</div>
						</div>
					</a>
				</div>
				<div class="dashboard-mode-title">
					<div class="dashboard-mode-title-txt">
						Open games <span class="dashboard-mode-title-span">For FUN</span>
					</div>
					<div class="dashboard-mode-filter">
						<span class="dashboard-mode-filter-txt">FILTERS</span>
						<img src="../images/dashboard/filter-icon.png" alt="#">
					</div>
				</div>
				<div class="fillter-wrap">
					<span class="fillter-wrap-txt">Entry fee from</span>
					<div class="fillter-wrap-input-wrap">
						<input class="fillter-wrap-input-number">
						<span class="fillter-wrap-input-span">to</span>
						<input class="fillter-wrap-input-number">
					</div>
					<div class="checkbox-wrap-parent">
						<span class="checkbox-wrap">
							<input type="checkbox" id="checkbox" class="checkbox">
							<img src="../images/checked.png" alt="#">
						</span>
						<span class="checkbox-txt">Only online game creator</span>
					</div>
					<div class="dropdown-wrap">
						<select v-model="selectedCountry" class="dropdown-select">
							<option class="dropdown-option" v-for="country in countres">{{country}}</option>
						</select>
					</div>
					<div class="btn-wrap">
						<button class="dashboard-mode-items-item-btn-link" @click="logout($event)">APPLY</button>
					</div>
				</div>
				<div class="dashboard-mode-items">
					<div class="dashboard-mode-items-item my"  v-for="item in myGames">
						<span class="my-game-txt">{{ my }}</span>
						<div class="my-game">
						</div>
						<div class="dashboard-mode-items-item-img">
							<!-- <img src="../images/photo1.png" alt="#"> -->
							<div class="dashboard-mode-items-item-img-txt">
								{{ item.creator_user_firstname }} {{ item.creator_user_lastname }}
								<span class="dashboard-mode-items-item-img-txt-span"><img src="../images/ukr.png" alt="#"> {{ item.creator_user_country }}</span>
							</div>
						</div>
						<div class="dashboard-mode-items-item-game">
							<span class="dashboard-mode-items-item-game-span">Game</span>
							{{item.userNameGame}}
						</div>
						<div class="dashboard-mode-items-item-entryFee">
							<span class="dashboard-mode-items-item-entryFee-span">Entry fee</span>
							<span class="dashboard-mode-items-item-entryFee-img"><img src="../images/f.png" alt="#">{{ item.deposit }}</span>
						</div>
						<div class="dashboard-mode-items-item-PrizePool">
							<span class="dashboard-mode-items-item-PrizePool-span">Prize pool</span>
							<span class="dashboard-mode-items-item-PrizePool-img"><img src="../images/f.png" alt="#">{{ item.deposit * 2 }}</span>
						</div>
						<div class="dashboard-mode-items-item-time">
							<span class="dashboard-mode-items-item-time-span">Play time</span>
							<span class="dashboard-mode-items-item-time-min"> {{ convertTime(item.timelive) }}</span>
						</div>
						<div class="dashboard-mode-items-item-btn">
							<button class="dashboard-mode-items-item-btn-link" @click="sendInfo(item.walletTable, item.nameGame, item.deposit)">Play</button>
						</div>
					</div>
				</div>
				<div class="dashboard-mode-items">
					<div class="dashboard-mode-items-item"  v-for="item in paginatedData">
						<div class="dashboard-mode-items-item-img">
							<!-- <img src="../images/photo1.png" alt="#"> -->
							<div class="dashboard-mode-items-item-img-txt">
								{{ item.creator_user_firstname }} {{ item.creator_user_lastname }}
								<span class="dashboard-mode-items-item-img-txt-span"><img src="../images/ukr.png" alt="#"> {{ item.creator_user_country }}</span>
							</div>
						</div>
						<div class="dashboard-mode-items-item-game">
							<span class="dashboard-mode-items-item-game-span">Game</span>
							{{item.userNameGame}}
						</div>
						<div class="dashboard-mode-items-item-entryFee">
							<span class="dashboard-mode-items-item-entryFee-span">Entry fee</span>
							<span class="dashboard-mode-items-item-entryFee-img"><img src="../images/f.png" alt="#">{{ item.deposit }}</span>
						</div>
						<div class="dashboard-mode-items-item-PrizePool">
							<span class="dashboard-mode-items-item-PrizePool-span">Prize pool</span>
							<span class="dashboard-mode-items-item-PrizePool-img"><img src="../images/f.png" alt="#">{{ item.deposit * 2 }}</span>
						</div>
						<div class="dashboard-mode-items-item-time">
							<span class="dashboard-mode-items-item-time-span">Play time</span>
							<span class="dashboard-mode-items-item-time-min"> {{ convertTime(item.timelive) }}</span>
						</div>
						<div class="dashboard-mode-items-item-btn">
							<button class="dashboard-mode-items-item-btn-link" @click="sendInfo(item.walletTable, item.nameGame, item.deposit)">Join game</button >
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
			selectedCountry: 'All countries',
			countres: ['R','U', 'All countries'],
			myGames: [],
			my: 'My Game',
			// socket: io("http://192.168.0.177:3000")
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
		soc(){
			this.socket.on('test-channel', function(data) {
				console.log(data)
			})
		},
		logout(e){
			e.preventDefault()
			let data = {token: localStorage.getItem('cryptoGameToken')}
			axios({
				url: `http://192.168.0.177:8000/api/logout`,
				method: 'POST',
				data
			})
			.then((res) =>{
				console.log(res)
				this.$router.push({ path: `${res.data.link}` })
			})
			.catch((err) =>{
				console.log(err)
			})
		},
		changePage(value){
			this.pageNumber = value - 1
		},
		getArrey(cls){
			this.activeBtn = cls
		},
		nextPage(){
			this.pageNumber++;
		},
		prevPage(){
			this.pageNumber--;
		},
		convertTime(mil){
			let min = (mil % 3600000) / 60000,
			hour = Math.floor(mil / 3600000)
			min < 10 ? min = `0${min}` : min
			hour < 10 ? hour = `0${hour}` : hour
			return `${hour}h:${min}m`
		},
		sendInfo(wallet, name, deposit){
			// this.$store.state.nameGame = name
			// this.$store.state.walletTable = wallet
			// this.$router.push({ path: `game1x1` })
			let data = {nameGame: name,walletTable: wallet, token: localStorage.getItem('cryptoGameToken')}
			axios({
				url: `http://192.168.0.177:8000/api/joingame`,
				method: 'POST',
				data: data,
			})
			.then((res) => {
				console.log(res)
				localStorage.setItem('cryptoGameToken', res.data.token)
				this.$store.state.nameGameOld = res.data.nameGame
				res.data.gameStatus === 3 ? this.$store.commit('changeSatrtGame', true) : this.$store.commit('changeSatrtGame', false)
				this.$store.state.deposit = res.data.deposit
				this.$store.state.oponentBalance = 0
				this.$store.state.oponent = res.data.opponent.firstName
				this.$store.state.nameGame = res.data.nameGame
				this.$store.state.walletTable = res.data.walletTable
				this.$store.state.transactions = res.data.transactions
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
				this.$store.commit('culcLiveTime', res.data.timelive)
				this.$router.push({ path: `${res.data.link}` })
			})
			.catch((err) => console.log(err))
		},
		getGamesInterval(){
			let _self = this
			let intervalRequsest = setInterval(function(){
				if(_self.$route.path === '/dashboard'){
					let data = {token: localStorage.getItem('cryptoGameToken')}
					axios({
						url: `http://192.168.0.177:8000/api/dashboard`,
						method: 'POST',
						data
					})
					.then(res => {
						console.log(res)
						// localStorage.setItem('cryptoGameToken', res.data.token)
						_self.$store.state.currentGames = res.data.currentGames
						_self.listData = res.data.allGames.data
						_self.myGames = res.data.myGames
					})
					.catch(err => console.log(err))
				}else{
					clearInterval(intervalRequsest)
				}
			}, 15000)
		},
		getGames(){
			let data = {token: localStorage.getItem('cryptoGameToken')}
			axios({
				url: `http://192.168.0.177:8000/api/dashboard`,
				method: 'POST',
				data
			})
			.then(res => {
				console.log(res)
				// localStorage.setItem('cryptoGameToken', res.data.token)
				this.$store.state.currentGames = res.data.currentGames
				this.listData = res.data.allGames.data
				this.myGames = res.data.myGames
				this.$store.state.balanceFun = res.data.balanceFun
				this.$store.state.balanceFactual = res.data.balanceFactual
			})
			.catch(err => console.log(err))
		},
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
// sockets: {
// 	connect: function (data) {
// 		console.log('socket connected')
// 		console.log(data)
// 	},
// 	customEmit: function (data) {
// 		console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
// 		console.log(data)
// 	}
// },
created() {
	this.getGames()
	this.getGamesInterval()
	this.soc()
},
}
</script>
<style scoped>
.dropdown-select{
	color: #fff;
	background-color: #23272a;
	display: flex;
	align-items: center;
	height: 50px;
	width: 100%;
	max-width: 275px;
	padding: 0 0 0 20px;
	border: none;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
}
.dropdown-option{
	padding: 10px 0;
}
.dropdown-wrap{
	max-width: 275px;
	width: 100%;
	margin: 0 0 0 30px;
}
.btn-wrap{
	margin: 0 0 0 auto;
}
.checkbox-txt{
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.checkbox-wrap-parent{
	margin: 0 0 0 25px;
	display: flex;
	align-items: center;
	padding: 0 25px 0 0;
	position: relative;
	height: 50px;
}
.checkbox-wrap-parent::after{
	position: absolute;
	right: 0;
	top: -15%;
	content: '';
	width: 1px;
	background-color: #22272b;
	height: 130%;
}
.checkbox{
	opacity: 0;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	margin: 0;
}
.checkbox-label{
	display: flex;
	align-items: center;
	
}
.checkbox-wrap img{
	opacity: 0;
}
.checkbox:checked ~ img{
	opacity: 1;
}
.checkbox-wrap{
	position: relative;
	border: 1px solid #6a68ff ;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 20px 0 0;
}
.fillter-wrap-input-wrap{
	padding: 0 25px 0 0;
	position: relative;
	display: flex;
	align-items: center;
}
.fillter-wrap-input-wrap::after{
	position: absolute;
	right: 0;
	top: -15%;
	content: '';
	width: 1px;
	background-color: #22272b;
	height: 130%;
}
.fillter-wrap-input-span{
	padding: 0 15px;
	color: #fff;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	font-size: 16px;
}
.fillter-wrap-txt{
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	padding: 0 20px 0 0;
}
.fillter-wrap-input-number{
	height: 50px;
	max-width: 165px;
	width: 100%;
	border-radius: 3px;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	padding: 0 20px;
	background-color: #23272a;
	border: none;
	outline: none;
	color: #fff;
}
.fillter-wrap{
	background-color: #151a1f;
	padding: 22px 30px;
	margin: 20px 0 0 0;
	display: flex;
	align-items: center;
}
.row{
	display: flex;
}
.com{
	width: 100%;
}
.dashboard-mode-items-bts-counter{
	display: flex;
	align-items: center
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
.dashboard-btns-item-down-img{
	z-index: 1;
	margin: 0 -10px 0 auto;
}
.dashboard-btns-item-up-mode{
	font-size: 22px;
	font-family: Gotham-Bold;
}

.dashboard-mode-items-bts{
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 0 20px;
	background-color: #151a1f;
	height: 60px;
}
.dashboard-mode-items-bts button{
	background-color: transparent;
	color: #fff;
	margin: 0 10px;
	width: 20px;
	border: none;
	outline: none
}
.dashboard-mode-items-item-img{
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 222px;
}
.dashboard-mode-items-item-img-txt{
	padding: 0 0 0 10px;
	font-family: Gotham-Bold;
	font-size: 16px;
}
.dashboard-mode-items-item-img-txt-span{
	width: 100%;
	display: flex;
	align-items: center;
	padding: 10px 0 0 ;
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.dashboard-mode-items-item-img-txt span img{
	padding: 0 5px 0 0;
}
.dashboard{
	background-color: #101217;
	width: 100%;
	padding: 145px 30px 65px 30px;
	position: relative;
}
.dashboard-title{
	color: #fff;
	font-family: Gotham-Bold;
	font-size: 	30px;
	margin:  0 0 30px;
}
.dashboard-btns{
	display: flex;
	justify-content: space-between;
	margin: 0 0 45px;
}
.dashboard-btns-item{
	max-width: 348px;
	width: 100%;
	border: 2px solid transparent;
	position: relative;
	overflow: hidden;
	padding: 30px;
	background-color: #151a1f;
	color: #fff;
	height: 250px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: all .5s linear;
}
.dashboard-btns-item.active{
	border: 2px solid #6a68ff;
}
.dashboard-btns-item::after{
	content: '';
	width: 195px;
	height: 195px;
	background-color: #1c2126;
	border-radius: 100%;
	position: absolute;
	right: -35px;
	bottom: -50px;
}
.dashboard-btns-item-up{
	display: flex;
	justify-content: space-between;
}
.dashboard-btns-item-players{
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	font-size: 20px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
}
.dashboard-btns-item-players-span{
	display: block;
	width: 100%;
	text-align: right;
	padding: 5px 0 0;
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	color: #666;
}
.dashboard-btns-item-down{
	display: flex;
	align-items: flex-end;
}
.dashboard-btns-item-down-txt{
	z-index: 1;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;

}
.dashboard-btns-item-down-span{
	padding: 20px 0 0;
	display: block;
}
.dashboard-mode-title{
	color: #fff;
	font-size: 30px;
	font-family: Gotham-Bold;
	display: flex;
	justify-content: space-between;
}
.dashboard-mode-filter{
	display: flex;
	align-items: center;
	padding: 0 15px 0 0;
}
.dashboard-mode-filter-txt{
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	padding: 0 15px 0 0;
}
.dashboard-mode-title-span{
	font-size: 16px;
	color: #666;
}
.dashboard-mode-items-item{
	padding: 25px 30px;
	background-color: #151a1f;
	margin: 30px 0 0;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
}
.dashboard-mode-items-item.my .dashboard-mode-items-item-game{
	max-width: 377px;
	padding: 25px 30px 25px 135px;
}
.dashboard-mode-items-item.my .dashboard-mode-items-item-img{
	display: none;
}
.my-game{
	position: absolute;
	left: 0;
	top:0;
	width: 135px;
	height: 135px;
	content: '';
	/*border-top: 135px solid red;*/
	/*border-right: 135px solid transparent;*/
	border-style: solid;
	border-width: 135px 135px 0 0;
	border-color: #53dd2b transparent transparent #53dd2b;
	/*border-top-left-radius: 5px;*/
}
.my-game-txt{
	position: absolute;
	left: 0;
	z-index: 1;
	top: 15%;
	transform: rotate(-45deg);
	width: 135px;
	color: #fff;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 16px;
	content: attr(data-title);
}
.dashboard-mode-items-item-game-span{
	display: block;
	padding: 0px 0 10px;
	color: #666;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.dashboard-mode-items-item-game{
	max-width: 155px;
	width: 100%;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
}
.dashboard-mode-items-item-entryFee-span{
	display: block;
	padding: 0 0 10px;
	color: #666;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.dashboard-mode-items-item-entryFee-img{
	display: flex;
	align-items: center;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	font-size: 18px;
}
.dashboard-mode-items-item-entryFee{
	max-width: 126px;
	width: 100%;
}
.dashboard-mode-items-item-entryFee-img img{
	padding: 0 5px 0 0;
}
.dashboard-mode-items-item-time-span{
	display: block;
	padding: 0 0 10px;
	color: #666;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.dashboard-mode-items-item-time-min{
	font-size: 18px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
}
.dashboard-mode-items-item-time{
	max-width: 130px;
	width: 100%;
}
.dashboard-mode-items-item-PrizePool-span{
	display: block;
	padding: 0 0 10px;
	color: #666;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.dashboard-mode-items-item-PrizePool-img{
	display: flex;
	align-items: center;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
}
.dashboard-mode-items-item-PrizePool-img img{
	padding: 0 5px 0 0;
}
.dashboard-mode-items-item-PrizePool{
	max-width: 185px;
	width: 100%;
}
.dashboard-mode-items-item-btn-link{
	background-color: #6a68ff;
	border: none;
	color: #fff;
	padding: 15px 40px;
	border-radius: 30px;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	outline: none;
	cursor: pointer;
}
@media all and (max-width: 1440px) {
	.dashboard{
		padding: 110px 20px 65px 20px;
	}
	.dashboard-btns-item-up-mode{
		font-size: 18px;
	}
	.dashboard-btns-item-players{
		font-size: 16px;
	}
	.dashboard-btns-item-players-span{
		font-size: 10px;
	}
	.dashboard-btns-item{
		padding: 15px;
		max-width: 260px;
	}
	.dashboard-btns-item-down-txt{
		font-size: 13px;
	}
	.dashboard-btns-item-down-img{
		transform: scale(.8);
		margin: 0 -20px 0 auto;
	}
	.dashboard-btns-item::after{
		width: 165px;
		height: 165px;
		bottom: -30px;
	}
	.dashboard-mode-title-txt{
		font-size: 24px;
	}
	.dashboard-mode-title-span{
		font-size: 12px;
	}
	.dashboard-mode-filter-txt{
		font-size: 12px;
	}
	.fillter-wrap{
		padding: 10px 20px;
	}
	.fillter-wrap-txt{
		font-size: 12px;
	}
	.fillter-wrap-input-number{
		max-width: 130px;
		height: 40px;
		font-size: 12px;
	}
	.checkbox-wrap-parent{
		margin: 0 0 0 20px;
		padding: 0 15px 0 0 ;
	}
	.checkbox-wrap{
		margin: 0 15px 0 0;
	}
	.checkbox-txt{
		font-size: 12px;
	}
	.checkbox-wrap-parent::after{
		top: 0;
		height: 100%;

	}
	.dropdown-wrap{
		margin: 0 0 0 20px;
		max-width: 220px;
	}
	.dropdown-select{
		font-size: 12px;
	}
	.dashboard-mode-items-item-btn-link{
		/*max-width: 135px;*/
		width: 100%;
		font-size: 12px;
		padding: 15px 30px;
	}
	.dashboard-mode-items-item-game-span{
		font-size: 12px;
	}
	.dashboard-mode-items-item{
		padding: 15px 20px;
	}
	.my-game{
		width: 105px;
		height: 105px;
		border-width: 105px 105px 0 0;
	}
	.my-game-txt{
		left: -5px;
		top: 5%;
		font-size: 	12px;
	}
	.dashboard-mode-items-item-game{
		font-size: 14px;
	}
	.dashboard-mode-items-item-entryFee-span{
		font-size: 	12px;
	}
	.dashboard-mode-items-item-PrizePool-span{
		font-size: 	12px;
	}
	.dashboard-mode-items-item-time-span{
		font-size: 	12px;
	}
	.dashboard-mode-items-item-time-min{
		font-size: 	14px;
	}
	.dashboard-mode-items-item-PrizePool-img{
		font-size: 	14px;
	}
	.dashboard-mode-items-item-entryFee-img{
		font-size: 	14px;
	}
	.btn-wrap{
		max-width: 135px;
		width: 100%;
	}
	.dashboard-mode-items-item-btn{
		max-width: 135px;
		width: 100%;
	}
}
</style>


