/**
* 王文俊
* 2024年07月23日
*/
<template>
  <h1>AppHeader</h1>
  <ul class="header">
    <li>
      <NuxtLink to="/">index</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/login">login</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about">about</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/userEdit">userEdit</NuxtLink>
    </li>
  </ul>

  <!-- <div>
    <p>Current route: {{ route.path }}</p>
    <el-button @click="openLogin">openLogin</el-button>
    <el-button @click="openAbout">openAbout</el-button>
  </div>-->
</template>

<script setup>

const runtimeConfig = useRuntimeConfig();
// console.log(runtimeConfig);

// 命令式导航
// const openLogin = () => {
//   // const router = useRouter();
//   // router.push('/login');
//   navigateTo('/login');
// }
//
// const openAbout = () => {
//   navigateTo('/about');
// }
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    list-style: none;
  }
}

h2 {
  color: $globalColor;
}
</style>