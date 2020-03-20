<template>
  <div class="box">
    <Child1></Child1>
    <Child2></Child2>
  </div>
</template>
<script>
import Child1 from "./child1";
import Child2 from "./child2";

export default {
  name: "way3",
  components: {
    Child1,
    Child2
  }
};
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-around;
}
</style>
