<template>
  <!-- 
     语法
 @事件名.修饰符="methods里函数"
修饰符列表
 .stop - 阻止事件冒泡
 .prevent - 阻止默认行为
 .once - 程序运行期间, 只触发一次事件处理函数

   -->
  <div>
    <div @click="fatherFn">
        <button @click.stop.prevent.once="oneFn">阻止冒泡事件</button>
        <button @click.stop="twoFn">阻止冒泡事件</button>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    fatherFn() {
      console.log("father出发了事件");
    },
    oneFn() {
    console.log("组织起执行");
    },
    twoFn() {
    console.log("ddddd");
   }
  },
};
</script>

<style lang="scss" scoped>

</style>