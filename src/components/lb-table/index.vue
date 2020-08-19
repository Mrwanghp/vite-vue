<template>
  <div>
      <table border="1"  align="center">
      <thead  align="center">
        <tr>
          <td><input type="checkbox"  v-model="check" @click="checkAll"></td>
          <td>姓名</td>
          <td>语文</td>
          <td>数学</td>
          <td>英语</td>
          <td>总分</td>
        </tr>
      </thead>
      <tbody align="center">
        <tr v-for="(item,index) in tabData" :key="index">
          <td><input type="checkbox" @click="checked(item)" v-model="item.check"></td>
          <td>{{item.name}}</td>
          <td>{{item.language}}</td>
          <td>{{item.mathematics}}</td>
          <td>{{item.english}}</td>
          <td>{{useTotal(item)}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';
import { useTotal, checked, checkAll} from './index'
export default {
  props:{
    tabData:{
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(props) {
    let check = ref(false);
    const tabData = computed(() => props.tabData);
    return {
      check,
      tabData, 
      useTotal,
      checked,
      checkAll
    }
  }
}
</script>

<style>

</style>