//组合函数- 计算总数
export function useTotal(data) {
    let total = 0;
    for (let i in data) {
      if(typeof data[i] === 'number' ) total+=data[i];
    }
    return total
}
// 单选
export function checked(item) {
    //   let unCompletedCount = data.value.reduce(
    //   (pre, cur) => pre + (cur.checked ? 0 : 1), 0);
    //    return (unCompletedCount === 0 ? true : false)
  item.check = !item.check;
}
// // 全选
// export function checkAll(data) {
// }