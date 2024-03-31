// 统一中转工具模块函数
// 示例: import {request} from '@/utils'
import { request } from "./request";
import { getToken, setToken, removeToken } from "./token";

export {
  request,
  setToken,
  getToken,
  removeToken
};