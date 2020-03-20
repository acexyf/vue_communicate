<template>
  <div>
    <template v-for="(item, index) in list">
      <div @click="clickItem(index)" :key="index">{{ item }}</div>
    </template>
  </div>
</template>
<script>
export default {
  name: "Child",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    clickItem(index) {
      this.$emit("change", index);
    }
  }
};
</script>
