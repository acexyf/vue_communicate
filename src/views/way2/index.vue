<template>
  <div>
    <Child :msg.sync="msg" :list.sync="list"></Child>
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
      list: [{ name: "好" }, { name: "好" }, { name: "学" }, { name: "习" }]
    };
  },
  methods: {}
};
</script>
