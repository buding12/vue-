import Vue from 'vue'  //引入vue对象，类似于<script src='vue.js'></script>
import App from './App.vue'  // App.vue文件里对象引入过来（vue项目页面入口）
 
Vue.config.productionTip = false  //在控制台有一句含义

new Vue({  //开始实例化
  render: h => h(App),  //渲染页面
}).$mount('#app')     //渲染到index.html文件里id叫app的标签
