<template>
  <div>grand-child-msg:{{ grandmsg }}</div>
</template>
<script>
export default {
  name: "GrandChild",
  inject: ["grandmsg"],
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
