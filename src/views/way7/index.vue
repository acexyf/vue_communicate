<template>
  <div>
    <Child></Child>
  </div>
</template>
<script>
import Child from "./child";
import { setTimeout } from "timers";
export default {
  name: "way7",
  components: { Child },
  data() {
    return {
      childmsg: "hello child",
      grandmsg: "hello grand child"
    };
  },
  provide() {
    return {
      childmsg: this.childmsg,
      grandmsg: this.grandmsg
    };
  },
  mounted() {
    setTimeout(() => {
      this.childmsg = "hello new child";
      this.grandmsg = "hello new grand child";
    }, 2000);
  },
  methods: {}
};
</script>
