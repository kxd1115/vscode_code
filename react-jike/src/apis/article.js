// 封装和文章相关的接口函数
import { request } from "@/utils";

// 1. 获取频道列表
export function getChannelAPI() {
  // 通用写法
  return request({
    url: '/channels',
    method: 'GET'
  });
}

// 2. 提交文章表单
export function createArticleAPI(data) {
  return request({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data
  })
}

// 3. 获取文章列表
export function getArticleListAPI(parms) {
  // 通用写法
  return request({
    url: '/mp/articles',
    method: 'GET',
    parms
  });
}

// 4. 删除文章
export function deleteArticleAPI(id) {
  return request({
    url: `/mp/articles/${id}`,
    method: 'DELETE',
    id
  })
}

// 5. 获取文章详情
export function getArticleByIdAPI(id) {
  // 通用写法
  return request({
    url: `/mp/articles/${id}`
  });
}

