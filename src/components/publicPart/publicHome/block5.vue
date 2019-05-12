<template>
	<div class="com">
		<div class="left">
			<img src="../../../images/home/battle.png" alt="#">
		</div>
		<div class="right">
			<div class="row">
				<div class="item">
					<div class="img">
						<img src="../../../images/home/wallet.png" alt="#">
					</div>
					<div class="txt">
						Easy withdraw
					</div>
				</div>
				<div class="item">
					<div class="img">
						<img src="../../../images/home/profile.png" alt="#">
					</div>
					<div class="txt">
						Easy withdraw
					</div>
				</div>
				<div class="item">
					<div class="img">
						<img src="../../../images/home/des.png" alt="#">
					</div>
					<div class="txt">
						Easy withdraw
					</div>
				</div>
			<!-- </div> -->
<!-- 			<div class="row"> -->
				<div class="item">
					<div class="img">
						<img src="../../../images/home/inter.png" alt="#">
					</div>
					<div class="txt">
						Easy withdraw
					</div>
				</div>
				<div class="item">
					<div class="img">
						<img src="../../../images/home/note.png" alt="#">
					</div>
					<div class="txt">
						Easy withdraw
					</div>
				</div>
				<div class="item">
					<div class="img">
						<img src="../../../images/home/message.png" alt="#">
					</div>
					<div class="txt">
						Easy withdraw
					</div>
				</div>
			</div>
			<div class="btn-wrap">
				<button class="btn">Play now</button>
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
.row{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.item{
	width: 30%;
	margin: 40px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.txt{
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	padding: 15px 0 0 0;
}
.com{
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 250px 0 0;
}
.left{
	max-width: 610px;
	width: 100%;
}
.left img{
	max-width: 100%
}
.right{
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
}
.btn-wrap{
	width: 100%;
	display: flex;
	justify-content: center;
}
.btn{
	background-color: #6968ff;
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	padding: 15px 0 ;
	max-width: 230px;
	width: 100%;
	border-radius: 3px;
	border:  none;
	outline: none;
}
</style>