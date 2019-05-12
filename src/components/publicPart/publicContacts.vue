<template>
	<div class="com">
		<publicHeader></publicHeader>
		<div class="row">
			<div class="content">
				<div class="links">
				</div>
				<div class="title">	
					Contacts
				</div>
				<div class="component-wrap">	
					<div class="soc-wrap">
						<div class="soc-title">
							We in social
						</div>
						<div class="soc-links">
							<a href="#" class="soc-link"> <img src="../../images/public-part/footer/fb.png" alt="#"> </a>
							<a href="#" class="soc-link"> <img src="../../images/public-part/footer/fb.png" alt="#"> </a>
							<a href="#" class="soc-link"> <img src="../../images/public-part/footer/fb.png" alt="#"> </a>
						</div>
					</div>
					<form action="#" class="from-wrap">
						<div class="input-wrap"  >
							<div class="text">
								<label for="name">Your name</label>
							</div>
							<input type="text" class="input" id="name" >
							<div class="input-error">please provide a valid email address</div>
							<div class="input-error" >This fiel must not be empty</div>
						</div>
						<div class="input-wrap"  :class="{invalid: $v.email.$error}">
							<div class="text">
								<label for="mail">E-mail</label>
							</div>
							<input type="text" class="input" id="mail"  @blur="$v.email.$touch()" v-model="email">
							<div class="input-error" v-if="!$v.email.email">please provide a valid email address</div>
							<div class="input-error" v-if="!$v.email.required">This fiel must not be empty</div>
						</div>
						<div class="input-wrap"  >
							<div class="text">
								<label for="Subject">Subject</label>
							</div>
							<input type="text" class="input" id="Subject" >
							<div class="input-error">please provide a valid email address</div>
							<div class="input-error" >This fiel must not be empty</div>
						</div>
						<div class="input-wrap"  >
							<div class="text">
								<label for="Message">Message</label>
							</div>
							<input type="text" class="input" id="Message" >
							<div class="input-error">please provide a valid email address</div>
							<div class="input-error" >This fiel must not be empty</div>
						</div>
						<div class="btn-wrap">
							<button class="btn">Send message</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<publicFooter></publicFooter>
	</div>
</template>
<script>
import publicHeader from './shared/publicHeader.vue'
import publicFooter from './shared/publicFooter.vue'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
	data(){
		return{
			email: ''
		}
	},
	validations: {
		email:{
			required,
		},
	},
	components: {  
		publicHeader,
		publicFooter,
	},
}
</script>
<style scoped>
.btn{
	background-color: #6968ff;
	color: #fff;
	border: 1px solid transparent;
	outline: none;
	text-align: center;
	max-width: 180px;
	width: 100%;
	padding: 15px 0;
	border-radius: 3px;
}
.btn-wrap{
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 30px 0 0 0 ;
}
.from-wrap{
	max-width: 475px;
	width: 100%;
	padding: 35px;
	border: 1px solid #454694;
	border-radius: 3px
}
.input-wrap.invalid input{
	border: 1px solid red;
}
.text{
	color: #666;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	margin: 0 0 15px;
}
.message{
	color: #fff;
	text-align: center;
	font-family: Gotham-Bold;
	font-size: 20px;
	margin: 0 0 30px ;
}
.input-parent{
	position: relative;
}
.input-wrap.invalid .input-error{
	color: red;
	display: block;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	padding: 0 0 10px;
}
.input-error{
	display: none;
}
.form-wrap{
	background-color: #101217;
	padding: 40px 35px 35px;
}
.input{
	width: 100%;
	display: block;
	margin: 0 0 15px;
	height: 50px;
	font-size: 23px;
	padding: 0 15px;
	color: #fff;
	border: none;
	background-color: #292b2e;
}
.soc-links{
	display: flex;
	align-items: center;
}
.soc-link{
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 35px 0 0;
	width: 45px;
	height: 45px;
	border-radius: 100%;
	border: 1px solid #4b4ca7;

}
.soc-title{
	color: #fff;
	font-size: 24px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	padding: 40px 0 15px 0;
}
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
	justify-content: space-between;
	width: 100%;
}
</style>