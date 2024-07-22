<template>
  <div>
    <h1>Hello from App.vue</h1>
    <h2>color</h2>
    <el-button>ok</el-button>
  </div>
</template>

<script setup lang="ts">

const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);

</script>

<style lang="scss" scoped>
h2 {
  color: $globalColor;
}
</style>