<template>
	<div class="faq-com">
		<div class="faq-item-wrap" v-for="(item, i) in questions">
			<div class="faq-question" :class="{active: i === index}" @click="showAnswer(i)">
				{{item.q}}
			</div>
			<div class="faq-answer" :class="{active: i === answer}">
				{{item.a}}
			</div>
		</div>
	</div>
</template>
<script>
const questions = [
{'q': 'How to start play ?' ,'a': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed d'},
{'q': 'What is the minimum pee ?' ,'a': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d'},
{'q': 'How to start play ?' ,'a': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d'},
{'q': 'How to start play ?' ,'a': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d'},
{'q': 'How to start play ?' ,'a': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d'},
{'q': 'How to start play ?' ,'a': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d'},
{'q': 'How to start play ?' ,'a': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d'}
]
export default {
	data(){
		return{
			index: 0,
			answer: 0,
			questions: questions
		}
	},
	methods: {
		showAnswer(i){
			this.index = i;
			this.answer = i
		}
	},
	created () {
		this.$emit('questionsCount', this.questions.length)
	}
}
</script>
<style>
.faq-com{
	width: 100%;
}
.faq-item-wrap{
	margin: 0 0 25px 0 ;
}
.faq-question{
	/*background-color: #151a1f;*/
	padding: 0px 35px 25px 35px;
	border-bottom: 1px solid #272a2f;
	color: #fff;
	font-size: 16px;
	font-family: HelveticaNeueCyr-Bold, HelveticaNeueCyr;
	font-weight: bold;
	cursor: pointer;
}
.faq-question.active{
	border: none;
}
.faq-answer{
	display: none;
	line-height: 1.7;
	color: #969799;
	font-size: 18px;
	font-family: HelveticaNeueCyr-Roman, HelveticaNeueCyr;
	padding: 0px 35px 25px 35px;
}
.faq-answer.active{
	display: block;
	border-bottom: 1px solid #272a2f;
}
</style>