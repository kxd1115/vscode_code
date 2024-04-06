// 用户相关的所有请求

import { request } from "@/utils";

// 1. 登录请求
export function loginAPI(formdata) {
  // 通用写法
  return request({
    url: '/authorizations',
    method: 'POST',
    data: formdata
  });
}

// 2. 获取用户信息
export function getProfileAPI() {
  // 通用写法
  return request({
    url: '/user/profile',
    method: 'GET',
  });
}
