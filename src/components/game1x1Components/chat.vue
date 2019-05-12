<template>
	<div class="com">
		<div class="person" v-for="item in 2">		
			<div class="person-img">	
				<img src="../../images/game1x1/person.jpg" class="person-img-pic" alt="#">
			</div>
				<span class="person-online"></span>
		</div>
	</div>
</template>
<script>

</script>
<style scoped>
.com{
	height: 100%;
	max-height: 100vh;
	padding: 35px 15px;
	background-color: #151a1f;
}
.person{
	padding: 10px 0;
	border-bottom: 1px solid rgba(102,102,102,.5);
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}
.person-img{
	overflow: hidden;
	width: 80px;
	height: 80px;
	position: relative;
	border-radius: 100%;
}
.person-img-pic{
	max-width: 100%;
	height: auto;
}
.person-online{
	position: absolute;
	content: '';
	width: 10px;
	height: 10px;
	background-color: #53dd2b;
	border-radius: 100%;
	bottom: 15px;
	right: 10px;
}
</style>