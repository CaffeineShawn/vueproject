<template>
	<div>
		<main-header></main-header>
		<main-to-do></main-to-do>
		<!-- <ComponentA/> -->
	</div>
</template>

<script>
	
var ComponentA = {
		 data: function () {return {
			count: 0
		}}
		,
		template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
	}


import './assets/styles/global.stylus'
import MainHeader from './components/MainHeader.vue'
import MainToDo from './components/MainToDo/MainToDo.vue'
export default {
	name: 'App',
	components:{
			//组件名：组件对象
			MainHeader,
			MainToDo,
			ComponentA
		}

	}
</script>

<style lang="stylus" scoped>

</style>