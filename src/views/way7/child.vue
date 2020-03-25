<template>
  <div class="box">
    child-msg:{{ childmsg }}
    <GrandChild></GrandChild>
  </div>
</template>
<script>
import GrandChild from "./grand-child";
export default {
  name: "Child",
  inject: ["childmsg"],
  components: { GrandChild },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
