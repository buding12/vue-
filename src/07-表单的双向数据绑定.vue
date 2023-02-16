<template>
  <div>
    <span>用户名：</span>
    <!-- v-model：实现双向绑定的数据值 -->
    <input type="text" v-model="uname">
    <span>密码：</span>
    <input type="password" v-model="password">
    <span>来自于：</span>
    <select  v-model="from">
         <option value="北京市">北京</option>
         <option value="北京市">北京</option>
         <option value="北京市">北京</option>
    </select>
    <span>爱好：</span>
    <input type="checkbox" v-model="hobby" value="吃饭">吃饭
    <input type="checkbox" v-model="hobby" value="睡觉">睡觉
    <input type="checkbox" v-model="hobby" value="打豆豆">打豆豆

    <div>
      <span>性别：</span>
      <input type="radio" v-model="gender" value="男" name="sex">男
      <input type="radio" v-model="gender" value="女" name="sex">女
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: '',
      password: '',
      from: '',
      hobby: [],
      gender: '', 
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>

</style>