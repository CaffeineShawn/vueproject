<template>
	<div :class="['todo-item',todo.completed?'completed': '']">
		<input type="checkbox" v-model = 'todo.completed'/>
		<label>{{todo.content}}</label>
		<button @click="delItem"></button>
	</div>
</template>

<script >

	export default{
		name:'ToDoitem',
		props:{
			todo:Object
		},
		methods: {
			delItem() {
				this.$emit('del', this.todo.id);
				// 提供监听 并传值
			}
		}
	}
</script>

<style lang="stylus" type="text/css">
@import '~styles/color.stylus'
@import '~styles/mixins.styl'
.todo-item{
	display: flex;
	justify-content: space-between;
	padding:10px;
	font-size: 24px;

	&:hover{
		button:before{
			/*注：这里after和before相同 都是放在按钮中心*/
			content: 'x'
			font-size 24px
			color $lightred
		}
	}
}
&.completed{/*这里指选择自定义类 只要添加这个类就有效果*/
	/*被划掉的样式*/
	label{
		color: #D9D9D9
		text-decoration:line-through;
	}
}
input{
	/*appearance:none*/
	width: 50px
	height: 30px
	cleanDefalutStyle()
}
input:checked{
	/*content: url('images/ok.jpg');*/
}


	/*	&:checked:after
	content: url('~/images/ok.jpg')	*/
	label{
		flex: 1;
		/*flex:1;指子元素自动伸缩 填充满整个元素 并且会根据其他的兄弟按flex：1、2、3比例进行伸缩 这里把todo内容拉到最长是合理的*/
		transition:color 0.4s;
		/*过渡效果*/
	}
	button{
		width:40px;
		background-color: transparent;
		cleanDefalutStyle()
		outline: none;
		cursor: pointer;/*小手指*/
	}

</style>