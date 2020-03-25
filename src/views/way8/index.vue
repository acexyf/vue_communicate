<template>
  <div>
    parent
    <Child></Child>
    <Child></Child>
  </div>
</template>
<script>
import Child from "./child";
export default {
  name: "way8",
  components: { Child },
  data() {
    return {};
  },
  mounted() {
    console.log(this.$children);
  },
  methods: {
    show() {
      return "to child data";
    }
  }
};
</script>
