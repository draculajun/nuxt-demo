<script setup lang="ts">
import digitalmallRepository from "~/repository/digitalmallRepository";

let page = ref(1);
let size = ref(8);
let productInfo = ref("");
let data = ref("");

composablesTest();

// 设置pageMeta，在layouts/default.vue中设置useHead的meta，用来优化SEO
definePageMeta({
  title: 'Nuxt-Demo-Title'
})

const search = async () => {
  const {$api} = useNuxtApp();
  const dmRepo = digitalmallRepository($api);
  productInfo.value = await useAsyncData(() => dmRepo.productPageList({
    page: page.value,
    size: size.value,
  }))
}

</script>

<template>
  <h1>Index</h1>
  <div>
    <el-input v-model="page" label="page">search</el-input>
    <el-button @click="search">search</el-button>
  </div>
  <h3>userInfo: {{ productInfo }}</h3>
  <AppAlert>
    This is an auto-imported component
  </AppAlert>
</template>


