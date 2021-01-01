<template>
	<div class="main-to-do">
		<input class="add-to-do" type="text" placeholder="what to do?" autofocus />
		<ToDoitem></ToDoitem>
		<!-- template里使用自定义组件需要在export中注册组件 -->
	</div>
</template>

<script type="text/javascript">
	import ToDoitem from '/src/components/MainToDo/coms/ToDoitem.vue'
	export default {
		name:'MainToDo',
		components:{
			ToDoitem
		}
	}


</script>

<style lang="stylus" scoped>
.main-to-do{
	margin: 0 auto;
	width:600px;
	background-color: #fff;
	box-shadow: 0 0 5px #666;
}
.add-to-do{
	padding: 30px 16px 30px 26px;//上右下左
	width: 100%;
	font-size: 20px;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	border: none;
	outline: none;
	box-sizing: border-box;
	// border-box 指padding和margin也算进该盒子的宽度
	// 这样就不会由于设置了内边距而产生位置偏移了
}
</style>