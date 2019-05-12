<template>
	<div class="com">
		<div class="left">
			<div class="registered">
				Date registered: <span>September 12, 2018</span>
			</div>	
			<div class="profile">
				Profile ID: 39390738
			</div>
			<div class="img">
				<label for="avatar">
					<span class="avatar-wrap">
						<input type="file" id="avatar" class="avatar-input" @change="upload" accept="image/*">
						<img src="../../images/setting/personal.png" alt="#">
					</span>
					<div class="text">Change avatar</div>
				</label>
			</div>
		</div>
		<div class="right">
			<form action="#" class="form" enctype="multipart/form-data" id="uploadForm">
				<label class="input-wrap">
					<div class="title">
						E-mail
					</div>
					<div class="value">
						{{ email }}
					</div>
				</label>
				<label class="input-wrap" for="firstName">
					<div class="title">
						First name
					</div>
					<input type="text" id="firstName" class="input" v-model="firstName">
				</label>
				<label class="input-wrap" for="lastName">
					<div class="title">
						Last name
					</div>
					<input type="text" id="lastName" class="input" v-model="lastName">
				</label>
				<label class="input-wrap" for="country">
					<div class="title">
						country
					</div>
					<input type="text" id="country" class="input" v-model="country">
				</label>
				<label class="input-wrap" for="city">
					<div class="title">
						city
					</div>
					<input type="text" id="city" class="input" v-model="city">
				</label>
				<div class="wrap">
					<label class="input-wrap" for="city">
						<div class="title">
							Day of birthday
						</div>
						<input type="text" id="city" class="input" v-model="day">
					</label>
					<label class="input-wrap" for="city">
						<div class="title">
							Month
						</div>
						<input type="text" id="city" class="input" v-model="month">
					</label>
					<label class="input-wrap" for="city">
						<div class="title">
							Year
						</div>
						<input type="text" id="city" class="input" v-model="year">
					</label>
				</div>
				<div class="btn-wrap">
					<button class="btn" @click="sendData($event)">SAVE</button>
				</div>
			</form>
		</div>	
	</div>
</template>
<script>
import axios from 'axios'


export default {
	data(){
		return{
			email: '',
			firstName: '',
			lastName: '',
			country: '',
			raiting: '',
			day: '',
			month: '',
			year: '',
			dateRegistered: '',
			avatar: null,
			city: ''
		}
	},
	created() {
		let data = {token: localStorage.getItem('cryptoGameToken')}
		axios({
			url: `http://192.168.0.177:8000/api/profile/show`,
			method: 'POST',
			data
		})
		.then((res) =>{
			this.email = res.data.email
			this.firstName = res.data.firstName
			this.lastName = res.data.lastName
			this.country = res.data.country
			// this.birthDate = res.data.birthDate
			this.city = res.data.city
			this.dateRegistered = res.data.dateRegistered.data
			this.getBirthDate(res.data.birthDate)
		})
		.catch((err) =>{
			console.log(err)
		})
	},
	methods: {
		upload(e){
			e.preventDefault()
			this.avatar = e.target.files[0]
			// const formData = new FormData()
			// formData.append('image', this.avatar)
			// let data = {'avatar': this.avatar}
			// axios.post('http://192.168.0.177:8000/api/profile/uploadAvatar', data)
			// .then((res) =>{
			// 	console.log(res)
			// })
			// .catch((err) =>{
			// 	console.log(err)
			// })
		},
		getBirthDate(date){
			let data = date.split('-')
			this.day = data[0]
			this.month = data[1]
			this.year = data[2]
		},
		setGetBirthDate(){
			let data = [this.day, this.month, this.year]
			return data.join('-')
		},
		sendData(e){
			e.preventDefault()
			const formData = new FormData()
			// formData.append('image', this.avatar, this.avatar.name)
			let data = {
				'token': localStorage.getItem('cryptoGameToken'),
				'firstName': this.firstName,
				'lastName': this.lastName,
				'country': this.country,
				'city': this.city,
				// 'avatar': this.avatar,
				'birthDate': this.setGetBirthDate(),
			}
			console.log(data)
			axios({
				url: `http://192.168.0.177:8000/api/profile/update`,
				method: 'POST',
				data,
				// headers: {
				// 	'Content-Type': 'multipart/form-data'
				// }
			})
			.then((res) =>{
				console.log(res)
			})
			.catch((err) =>{
				console.log(err)
			})

		}
	}
}
</script>
<style scoped>
.btn-wrap{
	display: flex;
	justify-content: flex-end;
	margin: 15px 0 0 0;
}
.btn{
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
	outline: none
}
.value{
	color: #fff;
	font-size: 16px;
	font-family: Gotham-Bold;
	margin: 0  0 30px 0;
}
.com{
	width: 100%;
	padding: 50px;
	background-color: #151a1f;
	display: flex;
	justify-content: space-between;
}
.registered{
	color: #fff;
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	margin: 0 0 10px 0;
}
.registered span{
	font-weight: bold;
}
.profile{
	color: #fff;
	font-size: 14px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	margin: 0  0 30px 0;
}
.avatar-wrap{
	position: relative;
	border: 1px solid #6a68ff ;
	width: 425px;
	height: 425px;
	display: flex;
	align-items: center;
	border-radius: 5px;
	justify-content: center;
}
.avatar-input{
	width: 100%;
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	/*width: 100px;*/
	/*height: 100px;*/
	/*border: 1px solid red;*/
}
.text{
	color: #fff;
	text-align: center;
	margin: 20px 0 0 0 ;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.right{
	max-width: 520px;
	width: 100%;
}
.input-wrap{
	width: 100%;
}
.title{
	color: #666;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	margin: 0  0 15px 0;
}
.input{
	width: 100%;
	display: block;
	margin: 0 0 15px;
	height: 50px;
	font-size: 23px;
	padding: 0 15px;
	color: #0e1011;
	border: none;
	background-color: #23272a;
	color: #fff;
	border-radius: 3px;
}
.wrap{
	display: flex;
	justify-content: space-between;
}
.wrap .input-wrap{
	width: 30%;
}
@media all and (max-width: 1440px) {
	.com{
		padding: 30px 20px
	}
	.registered{
		font-size: 12px;
	}
	.profile{
		font-size: 12px;
		margin: 0 0 20px
	}
	.right{
		max-width: 435px
	}
	.avatar-wrap{
		max-width: 340px;
		height: 340px
	}
	.text{
		font-size: 14px;
	}
	.title{
		font-size: 12px;
	}
	.value{
		font-size: 14px;
	}
	.input{
		font-size: 16px;
	}
	.btn{
		height: 45px;
		font-size: 14px;
		max-width: 160px;
	}
}
</style>