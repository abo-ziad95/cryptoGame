<template>
	<div class="com">
		<app-header></app-header>
		<div class="row">
			<app-Aside></app-Aside> 
			<div class="enemy" >
				<div class="up-wrap">
					<div class="title up">
						GGG profile
					</div>
					<div class="profile-wrap">
						<div class="profile-img">
							<img src="../images/photo1.png" alt="#">
						</div>
						<div class="profile-desc">
							<div class="name">
								GGG
							</div>
							<div class="country">
								<img src="../images/ukr.png" alt="#">
								<span class="country-name">Ukraine</span>
							</div>
							<div class="rating-wrap">
								<div class="rating">
									<div class="rating-title">
										Rating
									</div>
									<div class="rating-val">
										1504
									</div>
								</div>
								<div class="rating">
									<div class="rating-title">
										Total battles
									</div>
									<div class="rating-val">
										11
									</div>
								</div>
								<div class="rating">
									<div class="rating-title">
										Winrait
									</div>
									<div class="rating-val">
										91 %
									</div>
								</div>
							</div>
							<div class="battel">
								<span class="battel-txt">Best portfolio in battle</span>
								<span class="battel-val">+6.03%</span>
							</div>
							<div class="btns-wrap">
								<button class="btn invite">Game invite</button>
								<button class="btn send">Send message</button>
							</div>
						</div>
						<div class="date-wrap">
							<div class="date">
								Date registered: <span>September 12, 2018</span> 
							</div>
							<div class="id">
								Profile ID: 39390738
							</div>
						</div>
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
export default {
	data(){
		return{
			activeBtn: 'btn1',
			pageNumber: 0,
			pageCountNum: 0,
			listData: this.getArrey()
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
		getArrey(cls){
			this.activeBtn = cls
			return [
			{'src': 'photo1.png', 'name': 'sawdq', 'game': 'dslksdsdhsikda', 'entryFee': '200', 'prizePool': '1100', 'playTime': '1 hours 45 min'},
			{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
			{'src': 'photo1.png', 'name': 'sawdq', 'game': 'dslksdsdhsikda', 'entryFee': '200', 'prizePool': '1100', 'playTime': '1 hours 45 min'},
			{'src': 'photo1.png', 'name': 'ssad', 'game': 'dslkaaaaaaaaaaaa', 'entryFee': '300', 'prizePool': '5100', 'playTime': '1 hours'},
			]
		},
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
			s = 10;
			this.pageCountNum = Math.ceil(l/s)
      // редакция переводчика спасибо комментаторам
      return Math.ceil(l/s);
      // оригинал
      // return Math.floor(l/s);
    },
    paginatedData(){
    	const start = this.pageNumber * 10,
    	end = start + 10;
    	return this.listData.slice(start, end);
    }
  },
}
</script>
<style scoped>
.id{
	text-align: right;
		font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.date{
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	margin: 0 0 10px;
}
.date span{
	font-weight: bold;
}
.date-wrap{
	margin: 0 0 0 auto;
	color: #fff;
}
.btns-wrap{
	display: flex;
	justify-content: space-between;
}
.btn{
	height: 45px;
	max-width: 150px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	border: 1px solid transparent;
	outline: none;
	border-radius: 50px;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.btn.send{
	background-color: transparent;
	border: 1px solid #fff;
}
.btn.invite{
	background-color: #6a68ff;
}
.battel{
	margin: 0 0 30px;
}
.battel-txt{
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	padding: 0 15px 0 0;
}
.battel-val{
	color: #42ad27;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
}
.profile-desc{
	max-width: 350px;
	width: 100%;
}
.name{
	color: #fff;
	font-size: 16px;
	font-family: Gotham-Bold;
	margin: 0 0 10px;
}
.country img{
	margin: 0 5px 0 0;
}
.country{
	display: flex;
	align-items: center;
	margin: 0 0 25px;
}
.country-name{
	color: #fff;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 14px;
}
.rating-wrap{
	margin: 0 0 30px;
	display: flex;
	justify-content: space-between;
}
.rating{
	max-width: 30%;
	width: 100%;
}
.rating-title{
	color: #505253;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	margin: 0 0 5px;
}
.rating-val{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
}
.profile-img{
	margin: 0 50px 0 0;
}
.profile-wrap{
	margin: 0 0 30px;
	display: flex;
	padding: 30px 40px;
	background:  url('../images/bg/enemyBg.jpg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	width: 100%;
	max-height: 300px;
}
.row{
	display: flex;
}
.com{
	width: 100%;
}
.enemy{
	background-color: #101217;
	width: 100%;
	padding: 145px 30px 65px 30px;
}
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
.title.up{
	margin: 0 0 30px;
}
@media all and (max-width: 1440px) {
	.enemy{
		padding: 110px 20px 65px 20px;
	}
	.title.up{
		font-size: 	24px;
	}
}

</style>