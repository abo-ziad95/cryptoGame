<template>
	<div class="com">
		<form action="#" class="form">
			<div class="title">
				Create game {{ game }}
			</div>
			<div class="name input-wrap" :class="{invalid: $v.name.$error}">
				<label class="name-label" for="name-input">
					Name your game
				</label>
				<input type="text" id="name-input" class="name-input" v-model="name" @blur="$v.name.$touch()">
				<div class="input-error" v-if="!$v.name.required">This fiel must not be empty</div>
			</div>
			<div class="desc">
				<div class="deposit input-wrap" :class="{invalid: $v.deposit.$error}">
					<label class="desc-label" for="deposit-input">Deposit from player</label>
					<input id="deposit-input" class="desc-input" v-model="deposit" @blur="$v.deposit.$touch()">
					<div class="input-error" v-if="!$v.deposit.between">Must be between 20 and 30</div>
					<div class="input-error" v-if="!$v.deposit.required">This fiel must not be empty</div>
				</div>
				<div class="time input-wrap" :class="{invalid: $v.time.$error}">
					<label for="time-input"  class="desc-label">Play time</label>
					<input type="time" id="time-input" class="desc-input" v-model="time" @blur="$v.time.$touch()">
					<div class="input-error" v-if="!$v.time.required">This fiel must not be empty</div>
				</div>
			</div>
			<button  class="form-submit-btn" @click="changeStep" :disabled="this.$v.$invalid" >
				Create game
			</button>
		</form>
	</div>
</template>

<script>
import { required, minLength, between  } from 'vuelidate/lib/validators'
import { helpers } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Z]*$/)
export default {
	props: ['game'],
	data() {
		return {
			name: '',
			deposit: 0,
			time: '',
			validated: false
		}
	},
	methods: {
		changeStep(e){
			e.preventDefault()
			let data = {
				nameGame: this.name,
				deposit: this.deposit,
				time: this.convertMilliseconds(this.time)
			}
			this.$emit('createGame', data)
		},
		convertMilliseconds(time){
			let newData = time.split(":"),
					hours = Number(newData[0]),
					minutes = Number(newData[1])
					console.log((hours * 3600000 ) + (minutes * 60000))
			return (hours * 3600000 ) + (minutes * 60000)
		}
	},
	validations: {
		name:{
			required,
			minLength: minLength(4),
			alpha
		},
		deposit:{
			required,
			between: between(20, 30)
		},
		time:{
			required,
		}
	}
}
</script>
<style scoped>
.form-submit-btn:disabled{
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
	opacity: 1;
	visibility: visible;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.input-error{
	opacity: 0;
	position: absolute;
	bottom: -20px;
	left: 0;
	width: 100%;
}
.com{
	width: 100%;
	margin: 55px 0  0 0 ;
}
.form{
	padding: 40px 40px 50px 40px;
	background-color: #151a1f;
	max-width: 725px;
	width: 100%;
	margin: 0 auto;
}
.title{
	color: #fff;
	font-size: 22px;
	font-family: Gotham-Bold;
	margin: 0 0 30px 0;
}
.name{
	margin: 0 0 25px 0;
	display: flex;
	flex-wrap: wrap;
	position: relative;
}
.name-label{
	width: 100%;
	color: #616161;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	padding: 0 0 10px 0;
}
.name-input{
	width: 100%;
	background-color: #23272a;
	color: #fff;
	font-size: 23px;
	padding: 0 15px;
	height: 50px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	border: 1px solid transparent;
	outline: none;
}
.desc{
	display: flex;
	justify-content: space-between;
	margin: 0 0 40px 0;

}
.deposit, .time{
	display: flex;
	flex-wrap: wrap;
	width: 48%;
	position: relative;
}
.desc-label{
	width: 100%;
	color: #616161;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	padding: 0 0 10px 0;
}
.desc-input{
	width: 100%;
	background-color: #23272a;
	color: #fff;
	font-size: 23px;
	padding: 0 15px;
	height: 50px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	border: 1px solid transparent;
	outline: none;
}
.desc-input::-webkit-outer-spin-button,
.desc-input::-webkit-inner-spin-button {
	/* display: none; <- Crashes Chrome on hover */
	-webkit-appearance: none;
	margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
.form-submit-btn{
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #6a68ff;
	border: none;
	outline: none;
	border-radius: 25px;
	max-width: 170px;
	width: 100%;
	height: 50px;
	cursor: pointer;
	color: #fff;
}
@media all and (max-width: 1440px) {
	.form{
		max-width: 550px;
		padding: 30px;
	}
	.title{
		font-size: 18px;
		margin: 0 0 25px;
	}
	.name-label{
		font-size: 12px;
	}
	.name-input{
		font-size: 18px;
	}
}
</style>