<template>
	<div class="com">
		<div class="title-wrap">
			<div class="title">
				Chart
			</div>
			<div class="dropdown">
				<button class="dropdown-btn">
					<span class="dropdown-txt">BTC</span>
					<img src="../../images/game1x1/downarrow.png" alt="#">
				</button>
				<div class="dropdown-list">
					<a href="#" class="dropdown-link">BTC</a>
					<a href="#" class="dropdown-link">BTC</a>
					<a href="#" class="dropdown-link">BTC</a>	
				</div>
			</div>
		</div>
					<div class="chart">
				<!--<img src="../../images/game1x1/11к.png" alt="#">-->
			</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
		}
	},
	beforeMount() {
		console.log('run')
		var _self = this
    var pusher = new Pusher('cb4d31997b790f9177c6', {
      cluster: 'eu',
      forceTLS: true
    });

    var channel = pusher.subscribe('chart');
    channel.bind('chart-changed', function(data) {
      console.log(data);
    });
	}

}
</script>
<style scoped>
.title-wrap{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 0 25px 0;
}
.title{
	color: #fff;
	font-size: 22px;
	font-family: Gotham-Bold;
}
.com{
	width: 100%;
	background-color: #151a1f;
	padding: 20px 30px 40px;
	max-width: 600px;
	max-height: 250px;
	height: 100%;
	position: relative;
}
.dropdown-list{
	display: none;
}
.dropdown-btn{
	background-color: #23272a;
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	max-width: 160px;
	width: 100%;
	padding: 17px 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	outline: none;
	border: none;
	cursor: pointer;
}
.dropdown{
	max-width: 160px;
	width: 100%
}
</style>