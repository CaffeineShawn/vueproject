// 从vue包中导入Vue对象
import Vue from 'vue'

// 注册App组件对象
import App from './App.vue'
import './assets/styles/test.css'
// 创建Vue根实例
/*将这个Vue实例挂载到#app(DOM元素)上
components：使用上面注册的App组件 注册为同名
template：使用上述同名组件标签
会自动寻找组件里的模板
名为App的组件=>App对象=>App.vue=>template内容

*/
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})