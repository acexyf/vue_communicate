<template>
  <div>
    <div @click="clickRevert">点击更新字符串：{{ msg }}</div>
    <div>当前值：{{ num }}</div>
    <div @click="clickOpt('add')" class="opt">+</div>
    <div @click="clickOpt('sub')" class="opt">-</div>
  </div>
</template>
<script>
export default {
  name: "Child",
  props: {
    msg: {
      type: String,
      default: ""
    },
    num: {
      type: Number,
      default: 0
    }
  },
  methods: {
    clickRevert() {
      let { msg } = this;

      this.$emit(
        "update:msg",
        msg
          .split("")
          .reverse()
          .join("")
      );
    },
    clickOpt(type = "") {
      let { num } = this;
      if (type == "add") {
        num++;
      } else {
        num--;
      }
      this.$emit("update:num", num);
    }
  }
};
</script>
