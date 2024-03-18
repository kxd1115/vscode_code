import { createSlice } from '@reduxjs/toolkit';

const counterStore = createSlice({
  name: 'counter',
  // 初始化状态
  initialState: {
    count: 0
  },
  // 状态变化方法, 同步方法，支持直接修改
  reducers: {
    decrement(state) {
      state.count -= 1;
    },
    increment(state) {
      state.count += 1;
    },
    addNum(state, action) {
      state.count += action.payload;
    }
  }
});

// 解构出来actionCreater函数
const {increment, decrement, addNum} = counterStore.actions;
// 获取reducer函数
const countReducer = counterStore.reducer;

// 按需导出对应的action函数
export {increment, decrement, addNum};
// 导出自定义的reducer函数
export default countReducer;