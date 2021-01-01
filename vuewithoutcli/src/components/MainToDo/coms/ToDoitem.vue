<template>
  <div class="todo-item">
    <input type="checkbox"/>
    <label>todo1</label>
    <button></button>
  </div>
</template>

<script >
	export default{
		name:'ToDoitem'
	}
</script>

<style lang="stylus" type="text/css">
	.todo-item{
		display: flex;
		justify-content: space-between;
		padding:10px;
	}
		input{
		appearance:none
		width: 50px
		height: 30px
		border: none
		outline: none
		}
	input::after{
			content: url('images/ok.jpg');
			width: 20px;
			height: 20px;
			overflow-wrap: hidden;
	}
		
	/*	&:checked:after
			content: url('~/images/ok.jpg')	*/
	label{
		flex: 1;
		/*flex:1;指子元素自动伸缩 填充满整个元素 并且会根据其他的兄弟按flex：1、2、3比例进行伸缩 这里把todo内容拉到最长是合理的*/
	}
	button{
		width:40px;
		background-color: transparent;
		appearance:none;

	}
</style>