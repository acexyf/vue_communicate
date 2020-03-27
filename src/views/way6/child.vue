<template>
  <div>初始化:{{ num }}</div>
</template>
<script>
export default {
  name: "Child",
  data() {
    return {
      num: 0
    };
  },
  methods: {
    addNum() {
      this.num += 1;
    },
    subNum() {
      this.num -= 1;
    }
  }
};
</script>
