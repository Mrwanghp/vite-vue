import {
    reactive,
    toRefs
} from 'vue'
//UUID
const createRandomUid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
// 数据源
export function useData() {
    const state = reactive({
        tabData: [{
                id: createRandomUid(),
                name: '刘贝',
                language: 5,
                mathematics: 8,
                english: 2.5,
                check: false
            },
            {
                id: createRandomUid(),
                name: '拉豪',
                language: 3,
                mathematics: 2.5,
                english: 10,
                check: false
            }
        ]
    })
    return state
}
//增加改查等按钮操作
export const useMethods = {
    // 增加
    addList() {
        this.tabData.push({})
    },
    del() {
         this.tabData =  this.tabData.filter(item => !item.check);
    },
    edit() {
        console.log(11, '改')
    },
    search() {
        console.log(11, '查')
    }
}