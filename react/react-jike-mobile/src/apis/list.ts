import { http } from '@/utils'
import type { ResType } from './shared';

// 2. 定义具体的接口类型
export type ChannelItem = {
  id: number,
  name: string,
}

type ChanelRes = {
  // 转换成对象数组类型
  channels: ChannelItem[] 
}

// 请求频道列表
export function fetchChannelAPI() {
  return http.request<ResType<ChanelRes>>({
    url: '/channels',
  })
}

type ListItem = {
  art_id: string,
  title: string,
  aut_id: string,
  comm_count: number,
  pubdate: string,
  aut_name: string,
  is_top: number,
  cover: {
    type: number,
    images: string[]
  }
}

// list类型
export type ListRes = {
  results: ListItem[],
  pre_timestamp: string
}

// channelId 用于tab和list一一对应
export type Props = {
  channelId: string
};

// 请求参数的对应数据类型
type ReqParams = {
  channel_id: string,
  timestamp: string
}

// 请求文章列表
export function fetchListAPI(params: ReqParams) {
  return http.request<ResType<ListRes>>({
    url: '/articles',
    params,
  })
}