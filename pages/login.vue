<script setup lang="ts">
let loginStr = ref('login');
onMounted(() => {
  const route = useRoute();
  if (route.query.code) {
    ElMessage.error(route.query.code + '-' + route.query.msg);
  }
});
</script>

<template>
  <div>
    <h1>{{ loginStr }}</h1>
  </div>
</template>
