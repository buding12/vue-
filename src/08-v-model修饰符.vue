<template>
  <div>
    <div>
      <span>年龄</span>
      <!-- number修饰符，把值parseFloat转数值再赋予给
    v-model对应变量 -->
      <input type="number" v-model.number="age" />
    </div>
    <div>
      <!-- .trim去除首尾空格 -->
      <span>人生格言</span>
      <input type="text" v-model.trim="motto">
    </div>
    <div>
      <!-- .lazy 修饰符 --失去焦点内容改变时（change事件），把内容同步给v-model的变量 -->
      <span>个人简介</span>
      <textarea v-model.lazy="intro"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 0,
      motto: '',
      intro:''
    };
  },

  methods: {},
};
</script>

<style scoped>
</style>