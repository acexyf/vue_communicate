<template>
  <div>
    <Child
      :notUse="'not-use'"
      :childMsg="childMsg"
      :grandChildMsg="grandChildMsg"
      @onChildMsg="onChildMsg"
      @onGrandChildMsg="onGrandChildMsg"
    ></Child>
  </div>
</template>
<script>
import Child from "./child";
export default {
  name: "way4",
  data() {
    return {
      childMsg: "hello child",
      grandChildMsg: "hello grand child"
    };
  },
  components: {
    Child
  },
  methods: {
    onChildMsg(msg) {
      this.childMsg = msg;
    },
    onGrandChildMsg(msg) {
      this.grandChildMsg = msg;
    }
  }
};
</script>
