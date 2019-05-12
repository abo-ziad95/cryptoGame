<template>
	<div class="com">
		<div class="games">
			<div class="games-item">
				<div class="game-title">
					For FUN 1x1
				</div>
				<div class="games-subtitle">
					Here is a description of the game mod копия
				</div>
				<div class="games-img">
					<svg1x1Game></svg1x1Game>
				</div>
				<button class="games-btn" @click="changeStep('For FUN 1x1')">Choice mod</button>
			</div>
			<div class="games-item">
				<div class="game-title">
					For BT 1x1
				</div>
				<div class="games-subtitle">
					Here is a description of the game mod копия
				</div>
				<div class="games-img">
					<svg1x1Game></svg1x1Game>
				</div>
				<button class="games-btn" @click="changeStep('For BT 1x1')">Choice mod</button>
			</div>
			<div class="games-item">
				<div class="game-title">
					Tournaments For FUN
				</div>
				<div class="games-subtitle">
					Here is a description of the game mod копия
				</div>
				<div class="games-img">
					<svg1x1Game></svg1x1Game>
				</div>
				<button class="games-btn" @click="changeStep('Tournaments For FUN')">Choice mod</button>
			</div>
			<div class="games-item">
				<div class="game-title">
					Tournaments For CST
				</div>
				<div class="games-subtitle">
					Here is a description of the game mod копия
				</div>
				<div class="games-img">
					<svg1x1Game></svg1x1Game>
				</div>
				<button class="games-btn" @click="changeStep('Tournaments For CST')">Choice mod</button>
			</div>
		</div>
	</div>
</template>
<script>
import svg1x1Game from '../svgIcones/svg1x1_icon.vue'

export default{
	data() {
		return{
			gameName: ''
		}
	},
	methods:{
		changeStep(name){
			this.gameName = name
			this.$emit('selectGame', this.gameName)
		}
	},
	components: {
		svg1x1Game
	}
}
</script>
<style scoped>
.games-btn{
	background-color: #6a68ff;
	color: #fff;
	outline: none;
	border-radius: 25px;
	border: none;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	text-align: center;
	max-width: 175px;
	width: 100%;
	height: 45px;
	cursor: pointer;
}
.games-img{
	padding: 20px 0;
}
.games-subtitle{
	color: #626568;
	max-width: 260px;
	width: 100%;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 16px;
	text-align: center;
}
.game-title{
	color: #fff;
	font-size: 22px;
	font-family: Gotham-Bold;
	margin: 0 0 30px 0;
}
.com{
	width: 100%;
}
.games{
	display: flex;
	justify-content: space-between;
	margin: 55px 0 0 0 ;
}
.games-item{
	width: 24%;
	background-color: #151a1f;
	padding: 35px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
@media all and (max-width: 1440px) {
	.games-item{
		padding: 25px 0;
	}
	.games-subtitle{
		max-width: 190px;
		font-size: 12px;
	}
	.game-title{
		font-size: 18px;
		margin: 0 0 15px;
	}
	.games-btn{
		font-size: 12px;
	}
}
</style>