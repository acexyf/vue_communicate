<template>
  <div>
    <div @click="clickRevert">点击更新字符串：{{ msg }}</div>
    <div>点击插入随机字符串</div>
    <template v-for="(item, index) in list">
      <div :key="index" @click="clickInsert(index)">{{ item.name }}</div>
    </template>
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
    list: {
      type: Array,
      default() {
        return [];
      }
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
    clickInsert(index = 0) {
      let { list } = this;
      list[index].name += parseInt(Math.random() * 10);
      console.log(list);
      this.$emit("update:list", list);
    }
  }
};
</script>
