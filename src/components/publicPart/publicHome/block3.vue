<template>
	<div class="com">
<!-- 		<div class="boxes-wrap"> -->
			<div class="box-item">
				<div class="number">
					01
				</div>
				<div class="img-wrap">
					<img src="../../../images/home/item1.png" alt="#">
				</div>
				<div class="subtxt">
					Play for free or for  money 
				</div>
			</div>
			<div class="box-item">
				<div class="number">
					02
				</div>
				<div class="img-wrap">
					<img src="../../../images/home/item2.png" alt="#">
				</div>
				<div class="subtxt">
					Choose opponents  of any level 
				</div>
			</div>
			<div class="box-item">
				<div class="number">
					03
				</div>
				<div class="img-wrap">
					<img src="../../../images/home/item3.png" alt="#">
				</div>
				<div class="subtxt">
					Analyze detailed  statistics
				</div>
			</div>
		<!-- </div> -->
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
.subtxt{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	text-align: center;
}
.img-wrap{
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 0 25px 0;
}
.number{
	color: #3f4145;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Light, HelveticaNeueCyr;
	font-weight: 300;
}
.com{
	margin: 100px 0 0 0;
	display: flex;
	justify-content: space-around;
}
.box-item{
	max-width: 200px;
	width: 100%;
	display: flex;
	flex-direction: column;
}
</style>