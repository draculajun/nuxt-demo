/**
* 王文俊
* 2024年07月24日
*/
<template>
  <div>
    {{pageInfo.tableData}}
    <el-table :data="pageInfo.tableData" style="width: 100%"
              @current-change="pageChangeHandler">
      <el-table-column label="name" prop="CardPackageName">
      </el-table-column>
      <el-table-column label="discountGoods" prop="DiscountGoods">
      </el-table-column>
    </el-table>
    <el-pagination small class="pagination_wrapper" layout="prev, pager, next"
                   :total="parseInt(pageInfo.total)"
                   :page-size="pageInfo.pageSize"
                   :current-page.sync="pageInfo.page"
                   @current-change="pageChangeHandler"/>
  </div>
</template>

<script setup>

import cardRepository from "~/repository/cardRepository.js";
import {reactive} from "vue";

let pageInfo = reactive({
  page: 1,
  pageSize: 10,
  total: 0,
  tableData: [],
})

const pageQuery = computed(() => {
  return {
    page: pageInfo.page,
    pageSize: pageInfo.pageSize,
  }
})

const {$api} = useNuxtApp();
await useAsyncData(() => cardRepository($api).page(pageQuery.value), {
  watch: [pageQuery],
}).then(res => {
  debugger
  pageInfo.tableData = res.data.value.data.Data.Lists;
  pageInfo.total = res.data.value.data.Data.TotalNum;
});

const pageChangeHandler = (page) => {
  pageInfo.page = page;
}

</script>

<style scoped lang="scss">

</style>