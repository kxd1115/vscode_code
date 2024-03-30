// 编写账单列表相关store
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name: 'bill',
  initialState: {
    billList: []
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    }
  }
});

// 解构actionCreater函数
const { setBillList } = billStore.actions;

// 编写异步
const getBillList = () => {
  return async (dispatch) => {
    // 编写异步请求
    // 触发同步reducer
    const res = await axios.get('http://localhost:8888/ka');
    dispatch(setBillList(res.data));
  }
}

// 导出reducer
const billReducer = billStore.reducer;

export default billReducer;
export { setBillList, getBillList };