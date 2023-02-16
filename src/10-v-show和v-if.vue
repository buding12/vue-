<template>
  <div>
    <h1 v-show="isShow">我是谁</h1>
    <h1 v-if="isOk">我是谁??</h1>
    <!-- 
      v-show隐藏：采用dispaly:none
      v-if隐藏  ：从DOM树移除
     -->

     <!-- v-if和v-else使用 -->
     <p v-if="age >18">成年了</p>
     <p v-else>未成年</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      isOk: false,
      age:2
    };
  },
};
</script>

<style scoped>

</style>