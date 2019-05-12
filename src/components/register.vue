<template>
	<div class="com">
		<div class="container">
			<div class="logo">
				Battle of Traders
			</div>
			<form action="#" class="form">
				<div class="title">
					Sign up
				</div>
				<div class="message" v-if="message != ''">
					{{message}}
				</div>
				<div class="input-wrap" :class="{invalid: $v.email.$error}">
					<div class="text">
						<label for="mail">E-mail</label>
					</div>
					<input type="text" class="input" id="mail" @blur="$v.email.$touch()" v-model="email" placeholder="Email">
					<div class="input-error" v-if="!$v.email.email">please provide a valid email address</div>
					<div class="input-error" v-if="!$v.email.required">This fiel must not be empty</div>
				</div>
				<div class="input-wrap" :class="{invalid: $v.password.$error}">
					<div class="text" for="pass"><label for="pass">Password</label></div>
					<div class="input-parent">
						<button class="input-show-pass" @click="changeTypeInput($event)">
							<img src="../images/login-register/showPass.png" alt="#" v-if="typeInput === 'password'">
							<img src="../images/login-register/hidePass.png" alt="#" v-if="typeInput === 'text'">
						</button>
						<input :type="typeInput" class="input" v-model="password" id="pass" @blur="$v.password.$touch()" placeholder="Password">
					</div>
					<div class="input-error" v-if="!$v.password.minLength">minimum 8 charts</div>
					<div class="input-error" v-if="!$v.password.required">This fiel must not be empty</div>
				</div>
				<div class="check">
<!-- 					<label for="checkbox" class="checkbox-label" :class="{invalid: $v.terms.$invalid}">
						<span class="checkbox-wrap">
							<input id="checkbox" type="checkbox" v-model="terms" class="checkbox" @click="$v.terms.$touch()">
							<img src="../images/checked.png" alt="#">
						</span>
					I agree the client agreement and</label> -->
					<a href="#" class="check-link"> Privacy Policy</a>
				</div>
				<div class="img">
					<img src="../images/captch.png" alt="#">
				</div>
				<div class="social">
					<a href="#" class="social-link"><svgFacebook></svgFacebook></a>
					<a href="#" class="social-link"><svgFacebook></svgFacebook></a>
				</div>
				<button @click="submitForm($event)" class="btn" :disabled="this.$v.$invalid">Create account</button>
			</form>
			<div class="haveAccount">
				Already have an  <router-link tag="a" to="/login" class="haveAccount-link"> account</router-link>?
			</div>
		</div>
	</div>
</template>	
<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import svgFacebook from './svgIcones/svgFacebook.vue'
import axios from 'axios'



export default {
	data(){
		return{
			password: '',
			typeInput: 'password',
			email: '',
			message: '',
			terms: true,
			ref: null
		}
	},
	methods: {
		// AuothUser(){
		// 	let data = {token: localStorage.getItem('cryptoGameToken')}
		// 	axios({
		// 		url: `http://192.168.0.177:8000/api/tradersonline`,
		// 		method: 'POST',
		// 		data
		// 	})
		// 	.then((res) => {
		// 		if(res.data.token === false){
		// 			this.$store.commit('authToken', false)
		// 		} else{
		// 			localStorage.setItem('cryptoGameToken', res.data.token)
		// 			this.$store.commit('authToken', true)
		// 		}
		// 	})
		// 	.catch((err) => console.log(err))
		// },
		submitForm(e){
			e.preventDefault()
      this.$router.push({ path: `/dashboard` })
			//
			// const cred = {"email": this.email, "password": this.password, "remember": true, "ref": this.ref}
			// axios({
			// 	url: `http://192.168.0.177:8000/api/register`,
			// 	method: 'POST',
			// 	data: cred,
			// })
			// .then((res) => {
			// 	console.log(res)
			// 	this.message = 'An email has been sent to your mail account. Please, check your InBox and confirm.'
			// 	localStorage.setItem('cryptoGameToken', res.data.token)
			// 	// this.$store.state.firstName = res.data.data.firstName
			// 	// this.$store.state.lastName = res.data.data.lastName
			// 	// this.$store.state.email = res.data.data.email
			// 	this.$store.commit('authToken', true)
			// })
			// .catch((err) => console.log(err))
		},
		changeTypeInput(e){
			e.preventDefault()
			e.detail === 0 ? this.submitForm(e) : this.typeInput === 'password' ? this.typeInput = 'text' : this.typeInput = 'password'
		}
	},
	components: {
		svgFacebook
	},
	mounted(){
		// this.AuothUser()

		this.$route.query.ref ? this.ref = this.$route.query.ref : this.ref = null
	},
	validations: {
		password:{
			required,
			minLength: minLength(8),
		},
		email:{
			email,
			required,
		},
		terms:{
			sameAs: sameAs( () => true )
		}
	}
}
</script>
<style scoped>
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
.input-show-pass{
	position: absolute;
	right: 0 ;
	top: 0;
	height: 50px;
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	border: none;
	outline: none;
	cursor: pointer;
}
.btn:disabled{
	cursor: default;
	background-color: #666;
}
.checkbox-label.invalid{
	color: red;
}
.input-wrap.invalid input{
	border: 1px solid red;
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
.container{
	max-width: 600px;
	width: 100%;
	margin: 0 auto;
}
.com{
	width: 100vw;
	max-width: 100%;
	padding: 45px 0 0 ;
	height: 100vh;
	max-height: 100%;
	background: url(../images/bg/loginBg.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
.logo{
	color: #fff;
	text-align: center;
	font-size: 24px;
	margin: 0 0 60px;
}
.form{
	background-color: #101217;
	padding: 40px 35px 35px;
}
.title{
	color: #fff;
	text-align: center;
	font-family: Gotham-Bold;
	font-size: 24px;
	margin: 0 0 30px ;
}
.text{
	color: #666;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	margin: 0 0 15px;
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
	background-color: #23272a;
}
.check{
	display: flex;
	align-items: center;
	margin: 15px 0;
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.check-link{
	color: #fff;
	border-bottom: 1px solid #fff;
}
.checkbox-label{
	padding: 0 4px 0;
	display: flex;
	align-items: center;
}
.social{
	padding: 20px 0 25px;
	display: flex;
	justify-content: center;
}
.social-link{
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #fff;
	margin: 0 5px;
	border-radius: 100%;
	width: 50px;
	height: 50px;
}
.btn{
	background-color: #6a68ff;
	color: #fff;
	height: 50px;
	max-width: 210px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	border: none;
	outline: none;
	border-radius: 30px;
	cursor: pointer;
}
.haveAccount{
	text-align: center;
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	margin: 35px 0;
}
.haveAccount-link{
	border-bottom: 1px solid #fff;
	color: #fff;
}
.checkbox{
	opacity: 0;
	position: absolute;
	left: 0;
	top: 0;
	margin: 0;
	z-index: 1;
	width: 100%;
	height: 100%;
}
.checkbox-wrap{
	position: relative;
	border: 1px solid #6a68ff ;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 10px 0 0;
}
.checkbox-wrap img{
	opacity: 0;
}
.checkbox:checked ~ img{
	opacity: 1;
}
</style>