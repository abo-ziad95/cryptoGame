<template>
	<div class="com">
		<div class="title">
			News
		</div>
		<row1></row1>
		<row2></row2>
	</div>
</template>
<script>
import row1 from '../publicNews/row1.vue'
import row2 from '../publicNews/row2.vue'


export default {
	data(){
		return{
		}
	},
	components: { 
		row1,
		row2,
	},
}
</script>
<style scoped>
.com{
	margin: 0 0 150px 0;
}
.title{
	color: #fff;
	font-size: 36px;
	font-family: HelveticaNeueCyr-Black, HelveticaNeueCyr;
	font-weight: 900;
	padding: 100px 0 50px 0;
}
</style>