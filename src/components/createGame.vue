<template>
	<div class="component">
		<app-header></app-header>
		<div class="row">
			<app-Aside></app-Aside> 
			<div class="content">
				<div class="title">
					Create new game
				</div>
				<div class="steps">
					<div class="steps-btn-wrap">
						<div class="steps-btn  done"><img src="../images/creategame/done.png" alt="#"></div>
						<span class="setpes-btn-txt">Step 1</span>
					</div>
					<div class="line"></div>
					<div class="steps-btn-wrap">
						<div class="steps-btn" :class="{done: game != ''}"><img src="../images/creategame/done.png" alt="#"></div>
						<span class="setpes-btn-txt">Step 2</span>
					</div>
					<div class="line"></div>
					<div class="steps-btn-wrap">
						<div class="steps-btn" :class="{done: succees}"><img src="../images/creategame/done.png" alt="#"></div>
						<span class="setpes-btn-txt">Step 3</span>
					</div>
				</div>
				<step1 v-if="show === 'step1'" @selectGame="changeCom($event)" ></step1>
				<step2 v-if="show === 'step2'" @createGame="sendData($event)" :game="game"></step2>
				<step3 v-if="show === 'step3'" :gameName="gameName"></step3>
			</div>
		</div>
		<app-footer></app-footer>
	</div>
</template>	
<script>
import Header from './shared/header.vue'
import Aside from './shared/aside.vue'
import Footer from './shared/footer.vue'
import step1 from './craeteGame/step1.vue'
import step2 from './craeteGame/step2.vue'
import step3 from './craeteGame/step3.vue'
import axios from 'axios'

export default {
	data(){
		return{
			show: 'step1',
			game: '',
			gameName: '',
			succees: false
		}
	},
	methods:{
		changeCom(data){
			this.game = data
			this.show = 'step2'
		},
		sendData(data){
			this.$store.getters.inviteToken != '' ? data['inviteToken'] = this.$store.getters.inviteToken : console.log(this.$store.getters.inviteToken)
			data['gameMode'] = this.game
			this.gameName = data.nameGame
			data['token'] = localStorage.getItem('cryptoGameToken')
			axios({
				url: `http://192.168.0.177:8000/api/create-game1x1`,
				method: 'POST',
				data: data,
			})
			.then((res) => {
				localStorage.setItem('cryptoGameToken', res.data.token)
				console.log(res)
				this.succees = true
				this.show = 'step3'
			})
			.catch((err) => console.log(err))
		},
	},
	components: {
		appAside: Aside,
		appFooter: Footer,
		appHeader: Header,
		step1,
		step2,
		step3
	},
}
</script>
<style scoped>
.content{
	background-color: #101116;
	width: 100%;
	padding: 150px 30px 100px 30px;
}
.row{
	display: flex;
}
.component{
	width: 100%;
}
.title{
	color: #fff;
	font-family: Gotham-Bold;
	font-size: 30px;
}
.steps{
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 100%;

}
.setpes-btn-txt{
	color: #fff;
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	position: absolute;
	bottom: -30px;
	left: 0px;
	text-align: center;
	width: 100%;
}
.steps-btn{
	width: 60px;
	height: 60px;
	border-radius: 100%;
	border: none;
	background-color: #292a2f;
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
}
.steps-btn-wrap{
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	position: relative;
}
.steps-btn.done{
	background-color: #53dd2b;
}
.line{
	width: 145px;
	height: 2px;
	background-color: #2b2d31;
}
@media all and (max-width: 1440px) {
	.content{
		padding: 110px 20px 100px 20px;
	}
	.title{
		font-size: 24px;
	}
	.steps-btn{
		width: 45px;
		height: 45px;
	}
	.setpes-btn-txt{
		font-size: 12px;
	}
}
</style>