<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
body {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.opt {
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  margin: 10px 20px 0 0;
  cursor: pointer;
  font-size: 26px;
}
</style>
