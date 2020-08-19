//组合函数- 计算总数
export function useTotal(data) {
  let total = 0;
  for (let i in data) {
    if (typeof data[i] === 'number') total += data[i];
  }
  return total
}
// 单选
export function checked(item) {
  item.check = !item.check;
  let unCompletedCount = this.tabData.reduce((pre, cur) => pre + (cur.check ? 0 : 1), 0);
  this.check = unCompletedCount === 0 ? true : false;
}
// 全选
export function checkAll() {
  this.tabData.forEach(v => {
    v.check = !this.check;
  })
}