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
import { reactive, computed, toRef } from 'vue';
import { useData, useMethods } from './index';
export default {
  components: {
    lbTable
  },
  setup() {
    let { tabData } = useData();
    return {
      tabData,
      ...useMethods
    }
  }
}
</script>

<style>
  button{
    margin-left: 5px
  }
</style>