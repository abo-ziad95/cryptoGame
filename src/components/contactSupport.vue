<template>
	<div class="com">
		<app-header></app-header>
		<div class="row">
			<app-Aside></app-Aside> 
			<div class="contactSupport" >
				<div class="title">
					Contact Support
				</div>
				<div class="up-wrap">
					<div class="left">
						<form action="#" class="form">
							<div class="name input-wrap">
								<label class="name-label" for="name-input">
									First Name
								</label>
								<input type="text" id="name-input" class="name-input">
							</div>
							<div class="subject-wrap input-wrap">
								<label class="subject-label" for="subject-input">Subject</label>
								<input id="subject-input" class="subject-input">
							</div>
							<div class="message input-wrap">
								<label for="message-input"  class="subject-label">Message</label>
								<textarea name="text" id="message-input" class="message-input"></textarea>
							</div>
							<button  class="form-submit-btn">
								SEND
							</button>
						</form>
					</div>
					<div class="right">
						<div class="social">
							<div class="social-item">
								<div class="mail-img">
									<img src="../images/contacts/mail.png" alt="#">
								</div>	
								<div class="mail-address">
									<div class="mail-title">
										Write to us
									</div>
									<a href="mailto:battletrader@info.com" class="mail-link">battletrader@info.com</a>
									<a href="mailto:battletrader@info.com" class="mail-link">battletrader@info.com</a>
									<a href="mailto:battletrader@info.com" class="mail-link">battletrader@info.com</a>
								</div>	
							</div>
							<div class="line"></div>
							<div class="social-item">
								<div class="social-img img-right">
									<img src="../images/contacts/group.png" alt="#">
								</div>	
								<div class="mail-address">
									<div class="mail-title">
										We in social
									</div>
									<a href="#" class="mail-link">Facebook</a>
									<a href="#" class="mail-link">Instagram</a>
									<a href="#" class="mail-link">Telegram</a>
								</div>	
							</div>
						</div>
					</div>
				</div>
				<div class="Transaction">
					<div class="list-item" v-for="item in 2">
						<div class="state green">Resolved</div>
						<div class="id">
							<span class="list-item-title">ID</span>
							<span class="desc">2312121</span>
						</div>
						<div class="date">
							<span class="list-item-title">Open Date</span>
							<span class="desc">16:23, 01 oct 2018</span>
						</div>
						<div class="subject">
							<span class="list-item-title">Subject</span>
							<span class="desc">How to create a crypto currency portfolio?</span>
						</div>
						<div class="btn">
							<button class="btn-item">
								<span></span>
								<span></span>
								<span></span>
							</button>
						</div>
					</div>
				</div>
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
<style scoped>
.social-img.img-right{
	margin: 0 20px 0 60px
}
.social-address{
	display: flex;
	flex-direction: column;

}
.mail-title{
	color: #fff;
	font-size: 22px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	margin: 0 0 35px;
	padding: 5px 0 0 0 ;
}
.mail-link{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	margin: 0 0 30px;
}
.social-item{
	display: flex;
	max-width: 375px;
	width: 100%;
	padding: 10px 0  0 0;
}
.social{
	display: flex;
	height: 100%;
	justify-content: space-between;
}
.line{
	width: 1px;
	background-color: #21262a;
	height: 100%;
}
.mail-address{
	display: flex;
	margin: 0 0 0 30px;
	flex-direction: column;

}
.right{
	max-width: 850px;
	width: 100%;
	background-color: #151a1f;
	padding: 40px;
}
.up-wrap{
	display: flex;
	justify-content: space-between;
	max-height: 473px;
	margin: 0 0  30px ;
}
.form-submit-btn:disabled{
	cursor: default;
	background-color: #666;
}
.form-submit-btn{
	margin: 0 0 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	max-width: 200px;
	width: 100%;
	height: 60px;
	background-color: #6a68ff;
	border: none;
	outline: none;
	border-radius: 5px;
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
.form{
	padding: 30px 40px;
	background-color: #151a1f;
	width: 100%;
}
.left{
	max-width: 600px;
	width: 100%;
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
.subject-form{
	display: flex;
	justify-content: space-between;
	margin: 0 0 40px 0;
}
.subject-wrap{
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	position: relative;
	margin: 0 0 25px 0;
}
.message{
	display: flex;
	flex-direction: column;
	margin: 0 0 25px 0;
}
.subject-label{
	width: 100%;
	color: #616161;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	padding: 0 0 10px 0;
}
.subject-input{
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
.message-input{
	width: 100%;
	background-color: #23272a;
	color: #fff;
	font-size: 23px;
	padding: 15px;
	height: 100px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	border: 1px solid transparent;
	outline: none;
}

.title{
	color: #fff;
	font-family: Gotham-Bold;
	font-size: 	30px;
	margin:  0 0 30px;
}
.contactSupport{
	width: 100%;
	background-color: #101217;
	padding: 145px 30px 65px 30px;
	position: relative;
}
.row{
	display: flex;
}
.com{
	width: 100%;
}
.list-item{
	padding: 25px 35px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #151a1f;
	margin: 0 0 20px;
}
.list-item-title{
	color: #515253;
	padding: 0 0 10px;
	width: 100%;
	font-size: 16px;
	font-family:  HelveticaNeueCyr-Roman, HelveticaNeueCyr;
}
.state{
	max-width: 180px;
	width: 100%;
	height: 55px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-size: 18px;
	font-weight: bold;
	border-radius: 3px;
}
.state.red{
	background-color: #8b1e21;
	color: #e42122;
}
.state.green{
	color: #4fcd2c;
	background-color: #347c25;
}
.state.yallow{
	color: #d9bf28;
	background-color: #776d23;
}
.id{
	max-width: 80px;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.desc{
	color: #fff;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Medium, HelveticaNeueCyr;
}
.desc.red{
	color: #d02021
}
.date{
	max-width: 180px;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.subject{
	display: flex;
	flex-direction: column;
	max-width: 550px;
	width: 100%;
}
.btn-item{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: transparent;
	width: 20px;
	outline: none;
	height: 50px;
	cursor: pointer;
	padding: 0;
	border: none;
}
.btn-item span{
	width: 10px;
	height: 10px;
	border-radius: 100%;
	background-color: #fff;
}
@media all and (max-width: 1440px) {
	.contactSupport{
		padding: 110px 20px 65px 20px;
	}
	.left{
		max-width: 455px;
	}
	.right{
		max-width: 650px;
		padding: 30px;
	}
	.social-item{
		max-width: 275px;
	}
	.mail-title{
		margin: 0 0  25px;
		font-size: 18px;
	}
	.mail-link{
		margin: 0 0 25px;
		font-size: 14px;
	}
	.social-img.img-right{
		margin: 0 20px 0 25px;
	}
	.name-label{
		font-size: 12px;
	}
	.form-submit-btn{
		height: 50px;
		max-width: 160px;
		font-size: 14px;
	}
	.subject-label{
		font-size: 12px;
	}
	.message-input{
		font-size: 18px;
	}
	.subject-input{
		font-size: 18px;
	}
	.name-input{
		font-size: 18px;
	}
	.list-item{
		padding: 22px 25px
	}
	.state{
		height: 45px;
		max-width: 160px;
		font-size: 14px;
	}
	.list-item-title{
		font-size: 12px;
	}
	.desc{
		font-size: 15px;
	}
	.subject{
		max-width: 500px;
	}
	.title{
		font-size: 24px;
		margin: 0 0  20px;
	}
}
</style>