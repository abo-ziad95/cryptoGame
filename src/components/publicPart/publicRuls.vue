<template>
	<div class="com">
		<publicHeader></publicHeader>
		<div class="row">
			<div class="content">
				<div class="links">
				</div>
				<div class="title">	
					Rules
				</div>
				<div class="component-wrap">
					<step1></step1>
					<step2></step2>
					<step3></step3>
					<step4></step4>
				</div>
			</div>
		</div>
		<publicFooter></publicFooter>
	</div>
</template>	
<script>
import publicHeader from './shared/publicHeader.vue'
import publicFooter from './shared/publicFooter.vue'

import step1 from './publicRuls/step1.vue'
import step2 from './publicRuls/step2.vue'
import step3 from './publicRuls/step3.vue'
import step4 from './publicRuls/step4.vue'


export default {
	data(){
		return{

		}
	},
	components: {  
		publicHeader,
		publicFooter,
		step1,
		step2,
		step3,
		step4,
	},
}
</script>
<style scoped>
.component-wrap-title{
	color: #fff;
	font-size: 24px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	margin: 0 0 40px 0;
}
.count{
	color: #fff;
	background-color: #6a68ff;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 35px;
	height: 25px;
	border-radius: 3px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	font-size: 14;
}
.switched{
	margin: 0 0 0 100px;
	width: 100%;
}
.img{
	opacity: 0;
}
.img.active{
	opacity: 	1;
}
.menu-item{
	width: 100%;
	display: flex;
	align-items: center;
	border: none;
	background-color: transparent;
	outline: none;
	padding: 0;
	margin: 0 0 30px 0 ;
	cursor: pointer;
}
.line{
	height: 2px;
	display: block;
	width: 15px;
	background-color: #6a68ff;
	opacity: 0;
}
.line.active{
	opacity: 	1;
}
.text{
	font-size: 18px;
	font-family: 	HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	color: #fff;
	padding: 0 0 0 10px;
	height: 100%;
	text-align: left;
}
.text.active{
	color: #6a68ff;
}
.menu{
	/*padding: 40px 0 0 0;*/
	/*background-color: #151a1f;*/
	max-width: 295px;
	width: 100%;
}
.content {
	max-width: 1202px;
	width: 100%;
	margin: 0 auto;
	padding: 0 10px;
}
.row{
	display: flex;
/*	padding: 0 0 120px;*/
}
.com{
	width: 100%;
	background-color: #212429;
}
.title{
	width: 100%;
	color: #6968ff;
	/*	margin: 0 0 30px 0;*/
	font-family: HelveticaNeueCyr-Black, HelveticaNeueCyr;
	font-size: 52px;
	font-weight: 900;
	margin: 65px 0  ;
}
.component-wrap{
	display: flex;
	flex-direction: column;
}
</style>