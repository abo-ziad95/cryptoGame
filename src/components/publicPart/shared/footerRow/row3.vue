<template>
	<div class="footer-row">
		<span class="cop">© 2018 All rights reserved</span>
		<div class="logo">
			<span class="logo-txt">Created by </span>
			<a href="#"><img src="../../../../images/public-part/footer/logo.png" alt="#"></a>
		</div>
	</div>
</template>
<script>

export default{

}
</script>
<style scoped>
.logo{
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 180px;
	width: 100%;
}
.logo-txt{
	color: #fff;
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.cop{
	color: #fff;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	font-size: 14px;
}
.footer-row{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.footer-menu{
	display: flex;
	max-width: 495px;
	width: 100%;
	align-items: center;
	justify-content: space-between;
}
.footer-mune-item{
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	cursor: pointer;
}
</style>