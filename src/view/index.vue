<template>
  <div>
    <div style="text-align:center; margin-bottom:20px">
      <button @click="addList">增加</button>
      <button @click="del">删除</button>
      <button @click="edit">修改</button>
      <button @click="search">搜索</button>
    </div>
    <lbTable :tabData="tabData"/>
  </div>
</template>

<script>
import lbTable from '../components/lb-table/index.vue'
import { reactive, computed } from 'vue';
import { useTabData, useMethods } from './index';
export default {
  components: {
    lbTable
  },
  setup() {
    const { tabData } = useTabData();
    const addList = () => useMethods.addList(tabData);
    return {
      tabData,
      lbTable,
      ...useMethods,
      addList
    }
  }
}
</script>

<style>
  button{
    margin-left: 5px
  }
</style>