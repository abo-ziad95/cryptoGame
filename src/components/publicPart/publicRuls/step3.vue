<template>
	<div class="com">
		<div class="text-wrap">
			<div class="step">
				step3
			</div>
			<div class="title">
				Add wallet
			</div>
			<div class="desc">
				To participate in the battle, you need to enable 2fa authorization and add a wallet. If you do not know how to do this, then see the 2Fa inclusion instructions.
			</div>
		</div>
		<div class="photo-wrap">
			<img src="../.../../../../images/rules/step1.png" alt="#" class="step-phto">
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
	width: 700px;
	height: 700px;
	right: -100px;
	top: -150px;
	background-color: #282b30;
	border-radius: 100%;
	z-index: -1;
}
</style>