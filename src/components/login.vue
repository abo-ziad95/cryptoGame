<template>
	<div class="com">
		<div class="container">
			<div class="logo">
				Battle of Traders
			</div>
			<form class="form">
				<div class="title">
					Login
				</div>
				<div class="input-wrap" :class="{invalid: $v.email.$error}">
					<div class="text">
						<label for="email">E-mail</label>
					</div>
					<input type="email" id="email" class="input" @blur="$v.email.$touch()" v-model="email" placeholder="Email">
					<div class="input-error" v-if="!$v.email.email">please provide a valid email address</div>
					<div class="input-error" v-if="!$v.email.required">This fiel must not be empty</div>
				</div>
				<div class="input-wrap" :class="{invalid: $v.password.$error}">
					<div class="text"><label for="pass">Password</label></div>
					<div class="input-parent">
						<button class="input-show-pass" @click="changeTypeInput($event)">
							<img src="../images/login-register/showPass.png" alt="#" v-if="typeInput === 'password'">
							<img src="../images/login-register/hidePass.png" alt="#" v-if="typeInput === 'text'">
						</button>
						<input  :type="typeInput" class="input" id="pass" @blur="$v.password.$touch()" placeholder="Password" v-model="password">
					</div>
					<div class="input-error" v-if="!$v.password.minLength">minimum 8 charts</div>
					<div class="input-error" v-if="!$v.password.required">This fiel must not be empty</div>
				</div>
				<div class="check">
<!-- 					<label for="checkbox" class="checkbox-label" :class="{invalid: $v.terms.$invalid}">
						<span class="checkbox-wrap">
							<input type="checkbox" id="checkbox" class="checkbox" v-model="terms" @click="$v.terms.$touch()">
							<img src="../images/checked.png" alt="#">
						</span>
					Remember me</label> -->
					<a href="#" class="check-link">Forgot password?</a>
				</div>
				<div class="img">
					<img src="../images/captch.png" alt="#">
				</div>
				<div class="social">
					<a href="#" class="social-link"><svgFacebook></svgFacebook></a>
					<a href="#" class="social-link"><svgFacebook></svgFacebook></a>
				</div>
				<button @click="submitForm($event)" class="btn" :disabled="this.$v.$invalid">Sign in</button>
			</form>
			<div class="haveAccount">
				Or create a <router-link tag="a" to="/register" class="haveAccount-link">
					new account
				</router-link>
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
			email: '',
			terms: true,
			typeInput: 'password',
			res: {}
		}
	},
	beforeCreate(){
			// 		console.log('run')
			// let data = {token: localStorage.getItem('cryptoGameToken')}
			// axios({
			// 	url: `http://192.168.0.177:8000/api/dashboard`,
			// 	method: 'POST',
			// 	data
			// })
			// .then((res) => {
			// 	console.log(res)
			// 	if(res.data.token === false){
			// 		this.$store.commit('authToken', false)
			// 	} else{
			// 		localStorage.setItem('cryptoGameToken', res.data.token)
			// 		this.$store.commit('authToken', true)
			// 	}
			// 	console.log( this.$store.getters.authToken)
			// })
			// .catch((err) => console.log(err))
		},
		methods: {
		// AuothUser(){
		// 	console.log('run')
		// 	let data = {token: localStorage.getItem('cryptoGameToken')}
		// 	axios({
		// 		url: `http://192.168.0.177:8000/api/dashboard`,
		// 		method: 'POST',
		// 		data
		// 	})
		// 	.then((res) => {
		// 		console.log(res)
		// 		if(res.data.token === false){
		// 			this.$store.commit('authToken', false)
		// 		} else{
		// 			localStorage.setItem('cryptoGameToken', res.data.token)
		// 			this.$store.commit('authToken', true)
		// 		}
		// 		console.log( this.$store.getters.authToken)
		// 	})
		// 	.catch((err) => console.log(err))
		// },
		submitForm(e){
			e.preventDefault()
      this.$router.push({ path: `/dashboard` })
			//
			// const cred = {"email": this.email, "password": this.password, "remember": true}
			// axios({
			// 	url: `http://192.168.0.177:8000/api/login`,
			// 	method: 'POST',
			// 	data: cred,
			// })
			// .then((res) => {
			// 	console.log(res)
			// 	if(res.data.data === false){
			// 		alert('ошибка')
			// 	} else{
			// 		localStorage.setItem('cryptoGameToken', res.data.data.token)
			// 		this.$store.state.currentGames = res.data.currentGames
			// 		this.$store.state.balanceFun = res.data.balanceFun
			// 		this.$store.state.balanceFactual = res.data.balanceFactual
			// 		// this.$store.state.firstName = res.data.data.firstName
			// 		// this.$store.state.lastName = res.data.data.lastName
			// 		this.$store.state.email = res.data.data.email
			// 		this.$store.commit('authToken', true)
			// 		this.$router.push({ path: `${res.data.data.link}` })
			//
			// 	}
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
.checkbox{
	opacity: 0;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
.checkbox-label{
	display: flex;
	align-items: center;
	
}
.checkbox-wrap img{
	opacity: 0;
}
.checkbox:checked ~ img{
	opacity: 1;
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
	padding: 0 60px 0px 15px;
	color: #fff;
	border: none;
	background-color: #23272a;
}
.check{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 15px 0;
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.check-link{
	color: #fff;
	border-bottom: 1px solid #fff;
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
</style>