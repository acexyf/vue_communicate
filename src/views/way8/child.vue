<template>
  <div>child</div>
</template>
<script>
export default {
  name: "Child",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$parent.show());
    console.log("Child", this.$children, this.$parent);
  }
};
</script>
