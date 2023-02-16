<template>
  <div>
    <!-- 阻止默认提交
      语法:
            无传参, 通过形参直接接收
            传参, 通过$event指代事件对象传给事件处理函数 -->

    <a @click="one" href="http://www.baidu.com">百度</a>
    <br />
    <a @click="two(10, $event)" href="http://www.baidu.com">去组织百度</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {
    one(e) {
      e.preventDefault();
    },
    two(num, e) {
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
</style>