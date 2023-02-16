<template>
  <div>
    <!-- 1.{{}} 放在双闭合标签内部内容使用 -->
    <h1>{{ msg }}</h1>
    <h1>{{ obj.name }}</h1>
    <h1>{{ obj.age >= 18 ? "成年" : "未成年" }}</h1>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      //1.变量在data函数return的对象上
       msg: "hello word",
       obj: {
        name: "杨洋",
        age: 32,
       },
  
    };
  },
};
</script>

<style>
</style>