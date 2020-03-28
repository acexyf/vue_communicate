<template>
  <div class="box">
    <div>child-msg:{{ childmsg }}</div>
    <div>grand-msg:{{ grandmsg }}</div>
  </div>
</template>
<script>
export default {
  name: "GrandChild",
  inject: ["childmsg", "grandmsg"],
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.box {
  border: 1px solid #333;
  margin: 10px;
  padding: 10px;
}
</style>
