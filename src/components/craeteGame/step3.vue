<template>
	<div class="com">
		<div class="title">
			Our congratulations
		</div>
		<div class="subtitle">
			Game with name “{{gameName}}” is created, we expect player
		</div>
		<div class="promote">
			Promote your game
		</div>
		<div class="share-btns">
			<a href="#" class="share-btns-link"><svgFacebook></svgFacebook> <span>Telegram</span></a>
			<a href="#" class="share-btns-link"><svgFacebook></svgFacebook> <span>Facebook</span></a>
			<a href="#" class="share-btns-link"><svgFacebook></svgFacebook> <span>twitter</span></a>
		</div>
	</div>
</template>
<script>
	import svgFacebook from '../svgIcones/svgFacebook.vue'

export default {
	props: ['gameName'],
	components: {
		svgFacebook		
	}
}
</script>
<style scoped>
.share-btns{
	display: flex;
	justify-content: center;
}
.share-btns-link{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	display: flex;
	align-items: center;
	border: 1px solid #fff;
	height: 50px;
	width: 155px;
	margin: 0 7px;
	justify-content: center;
	border-radius: 25px;
}
.share-btns-link span{
	padding: 0 0 0 15px;
}
.com{
	width: 100%;
	margin: 55px 0 0 0 ;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.title{
	padding: 25px 0 20px 0;
	font-size: 26px;
	font-family: Gotham-Bold;
	color: #6a68ff;
}
.subtitle{
	color: #fff;
	font-size: 22px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	padding: 0 0 60px 0;
}
.promote{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	padding: 0 0 20px 0;
}
@media all and (max-width: 1440px) {
	.title{
		font-size: 22px;
	}
	.subtitle{
		padding: 0 0 30px;
	}
	.promote{
		font-size: 14px;
	}
	.share-btns-link{
		font-size: 14px;
	}
}
</style>