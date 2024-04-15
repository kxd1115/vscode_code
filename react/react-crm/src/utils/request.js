import axios from "axios";

const request = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 5000
})

// 添加请求拦截器
// 在请求发送之前，拦截，并进行自定义配置[参数处理]
request.interceptors.request.use(
  (config)=> {
    return config
  }, 
  (error)=> {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
// 在响应返回到客户端之前 做拦截 重点处理返回的数据
request.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  }, 
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export { request };