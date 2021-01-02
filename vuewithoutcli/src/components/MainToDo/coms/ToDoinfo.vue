<template>
	<div class="ToDoinfo">
		<span class="left">1 item left</span>
		<div class="tabs">
			<a v-for="(item,index) in states">{{item}}</a>

		</div>
		<button class="clear">Clear Completed</button>
	</div>
</template>

<script>
	export default{
		name:'ToDoinfo',
		data(){
			return{
				states:['all','active','completed'],
			}
		}
	}
</script>

<style lang="stylus" type="text/css" scoped>
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
		a{
			beforeBtn()
			transition-duration: 0.5s;
			&.actived{
				afterBtn()
			}
		}

	}
	.clear{
		infoBtn()
		cleanDefalutStyle();
	}
	



</style>