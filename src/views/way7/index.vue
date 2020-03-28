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
      grandmsg: "hello grand child",
      respondData: {
        name: "hello respond"
      }
    };
  },
  provide() {
    return {
      childmsg: this.childmsg,
      grandmsg: this.grandmsg,
      respondData: this.respondData
    };
  },
  mounted() {
    setTimeout(() => {
      this.childmsg = "hello new child";
      this.grandmsg = "hello new grand child";
      this.respondData.name = this.respondData.name
        .split("")
        .reverse()
        .join("");
    }, 2000);
  },
  methods: {}
};
</script>
