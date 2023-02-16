<template>
  <!-- 修饰按键符
     语法:
 @keyup.enter - 监测回车按键
 @keyup.esc - 监测返回按键
   -->
  <div>
 <input type="text" @keydown.esc="esc">
 <input type="text" @keydown.enter="enter">
  </div>
</template>

<script>
export default {
  methods: {
    esc() {
    console.log("用户按下esc键");
    },
    enter() {
    console.log("用户按下enter键");
  }
 }
}
</script>

<style>

</style>