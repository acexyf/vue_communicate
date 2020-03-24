<template>
  <div>
    <div>当前：{{ num }}</div>
    <div class="opt" @click="clickAdd">+</div>
    <div class="opt" @click="clickSub">-</div>
  </div>
</template>
<script>
export default {
  name: "Child",
  computed: {
    num() {
      return this.$store.state.count.num;
    }
  },
  methods: {
    clickAdd() {
      this.$store.commit("count/ADD_NUM");
    },
    clickSub() {
      this.$store.commit("count/SUB_NUM");
    }
  }
};
</script>
<style lang="scss" scoped>
.opt {
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  margin: 10px 20px 0 0;
  cursor: pointer;
  font-size: 26px;
}
</style>
