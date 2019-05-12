<template>
	<div class="footer-row">
		<ul class="footer-menu">
			<router-link 
			class="footer-mune-item" 
			to="/publicHome">
			<span class="footer-menu-item-txt">FAQ</span>
		</router-link>
		<router-link 
		class="footer-mune-item" 
		to="/publicVideo" 
		exact tag="li">
		<span class="footer-menu-item-txt">News</span>
	</router-link>
	<router-link 
	class="footer-mune-item" 
	to="/publicRules" 
	exact tag="li">
	<span class="footer-menu-item-txt">Terms of use</span>
</router-link>
</ul>
<div class="soc-wrap">
<soc></soc>
</div>
</div>
</template>
<script>
import soc from '../soc.vue'
export default{
	components: {
		soc
	}
}
</script>
<style scoped>
.footer-row{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0 65px 0;
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
	max-width: 100px;
	width: 100%;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	cursor: pointer;
}
</style>