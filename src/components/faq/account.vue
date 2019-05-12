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
		console.log(this.questions.length)
		this.$emit('questionsCount', this.questions.length)
	}
}
</script>
<style>

</style>