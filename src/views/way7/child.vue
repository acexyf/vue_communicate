<template>
  <div class="box">
    <div>child-msg:{{ childmsg }}</div>
    <div>grand-msg:{{ grandmsg }}</div>
    <GrandChild></GrandChild>
  </div>
</template>
<script>
import GrandChild from "./grand-child";
export default {
  name: "Child",
  inject: ["childmsg", "grandmsg"],
  components: { GrandChild },
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
