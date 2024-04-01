import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
import { setToken as _setToken, getToken } from "@/utils";

const userStore = createSlice({
  name: "user",
  // 数据初始状态
  initialState: {
    token: getToken() || '',
    userInfo: {},
  },
  // 同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      // localStorage存一份
      _setToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    }
  }
});

// 结构actionCreater
const { setToken, setUserInfo } = userStore.actions;

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

// 异步方法 获取个人用户信息
const fetchUserInfo = () => {
  return async (dispatch) => {
    // 发送异步请求，获取个人信息
    const res = await request.get('/user/profile');
    // 提交同步action进行token的存入
    dispatch(setUserInfo(res.data));
  }
};

// 导出
export { setToken, fetchLogin, fetchUserInfo };
export default userReducer;