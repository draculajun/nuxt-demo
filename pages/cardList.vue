/**
* 王文俊
* 2024年07月24日
*/
<template>
  <div>
    <el-table :data="pageInfo.tableData" style="width: 100%">
      <el-table-column label="name" prop="CardPackageName">
      </el-table-column>
      <el-table-column label="discountGoods" prop="DiscountGoods">
      </el-table-column>
    </el-table>
    <el-pagination  class="pagination_wrapper" layout="prev, pager, next"
                   :total="parseInt(pageInfo.total)"
                   :page-size.sync="pageSize"
                   :current-page.sync="currentPage"
                   @current-change="pageChangeHandler"/>
  </div>
</template>

<script setup>

import cardRepository from "~/repository/cardRepository.js";
import {reactive} from "vue";

let currentPage = ref(1);
let pageSize = ref(10);

let pageInfo = reactive({
  total: 0,
  tableData: [],
})

const pageQuery = computed(() => {
  return {
    page: currentPage.value,
    pageSize: pageSize.value,
  }
})

const {$api} = useNuxtApp();
let api = cardRepository($api);
let {data, status} = await useAsyncData(() => api.page(pageQuery.value))
if (status.value == 'success') {
  pageInfo.tableData = data.value.data.Data.Lists;
  pageInfo.total = data.value.data.Data.TotalNum;
} else {
  pageInfo.tableData = [];
  pageInfo.total = 0;
}


const pageChangeHandler = (page) => {
  currentPage.value = page;
}

watch(() => pageQuery, async (newVal) => {
   await api.page(newVal.value).then(res => {
      pageInfo.tableData = res.data.Data.Lists;
      pageInfo.total = res.data.Data.TotalNum;
    })
}, {deep: true})

</script>

<style scoped lang="scss">

</style>