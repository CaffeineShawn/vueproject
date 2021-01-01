<template>
	<header class="main-header">
		<h1>TodoList</h1>
	</header>
</template>

<script>
	export default {
		name:'MainHeader'
	}
//import './color.stylus'引入没问题
</script>

<style lang="stylus" scoped>
 @import '~styles/color.stylus'
.main-header{
	text-align: center
}
h1{ 
	font-size:100px;
	font-weight:100;
	 color:$red;
	text-shadow: 5px 5px 5px rgba(0,0,0,0.1);
}

</style>