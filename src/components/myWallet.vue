<template>
	<div class="com">
		<app-header></app-header>
		<div class="row">
			<app-Aside></app-Aside> 
			<div class="content">
				<div class="wellet" v-if="show === 'step1'">	
					<div class="title">	
						Add wallet
					</div>
					<button class="addWellet" @click="show = 'step2'">	
						<img src="../images/wellet/plus.png" class="addWellet-plus"> Add bitcoin wallet
					</button>
				</div>
			<next-step v-if="show === 'step2'"></next-step>
			</div>
		</div>
		<app-footer></app-footer>
	</div>
</template>	
<script>
import Header from './shared/header.vue'
import Aside from './shared/aside.vue'
import Footer from './shared/footer.vue'
import nextStep from './wallet/step2.vue'
export default {
	data(){
		return{
			show: 'step1'
		}
	},
	components: {  
		appAside: Aside,
		appFooter: Footer,
		appHeader: Header,
		nextStep
	},
}
</script>
<style scoped>
.content {
	background-color: #101116;
	width: 100%;
	padding: 150px 30px 100px 30px;
}
.row{
	display: flex;
}
.com{
	width: 100%;
}
.title{
	color: #fff;
	font-family: 	HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 	22px;
	margin: 0 0 30px;
}

.wellet{
	background-color: #151a1f;
	padding: 50px 45px 30px;
}
.addWellet{
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #2f3263;
	height: 80px;
	width: 100%;
	background-color: transparent;
	color: #fff;
	font-size: 16px;
	font-family: 	HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.addWellet-plus{
	font-size: 	32px;
	font-family: 	HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: 	bold;
	color: #6a68ff;
	padding: 0 15px 0 0;
}
</style>