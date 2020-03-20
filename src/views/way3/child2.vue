<template>
  <div>
    <div class="send" @click="clickSend">发送消息</div>
    <template v-for="(item, index) in msgList">
      <div :key="index">{{ item }}</div>
    </template>
  </div>
</template>
<script>
import bus from "@/utils/eventBus";
export default {
  name: "Child2",
  data() {
    return {
      msgList: []
    };
  },
  mounted() {
    bus.$on("getMsg2", res => {
      this.msgList.push(res);
    });
  },
  methods: {
    clickSend() {
      bus.$emit("getMsg1", "hello" + parseInt(Math.random() * 20));
    }
  }
};
</script>
<style lang="scss" scoped></style>
