<template>
	<div class="com">
		<div class="com-item">
			<div class="left">
				<div class="title">
					Change password
				</div>
				<form action="#" class="form">
					<label class="label" for="oldPass">
						<div class="input-title">
							Old password
						</div>
						<input type="text" class="input" id="oldPass" v-model="oldPass">
					</label>	
					<label class="label" for="newPass">
						<div class="input-title">
							New password
						</div>
						<input type="text" class="input" id="newPass" v-model="newPass">
					</label>
					<label class="label" for="confirmPass">
						<div class="input-title">
							Confirm password
						</div>
						<input type="text" class="input" id="confirmPass" v-model="confirmPass">
					</label>
					<div class="btn-wrap">
						<button class="submit-btn" @click="changePass($event)">SAVE</button>
					</div>
				</form>
			</div>
			<div class="right">
				<div class="txt">
					If you notice any suspicious activity, we recommend changing your password.
				</div>	
			</div>
		</div>
		<div class="com-item">
			<div class="wrap">
				<div class="title">
					2Fa Authorization
				</div>
				<div class="subtitle">
					To secure your account, we suggest you to use a 2-step authentication. Each time you log in to the website, the system will require you to enter a special code
				</div>
				<label class="label-checkbox" for="shwitch">
					<div class="checkbox-wrap">
						<input type="checkbox" id="shwitch"  checked class="checkbox" v-model="check">
						<span class="slider"></span>
					</div>
					<span class="checkbox-txt"> Active 2Fa</span>
				</label>
				<button class="submit-btn google" @click="google2fa()">SAVE</button>
			</div>
			<div class="qr">	
				<div class="qr-wrap" v-if="qr != ''">
					<img :src="qr" alt="#">
					<button class="submit-btn " @click="complete()">complete</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'


export default {
	data(){
		return{
			oldPass: '',
			newPass: '',
			confirmPass: '',
			check: '',
			qr: '',
			regData: ''
		}
	},
	methods: {
		complete(){
			let data = {token: localStorage.getItem('cryptoGameToken'), registrationData: this.regData}
			axios({
				url: `http://192.168.0.177:8000/api/profile/ga/completeregistration`,
				method: 'POST',
				data
			})
			.then((res) =>{
				this.qr = ''
			})
			.catch((err) =>{
				console.log(err)
			})
		},
		google2fa(e){
			let data = {token: localStorage.getItem('cryptoGameToken'), google2facheckbox: this.check}
			axios({
				url: `http://192.168.0.177:8000/api/profile/enablega`,
				method: 'POST',
				data
			})
			.then((res) =>{
				console.log(res)
				this.qr = res.data.QR_Image
				this.regData = res.data.registration_data
				console.log(this.regData)
			})
			.catch((err) =>{
				console.log(err)
			})
		},
		changePass(e){
			e.preventDefault()
			let data = {token: localStorage.getItem('cryptoGameToken'),
			'oldPassword': this.oldPass,
			'newPassword': this.newPass,
			'confirmPass': this.confirmPass
		}
		axios({
			url: `http://192.168.0.177:8000/api/profile/updatepassword`,
			method: 'POST',
			data
		})
		.then((res) =>{
			console.log(res)
		})
		.catch((err) =>{
			console.log(err)
		})
	}
},
created(){
	let data = {token: localStorage.getItem('cryptoGameToken')}
	axios({
		url: `http://192.168.0.177:8000/api/profile/showga`,
		method: 'POST',
		data
	})
	.then((res) =>{
		res.data.google2facheckbox === 1 ? this.check = res.data.google2facheckbox : this.check = false 
	})
	.catch((err) =>{
		console.log(err)
	})
}
}
</script>
<style scoped>
.qr{
	max-width: 200px;
	width: 100%;
}
.label-checkbox{
	display: flex;
	align-items: center;
}
.checkbox-txt{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
	padding: 0 0 0 20px;
}
.checkbox-wrap{
	position: relative;
	width: 80px;
	height: 34px;
}
.checkbox{
	opacity: 0;
	width: 100%;
	margin: 0;
	height: 100%;
	z-index: 1;
	cursor: pointer;
	position: absolute;
	top: 0;
	left: 0;
}
.slider {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #39444d;
	transition: .4s;
	width: 100%;
	height: 100%;
	border-radius: 20px;
}
.slider:before {
	position: absolute;
	content: "";
	height: 26px;
	width: 26px;
	left: 4px;
	bottom: 4px;
	background-color: #484f83;
	transition: .4s;
	border-radius: 100%;
}
.checkbox:checked + .slider {
	background-color: #2196F3;
}

.checkbox:focus + .slider {
	box-shadow: 0 0 1px #2196F3;
}

.checkbox:checked + .slider:before {
	transform: translateX(45px);
}
.subtitle{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	line-height: 1.9;
	margin: 0 0 20px 0;
}
.right{
	display: flex;
	align-items: center;
	max-width: 440px;
	width: 100%;
}
.txt{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	text-align: center;
	line-height: 1.9;
}
.btn-wrap{
	display: flex;
	justify-content: flex-end;
	width: 100%
}
.submit-btn{
	display: flex;
	justify-content: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	align-items: center;
	font-weight: bold;
	height: 55px;
	max-width: 200px;
	background-color: #6a68ff;
	border: none;
	border-radius: 3px;
	width: 100%;
	padding: 0;
	outline: none;
	cursor: pointer;
}
.submit-btn.google{
	margin: 34px 0 0 0;
}
.input{
	width: 100%;
	display: block;
	height: 50px;
	font-size: 23px;
	padding: 0 15px;
	color: #0e1011;
	border: none;
	background-color: #23272a;
	color: #fff;
	border-radius: 3px;
}
.input-title{
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	color: #666;
	padding: 0 0 15px 0;
	width: 100%;
}
.com{
	width: 100%;
}
.com-item{
	width: 100%;
	padding: 40px 50px;
	background-color: #151a1f;
	margin: 0 0 30px 0;
	display: flex;
	justify-content: space-between;
}
.title{
	color: #fff;
	font-size: 22px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	margin: 0 0 25px 0;
}
.left{
	max-width: 525px;
	width: 100%;
}
.label{
	margin: 0 0 20px 0;
	display: block;
}
@media all and (max-width: 1440px) {
	.com-item{
		padding: 30px 20px;
		margin: 0 0 20px
	}
	.left{
		max-width: 435px;
	}
	.right{
		max-width: 330px;
	}
	.txt{
		font-size: 14px;
		line-height: 1.7;
	}
	.title{
		font-size: 14px;
		margin: 0 0 20px
	}
	.input-title{
		font-size: 12px;
	}
	.input{
		font-size: 18px;
	}
	.submit-btn{
		font-size: 14px;
		height: 45px;
		max-width: 160px
	}
	.subtitle{
		font-size: 14px;
		line-height: 1.7;
	}
	.checkbox-txt{
		font-size: 14px;
	}
	.submit-btn.google{
		margin: 25px 0 0 0;
	}
}
</style>