<template>
  <div>
      <table border="1"  align="center">
      <thead  align="center">
        <tr>
          <td><input type="checkbox"></td>
          <td>姓名</td>
          <td>语文</td>
          <td>数学</td>
          <td>英语</td>
          <td>总分</td>
        </tr>
      </thead>
      <tbody align="center">
        <tr v-for="(item,index) in tabData" :key="index">
          <td><input type="checkbox" @click="checked(item, checkArr)" v-model="item.check"></td>
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
import { ref } from 'vue';
// -----
//组合函数- 计算总数
function useTotal(data) {
    let total = 0;
    for (let i in data) {
      if(typeof data[i] === 'number' ) total+=data[i];
    }
    return total
}
function checked(item, checkArr) {
  item.check = !item.check;
  checkArr.push(item.id);
}
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
    const tabData = props.tabData;
    const checkArr = ref([]);
    return {
      checkArr, 
      tabData, 
      useTotal,
      checked
    }
  }
}
</script>

<style>

</style>