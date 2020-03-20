<template>
  <div>
    当前选中：{{ current }}
    <Child :list="list" @change="changeCurrent"></Child>
  </div>
</template>
<script>
import Child from "./child";
export default {
  name: "way1",
  data() {
    return {
      current: 0,
      list: ["红楼梦", "水浒传", "三国演义", "西游记"]
    };
  },
  components: {
    Child
  },
  methods: {
    changeCurrent(num) {
      this.current = num;
    }
  }
};
</script>
