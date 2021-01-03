<template>
	<div class="ToDoinfo">
		<span class="left">{{total}} item left</span>
		<div class="tabs">
			<a class="btn border" v-for="(item,index) in states" @click="toggleState(item)">{{item}}</a>

		</div>
		<button class="btn info">Clear Completed</button>
	</div>
</template>

<script>
	export default{
		name:'ToDoinfo',
		props: {
			total: Number
		},
		data(){
			return{
				states:['all','active','completed'],
				state: 'all'
			}
		},
		methods: {
			toggleState(state) {
				this.state = state
				this.$emit('toggleState', state)//告诉父组件我需要要什么
			}
		}
	}
</script>

<style lang="stylus" type="text/css" >
@import '~styles/color.stylus'
@import '~styles/mixins.styl'
.ToDoinfo{
	display: flex;
	justify-content: space-between;
	font-weight: 400;
	padding: 5px 10px;/*左右给5 上下给10*/
	line-height: 30px;
	border-top: 1px solid $lightgreen;
}
.left{
	color: $red;
}
.tabs{
	display: flex;
	justify-content: space-around;
	width: 200px;
}
.border.btn{
	beforeBtn()
	transition-duration: 0.5s;
	&.actived{
		afterBtn()
	}
}

.btn.info{
	infoBtn()
	cleanDefalutStyle();
}




</style>