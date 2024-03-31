// axios的封装处理
import axios from "axios";
import { getToken } from "./token";

const request = axios.create({
  // 实际项目中，这里的根域名根据环境自动选择，不需要写死
  // 1. 根域名配置
  baseURL: 'http://geek.itheima.net/v1_0',
  // 2. 超时时间
  timeout: 5000,
  // 3. 请求拦截器 / 响应拦截器
})

// 添加请求拦截器
// 在请求发送之前，拦截，并进行自定义配置[参数处理]
request.interceptors.request.use((config)=> {
  // 操作config，注入token数据
  // 1. 获取token
  const token = getToken();
  // 2. 注入（按照后端格式要求，做token拼接）
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // 拼接方式由后端决定
  }
  return config
}, (error)=> {
  return Promise.reject(error)
})

// 添加响应拦截器
// 在响应返回到客户端之前，拦截，重点处理返回的数据
request.interceptors.response.use((response)=> {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data
}, (error)=> {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export { request };