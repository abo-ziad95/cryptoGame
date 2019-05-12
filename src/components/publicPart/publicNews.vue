<template>
	<div class="com">
		<publicHeader></publicHeader>
		<div class="row">
			<div class="content">
				<div class="links">
				</div>
				<div class="title">	
					News
				</div>
				<div class="component-wrap">	
					<row1></row1>
					<row2></row2>
					<row3></row3>
				</div>
			</div>
		</div>
		<publicFooter></publicFooter>
	</div>
</template>
<script>
import publicHeader from './shared/publicHeader.vue'
import publicFooter from './shared/publicFooter.vue'
import row1 from './publicNews/row1.vue'
import row2 from './publicNews/row2.vue'
import row3 from './publicNews/row3.vue'



export default {
	data(){
		return{
		}
	},
	components: {  
		publicHeader,
		publicFooter,
		row1,
		row2,
		row3,
	},
}
</script>
<style scoped>

.content {
	max-width: 1202px;
	width: 100%;
	margin: 0 auto;
	padding: 0 10px;
}
.row{
	display: flex;
	padding: 0 0 100px;
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
	margin: 65px 0 30px 0;
}
.component-wrap{
	display: flex;
	flex-direction: column;
	width: 100%;
}
</style>