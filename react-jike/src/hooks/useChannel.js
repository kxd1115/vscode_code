import { useState, useEffect } from "react";
import { getChannelAPI } from '@/apis/article';

// 封装获取频道列表的逻辑
function useChannel() {
  // 1. 获取频道列表的所有逻辑
  // 获取频道列表
  const [channelList, setChannelList] = useState([]);
  // 1. 封装函数，调用接口
  const getChannelList = async () => {
    const res = await getChannelAPI();
    setChannelList(res.data.channels);
  };
  useEffect(() => {
    getChannelList();
  }, [])
  // 2. 把组件中要用到的数据导出
  return {
    channelList 
  };
};

export { useChannel };