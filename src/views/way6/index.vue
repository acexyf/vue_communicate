<template>
  <div>
    <Child ref="child"></Child>
    <div class="opt" @click="clickAddBtn">+</div>
    <div class="opt" @click="clickShowBtn">show</div>
  </div>
</template>
<script>
import Child from "./child";
export default {
  name: "way6",
  components: { Child },
  data() {
    return {};
  },
  methods: {
    clickAddBtn() {
      this.$refs.child.addNum();
    },
    clickShowBtn() {
      console.log(this.$refs.child.num);
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
