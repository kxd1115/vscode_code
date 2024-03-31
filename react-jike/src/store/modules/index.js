import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
import { act } from "react-dom/test-utils";
import { setToken as _setToken, getToken } from "@/utils";

const userStore = createSlice({
  name: "user",
  // 数据初始状态
  initialState: {
    token: getToken() || ''
  },
  // 同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      // localStorage存一份
      _setToken(action.payload)
    }
  }
});

// 结构actionCreater
const { setToken } = userStore.actions;

// 获取reducer函数
const userReducer = userStore.reducer;

// 异步方法 完成登录，获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 发送异步请求
    const res = await request.post('/authorizations', loginForm);
    // 提交同步action进行token的存入
    dispatch(setToken(res.data.token));
  }
};

// 导出
export { setToken, fetchLogin };
export default userReducer;