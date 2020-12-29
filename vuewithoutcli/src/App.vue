<template>
	<div>
		<main-header></main-header>
	</div>
</template>

<script>
	import './assets/styles/global.stylus'
	import MainHeader from './components/MainHeader.vue'
	export default {
		name: 'App',
		components:{
			//组件名：组件对象
			MainHeader
		}

	}
</script>

<style lang="stylus" scoped>

</style>