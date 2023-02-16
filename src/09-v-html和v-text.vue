<template>
  <div>
     <p v-html="str"></p>   
     <p v-text="str"></p>     
  </div>
</template>

<script>
export default {
  data() {
    return {
      str:'<span>啦啦啦</span>'
    };
  },
};
</script>

<style  scoped>

</style>