import {createSlice} from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: 'counter',
  // 初始化状态
  initialState: {
    count: 0
  },
  // 修改状态数据的方法 同步方法 支持直接修改
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addNum(state, action) {
      state.count += action.payload;
    }
  }
});

// 解构出来actionCreater函数
const {increment, decrement, addNum} = counterStore.actions;
// 获取reducer函数
const counterReducer = counterStore.reducer;

// 按需导出actionCreater
export {increment, decrement, addNum};

// 以默认方式导出reducer
export default counterReducer;
