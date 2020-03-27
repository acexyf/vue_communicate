<template>
  <div>
    <Child ref="child"></Child>
    <div class="opt" ref="opt_add" @click="clickAddBtn">+</div>
    <div class="opt" ref="opt_sub" @click="clickSubBtn">-</div>
    <div class="opt" ref="opt_show" @click="clickShowBtn">show</div>
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
    clickSubBtn() {
      this.$refs.child.subNum();
    },
    clickShowBtn() {
      console.log(this.$refs.child);
      console.log(this.$refs.child.num);
    }
  }
};
</script>
<style lang="scss" scoped>
.opt {
  font-size: 14px;
}
</style>
