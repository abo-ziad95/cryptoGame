<template>
	<div class="com">
		<publicHeader></publicHeader>
		<div class="content">
			<block1></block1>
			<block2></block2>
			<block3></block3>
			<block4></block4>
			<block5></block5>
		</div>
		<block6></block6>
		<div class="content">
			<block7></block7>
			<publicFooter></publicFooter>
		</div>
	</div>
</template>	
<script>
import publicHeader from './shared/publicHeader.vue'
import publicFooter from './shared/publicFooter.vue'
import block1 from './publicHome/block1.vue'
import block2 from './publicHome/block2.vue'
import block3 from './publicHome/block3.vue'
import block4 from './publicHome/block4.vue'
import block5 from './publicHome/block5.vue'
import block6 from './publicHome/block6.vue'
import block7 from './publicHome/block7.vue'

export default {
	data(){
		return{
		}
	},
	components: {  
		publicHeader,
		publicFooter,
		block1,
		block2,
		block3,
		block4,
		block5,
		block6,
		block7,
	},
}
</script>
<style scoped>
.com{
	width: 100%;
	background-color: #212429;
}
.content {
	max-width: 1202px;
	width: 100%;
	margin: 0 auto;
	padding: 0 10px;
}
</style>