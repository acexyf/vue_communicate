<template>
  <div>
    <div>当前：{{ num }}</div>
    <div class="opt" @click="clickAdd">+</div>
    <div class="opt" @click="clickSub">-</div>
    <div class="opt" @click="clickAddSync">a+</div>
    <div class="opt" @click="clickSubSync">a-</div>
  </div>
</template>
<script>
export default {
  name: "Child",
  computed: {
    num() {
      return this.$store.state.count.num;
    }
  },
  methods: {
    clickAdd() {
      this.$store.commit("count/ADD_NUM");
    },
    clickSub() {
      this.$store.commit("count/SUB_NUM");
    },
    clickAddSync() {
      this.$store.dispatch("count/ADD_SYNC");
    },
    clickSubSync() {
      this.$store.dispatch("count/SUB_SYNC");
    }
  }
};
</script>
