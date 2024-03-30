// 编写账单列表相关store
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name: 'bill',
  initialState: {
    billList: []
  },
  reducers: {
    // 同步修改方法
    setBillList(state, action) {
      state.billList = action.payload;
    },
    // 同步添加账单方法
    addBill(state, action) {
      state.billList.push(action.payload);
    }
  }
});

// 解构actionCreater函数
const { setBillList, addBill } = billStore.actions;

// 编写异步
const getBillList = () => {
  return async (dispatch) => {
    // 编写异步请求
    // 触发同步reducer
    const res = await axios.get('http://localhost:8888/ka');
    dispatch(setBillList(res.data));
  }
};

const addBillList = (data) => {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:8888/ka', data);
    dispatch(addBill(res.data))
  }
};

// 导出reducer
const billReducer = billStore.reducer;

export default billReducer;
export { setBillList, getBillList, addBillList };