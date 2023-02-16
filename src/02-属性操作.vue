<template>
  <div>
    <!-- 1.{{}} 放在双闭合标签内部内容使用 -->
    <!-- <h1>{{ msg }}</h1>
    <h1>{{ obj.name }}</h1>
    <h1>{{ obj.age >= 18 ? "成年" : "未成年" }}</h1> -->

    <!-- 2.vue指令 -- v-bind：设置数据变量 -->
    <!-- 语法：v-bind:原生属性值='vue变量' -->
   <a v-bind:href="url">点击去百度</a>
   <!-- 语法 ：属性值 =“vue变量名” -->
   <img :src="imgurl" >
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      // 1.变量在data函数return的对象上
      // msg: "hello word",
      // obj: {
      //   name: "杨洋",
      //   age: 32,
      // },
      // 2.
      url: 'http://www.baidu.com',
      imgurl:'http://yun.itheima.com/Upload/./Images/20230215/63ecafa5769c2.png'
    };
  },
};
</script>

<style>
</style>