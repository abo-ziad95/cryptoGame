<template>
	<div class="com">
		<div class="title">
			Email Notifications
		</div>
		<label class="switch-label" for="switch">
			<div class="switch-wrap">
				<input type="checkbox" id="switch" checked class="switch-input">
				<span class="slider"></span>
			</div>
			<span class="switch-txt"> Receive Emails about new platform features and big events</span>
		</label>
		<div class="check">
			<label for="promotion" class="checkbox-label">
				<span class="checkbox-wrap">
					<input id="promotion" type="checkbox" class="checkbox">
					<img src="../../images/checked.png" alt="#">
				</span>
			<span class="check-text">Promotions</span></label>
		</div>
		<div class="check">
			<label for="battle" class="checkbox-label">
				<span class="checkbox-wrap">
					<input id="battle" type="checkbox" class="checkbox">
					<img src="../../images/checked.png" alt="#">
				</span>
			<span class="check-text">Battle invite</span></label>
		</div>
		<div class="check">
			<label for="tournaments" class="checkbox-label">
				<span class="checkbox-wrap">
					<input id="tournaments" type="checkbox" class="checkbox">
					<img src="../../images/checked.png" alt="#">
				</span>
			<span class="check-text">Tournaments invite</span></label>
		</div>
		<div class="check">
			<label for="system" class="checkbox-label">
				<span class="checkbox-wrap">
					<input id="system" type="checkbox" class="checkbox">
					<img src="../../images/checked.png" alt="#">
				</span>
			<span class="check-text">System news</span></label>
		</div>
			<div class="btn-wrap">
				<button class="submit-btn" type="submit">SAVE</button>
			</div>
	</div>
</template>
<script>

</script>
<style scoped>
.submit-btn{
	display: flex;
	justify-content: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	align-items: center;
	font-weight: bold;
	height: 55px;
	max-width: 200px;
	background-color: #6a68ff;
	border: none;
	border-radius: 3px;
	width: 100%;
	padding: 0;
	outline: none;
	cursor: pointer;
}
.switch-label{
	margin: 0 0 40px 0;
	display: block;
}
.check-text{
	padding: 0 0 0 15px;
}
.title{
	font-size: 22px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	margin: 0 0 40px;
	font-weight: bold;
	color: #fff;
}
.checkbox-wrap img{
	opacity: 0;
}
.checkbox:checked ~ img{
	opacity: 1;
}
.check{
	display: flex;
	align-items: center;
	margin: 0 0 30px;
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.checkbox-label{
	padding: 0 4px 0;
	display: flex;
	align-items: center;
}
.checkbox-wrap{
	position: relative;
	border: 1px solid #6a68ff ;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.checkbox{
	opacity: 0;
	position: absolute;
	left: 0;
	top: 0;
	margin: 0;
	z-index: 1;
	width: 100%;
	height: 100%;
}

.com{
	width: 100%;
	padding: 40px 50px;
	background-color: #151a1f;
}
.switch-label{
	display: flex;
	align-items: center;
}
.switch-txt{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	padding: 0 0 0 20px;
}
.switch-wrap{
	position: relative;
	width: 80px;
	height: 34px;
}
.switch-input{
	opacity: 0;
	width: 100%;
	margin: 0;
	height: 100%;
	z-index: 1;
	cursor: pointer;
	position: absolute;
	top: 0;
	left: 0;
}
.slider {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #39444d;
	transition: .4s;
	width: 100%;
	height: 100%;
	border-radius: 20px;
}
.slider:before {
	position: absolute;
	content: "";
	height: 26px;
	width: 26px;
	left: 4px;
	bottom: 4px;
	background-color: #484f83;
	transition: .4s;
	border-radius: 100%;
}
.switch-input:checked + .slider {
	background-color: #2196F3;
}

.switch-input:focus + .slider {
	box-shadow: 0 0 1px #2196F3;
}

.switch-input:checked + .slider:before {
	transform: translateX(45px);
}
@media all and (max-width: 1440px) {
	.com{
		padding: 30px 20px
	}
	.title{
		font-size: 16px;
	}
	.switch-txt{
		font-size: 14px;
	}
	.check-text{
		font-size: 12px;
	}
	.submit-btn{
		max-width: 160px;
		font-size: 14px;
	}
}

</style>