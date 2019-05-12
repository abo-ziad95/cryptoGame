<template>
	<div class="com">
		<div class="com-item">
			<div class="up">
				<div class="title">
					Change password
				</div>
				<div class="table">
					<div class="tr">
						<div class="th">ID</div>
						<div class="th">Open date</div>
						<div class="th">Ip adress</div>
						<div class="th">Browser</div>
						<div class="th">Device type</div>
					</div>
					<div class="tr">
						<div class="td">2312121</div>
						<div class="td">Today at 3:10 PM</div>
						<div class="td">46.211.95.159</div>
						<div class="td">Chrome</div>
						<div class="td">Chrome on Win10</div>
						<div class="t-btn"><button class="btn">End</button></div>
					</div>
				</div>
			</div>
		</div>
		<div class="com-item">
			<div class="down">
				<div class="title">
					<span class="title-txt">Session History</span>
					<button class="title-btn">Log out from all devices <img src="../../images/setting/end.png" alt="#"></button>
				</div>
				<div class="table">
					<div class="tr">
						<div class="th">ID</div>
						<div class="th">Open date</div>
						<div class="th">Ip adress</div>
						<div class="th">Browser</div>
						<div class="th">Device type</div>
					</div>
					<div class="tr" v-for="item in 5">
						<div class="td">2312121</div>
						<div class="td">Today at 3:10 PM</div>
						<div class="td">46.211.95.159</div>
						<div class="td">Chrome</div>
						<div class="td">Chrome on Win10</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

</script>
<style scoped>
.btn{
	background-color: #6a68ff;
	color: #fff;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	cursor: pointer;
	outline: none;
	height: 50px;
	border-radius: 30px
}
.title-btn{
	background-color: transparent;
	color: #fff;
	font-family: HelveticaNeueCyr-Meiudm, HelveticaNeueCyr;
	font-size: 16px;
	border: none;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 280px;
	width: 100%;
	letter-spacing: 1px;
	text-transform: uppercase;
}
.t-btn{
	width: 100%;
	max-width: 100px;
	margin: 0 0 10px;
}
.th{
	color: #515253;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 16px;
	width: 100%;
	padding: 0 0 10px ;
	max-width: 178px;
}
.up .td{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	width: 100%;
	max-width: 185px;
	margin: 0 0 10px 0;
}
.tr{
	display: flex;
	align-items: center;
}
.com{
	width: 100%;
}
.com-item{
	width: 100%;
	padding: 40px 30px 40px 50px;
	background-color: #151a1f;
	margin: 0 0 30px 0;
	display: flex;
	justify-content: space-between;
}
.title{
	color: #fff;
	font-size: 22px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	margin: 0 0 25px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.down .td{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	width: 100%;
	max-width: 205px;
	padding: 0 0 30px 0
}
.up, .down{
	width: 100%;
}
.down .th{
	max-width: 205px;
	width: 100%;
	padding: 0 0 10px 0;
}
@media all and (max-width: 1440px) {
	.com-item{
		padding: 30px 20px
	}
	.title{
		font-size: 16px;
	}
	.th{
		font-size: 12px;
	}
	.up .td{
		font-size: 14px;
	}
}
</style>