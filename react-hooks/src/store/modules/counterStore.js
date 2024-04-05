const createCounterStore = (set) => {
  return {
    // 状态数据
    count: 0,
    // 修改状态数据的方法
    // 语法1
    inc: () => {
      set((state) => ({ count: state.count + 1 }))
    },
    // 语法2
    inc100: () => {
      set({count: 100})
    },
  }
};
export default createCounterStore;