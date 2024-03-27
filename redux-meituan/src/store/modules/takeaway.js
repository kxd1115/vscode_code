import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const foodsStore = createSlice({
  name: "foods",
  initialState: {
    foodsList: [],
    activeIndex: 0,
    cartList: []
  },
  reducers: {
    // 更改商品列表
    setFoodsList(state, action) {
      state.foodsList = action.payload;
    },
    // 更改activeIndex
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    // 添加购物车
    addCart (state, action) {
      // 是否添加过？以action.payload.id去cartList中匹配 匹配到了 添加过
      const item = state.cartList.find(item => item.id === action.payload.id)
      if (item) {
        item.count++
      } else {
        state.cartList.push(action.payload)
      }
    },
    // count增
    increCount (state, action) {
      // 关键点：找到当前要修改谁的count id
      const item = state.cartList.find(item => item.id === action.payload.id)
      item.count++
    },
    // count减
    decreCount (state, action) {
      // 找到当前修改谁的count id
      const item = state.cartList.find(item => item.id === action.payload.id);
      if (item.count === 0) {
        return
      };
      item.count--;
    },
    // 清空购物车
    clearCart(state) {
      state.cartList = [];
    }
  }
})

// 异步请求部分
const { setFoodsList, setActiveIndex, addCart, increCount, decreCount, clearCart } = foodsStore.actions;

const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway");
    dispatch(setFoodsList(res.data));
  }
}


export { fetchFoodsList, setActiveIndex, addCart, increCount, decreCount, clearCart };

const foodsReducer = foodsStore.reducer;
export default foodsReducer;