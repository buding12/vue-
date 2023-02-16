<template>
  <div>
    <p>{{ say }}</p>
    <button @click="fn">按我反转</button>
  </div>
</template>

<script>
export default {
  name: "VuecliDemoApp",

  data() {
    return {
      say: "我想对你说",
    };
  },

  methods: {
    fn() {
      //先分割字符串，再反转，最后拼接。然后再重新赋值给this.say/ this.say/reverse 数组取反
      this.say = this.say.split("").reverse().join("");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>