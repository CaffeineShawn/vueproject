<template>
  <div>
  	<h1>TodoList</h1>
  	<input type="text" v-model="content" />
  	<button @click = "addTodo" >添加</button>
  	<ul>
  		<li v-for="(item,index) of toDoData" :key="index" >{{item}}</li>
  	</ul>
  </div>

</template>

<script>
import './assets/styles/global.stylus'
export default {
  name: 'App',
  data(){
  	return{
  		toDoData:["todo1","todo2"],
  		content:''
  	}
  },
  methods:{
  	//方法写函数，这里是为了获取text的文本内容 所以text要给个双向绑定
  	addTodo(){
  		if(this.content==="") return

  			this.toDoData.push(this.content)

  			this.content =''
  	}
  }
}
</script>

<style lang="stylus" scoped>
	li:nth-of-type(odd)
		color:blue
</style>