import { reactive } from 'vue'
//UUID
const createRandomUid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
// 数据源
export function useTabData() {
    const tabData = reactive([
        { id: createRandomUid(), name: '刘贝', language: 5, mathematics: 8, english: 2.5, check: true },
        { id: createRandomUid(), name: '拉豪', language: 3, mathematics: 2.5, english: 10, check: false  }
    ])
    return {
        tabData
    }
}
//增加改查等按钮操作
export const useMethods = {
    // 增加
    addList(data) {
        console.log(data,'增增')
        data.push({})
    },
    del() { 
        console.log(11,'删')
    },
    edit() {
        console.log(11,'改')
    },
    search() {
        console.log(11,'查')
    }
}
