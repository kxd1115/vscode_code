import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken, removeToken } from "@/utils";
import { loginAPI, getProfileAPI } from "@/apis/user";

const userStore = createSlice({
  name: "user",
  // 数据初始状态
  initialState: {
    token: getToken() || '', // 如果本地有，则直接使用
    userInfo: {},
  },
  // 同步修改方法
  reducers: {
    // 存储token
    setToken(state, action) {
      state.token = action.payload;
      // localStorage存一份
      _setToken(action.payload)
    },
    // 获取用户信息
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    // 清理用户信息
    clearUserInfo(state) {
      state.token = '';    // 清除token
      state.userInfo = {}; // 清除个人信息
      removeToken(); // 清除在本地localStorage中的token
    }
  }
});

// 结构actionCreater
const { setToken, setUserInfo, clearUserInfo } = userStore.actions;

// 获取reducer函数
const userReducer = userStore.reducer;

// 异步方法 完成登录，获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 发送异步请求
    const res = await loginAPI(loginForm);
    // 提交同步action进行token的存入
    dispatch(setToken(res.data.token));
  }
};

// 异步方法 获取个人用户信息
const fetchUserInfo = () => {
  return async (dispatch) => {
    // 发送异步请求，获取个人信息
    const res = await getProfileAPI();
    // 提交同步action进行token的存入
    dispatch(setUserInfo(res.data));
  }
};

// 导出
export { setToken, fetchLogin, fetchUserInfo, clearUserInfo };
export default userReducer;