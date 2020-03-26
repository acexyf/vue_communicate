<template>
  <div class="box">
    <div @click="clickMsg">{{ childMsg }}</div>
    <div>$attrs: {{ $attrs }}</div>
    <GrandChild v-bind="$attrs" v-on="$listeners"></GrandChild>
  </div>
</template>
<script>
import GrandChild from "./grand-child";
export default {
  name: "Child",
  props: {
    childMsg: {
      type: String
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.$listeners);
  },
  inheritAttrs: false,
  methods: {
    clickMsg() {
      let { childMsg } = this;
      this.$emit(
        "onChildMsg",
        childMsg
          .split("")
          .reverse()
          .join("")
      );
    }
  },
  components: {
    GrandChild
  }
};
</script>
<style lang="scss" scoped>
.box {
  border: 1px solid #333;
  padding: 10px;
}
</style>
