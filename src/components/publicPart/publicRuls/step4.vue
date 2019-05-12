<template>
	<div class="com">
		<div class="photo-wrap">
			<img src="../.../../../../images/rules/step1.png" alt="#" class="step-phto">
		</div>
		<div class="text-wrap">
			<div class="step">
				step1
			</div>
			<div class="title">
				Regirstration
			</div>
			<div class="desc">
				In order to participate in the game, you need to register in the system.
				<span>On the main page, click "Sign up" or "Login" if you already have an account</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
		}
	},
	components: { 
	},
}
</script>
<style scoped>
.com{
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 0 0 340px;

}
.text-wrap{
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 475px;
	width: 100%;
}
.step{
	color: #fff;
	padding: 0 0 0 25px;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	position: relative;
	z-index: 1;
	margin: 0 0 30px 0;
}
.step:before{
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 100%;
	background-color: #56585c;
	left: 0;
	top: -10px;
	z-index: -1;
}
.title{
	color: #fff;
	font-size: 36px;
	font-family: HelveticaNeueCyr-Black, HelveticaNeueCyr;
	font-weight: 900;
	margin: 0 0 25px 0;
}
.desc{
	color: #56595c;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Black, HelveticaNeueCyr;
}
.desc span{
	display: block;
	margin: 30px 0 0 0;
}
.photo-wrap{
	position: relative;
	max-width: 612px;
	z-index: 1;
	width:100%;
}
.step-phto{
	max-width: 100%;
	height: auto;
}
.photo-wrap:before{
	content: '';
	position: absolute;
	width: 680px;
	height: 680px;
	left: -100px;
	top: -150px;
	background-color: #282b30;
	border-radius: 100%;
	z-index: -1;
}
</style>