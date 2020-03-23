<template>
  <div class="box1" @click="clickMsg">grand-child:{{ grandChildMsg }}</div>
</template>
<script>
export default {
  name: "GrandChild",
  props: {
    grandChildMsg: {
      type: String
    }
  },
  methods: {
    clickMsg() {
      let { grandChildMsg } = this;
      this.$emit(
        "onGrandChildMsg",
        grandChildMsg
          .split("")
          .reverse()
          .join("")
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.box1 {
  border: 1px solid #ff7f27;
  padding: 10px;
}
</style>
