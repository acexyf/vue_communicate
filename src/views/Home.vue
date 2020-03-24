<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="way_btn" @click="clickBtn(1)">方式一、prop和$emit</div>
    <div class="way_btn" @click="clickBtn(2)">方式二、sync</div>
    <div class="way_btn" @click="clickBtn(3)">方式三、EventBus</div>
    <div class="way_btn" @click="clickBtn(4)">方式四、$attrs和$listeners</div>
    <div class="way_btn" @click="clickBtn(5)">方式五、Vux</div>
    <div class="way_btn" @click="clickBtn(6)">方式六、Ref</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    clickBtn(index = 1) {
      this.$router.push({
        name: "way" + index
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.way_btn {
  color: #333;
  font-size: 30px;
  cursor: pointer;
  margin: 20px 0;
}
</style>
