<template>
  <div>
    <Child :msg.sync="msg" :num.sync="num"></Child>
  </div>
</template>
<script>
import Child from "./child";
export default {
  name: "way2",
  components: {
    Child
  },
  data() {
    return {
      msg: "hello every guys",
      num: 0
    };
  }
};
</script>
<style lang="scss" scoped></style>
