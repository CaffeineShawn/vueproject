<template>
	<div class="main-to-do">
		<input class="add-to-do" type="text" placeholder="what to do?" autofocus
		@keyup.enter="addTodo" v-model = "content" />
		<ToDoitem v-for="(item,index) in filterData":key="index" :todo="item" @del="handleDeleteItem"
		></ToDoitem>
		<ToDoinfo :total = "total"  @toggleState="handleToggleState" @deleteAll="deleteAll"/>
	</div>
</template>

<script type="text/javascript">
	import ToDoitem from '/src/components/MainToDo/coms/ToDoitem.vue'
	let id = 0;
	import ToDoinfo from './coms/ToDoinfo.vue'
	export default {
		name:'MainToDo',
		data(){
			return{
				todoData:[],
				content:'',
				total: 0,
				filter: 'all'//当前显示状态为显示所有
			}
			
		},
		methods:{
			addTodo(){
				//  1:获取内容 所以先要用v-model绑定数据到data
				// 因此要在data()搞一个content
				if(this.content =='') return 
				// 2:将值插入到数组头部
			this.todoData.unshift({
				id:id++,
				content:this.content,
				completed:false,
			})
				// 3:将源数据清空
				this.content = '';
			},
			handleDeleteItem(id){
				//this.todoData.splice(id,1)
				// 这是删除数组的普通做法
				// 但是，会导致删除后新增的元素和下标对不上从而删除失败
				this.todoData.splice(
					this.todoData.findIndex(item => item.id ===id),1)
			},
			handleToggleState(state) {//记录子组件的显示需求 改变data 从而通过computed改变显示数组(computed里的东西可以直接当data用 关注return值即可)
				this.filter = state
			},
			deleteAll(){
				this.todoData = []
			}
		},
		watch:{
			todoData: {
				deep: true,
				handler() {
					this.total = this.todoData.filter(
						item => item.completed == false
						).length
				}
			}
		},
		computed: {//对filter进行处理
			filterData() {
				switch (this.filter) {
					case 'all':
					return this.todoData
					break
					case 'active':
					return this.todoData.filter(item => item.completed == false)
					break
					case 'completed':
					return this.todoData.filter(item => item.completed == true)
					break
				}
			}
		},
		components:{
			ToDoitem,
			ToDoinfo
		},
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