// 封装axios

import axios from "axios";

const httpInstance = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000,
})

// 添加请求拦截器
// 在请求发送之前，拦截，并进行自定义配置[参数处理]
httpInstance.interceptors.request.use(
  (config)=> {
    return config
  }, 
  (error)=> {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
// 在响应返回到客户端之前 做拦截 重点处理返回的数据
httpInstance.interceptors.response.use(
  (response)=> {
    return response
  }, 
  (error)=> {
    return Promise.reject(error)
  }
)

export { httpInstance };