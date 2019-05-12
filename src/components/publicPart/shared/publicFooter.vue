<template>
	<div class="footer-wrap">
		<div class="container">
			<row1></row1>
			<row2></row2>
			<row3></row3>

		</div>
	</div>
</template>
<script>
import row1 from './footerRow/row1.vue'
import row2 from './footerRow/row2.vue'
import row3 from './footerRow/row3.vue'
export default{
	data(){
		return{
			opened: false,
			activeLang: 'English',
			langs: ['English','Русский' ]
		}
	},
	components: {
		row1,
		row2,
		row3,
	},
	methods: {
		langFn(lang){
			this.opened = !this.opened
		},
		changeLang(lang){
			this.activeLang = lang
		},
		changeMenu(boolean){
			this.smallscreen = boolean
		}
	},
}
</script>
<style scoped>
.container{
	max-width: 1202px;
	width: 100%;
	margin: 0 auto;
	padding: 50px 10px  20px 10px;
	border-top: 1px solid #2c2f34;
}
</style>