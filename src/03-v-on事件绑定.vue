<template>
  <div>
    <!-- 1.语法：
            v-on:事件名=“要执行的少量代码"
            v-on:事件名=“methods中的函数名"
            v-on:事件名=“methods中的函数名(实参)"  -->
  <p>你购买的商品数量：{{count}}</p>
  <button v-on:click="count +=1">+1</button>
  <button v-on:click="addFn">+1</button>
  <button v-on:click="addCountFn(5)">+5</button>
  <button @click="supAFn">-1</button>
  </div>
</template>

<script>
export default {
// 1.data 函数，返回值里面绑定属性
  data() {
    return {
      count:0
    };
  },
// 2.methods 是一个对象，里面可以是函数
  methods: {
    addFn() {
      this.count++
    },
    addCountFn(num) {
      this.count+= num
    },
    supAFn() {
      this.count --
    }
  },
};
</script>

<style lang="scss" scoped>

</style>