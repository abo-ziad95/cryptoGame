<template>
	<div class="com">
		<app-header></app-header>
		<div class="row">
			<app-Aside></app-Aside> 
			<div id="portfolio" >
				<h1>portfolio</h1>
			</div>

		</div>
		<app-footer></app-footer>
	</div>
</template>	
<script>
import Header from './shared/header.vue'
import Aside from './shared/aside.vue'
import Footer from './shared/footer.vue'
export default {
	components: {  
		appAside: Aside,
		appFooter: Footer,
		appHeader: Header,
	},
}
</script>
<style>
	.row{
		display: flex;
	}
	.com{
		width: 100%;
	}
</style>