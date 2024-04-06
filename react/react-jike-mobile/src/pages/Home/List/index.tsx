import { Image, InfiniteScroll, List } from 'antd-mobile'
import { useLists } from '@/hooks/useLists';
import { fetchListAPI, type Props } from '@/apis/list';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeList = (props: Props) => {
  const { listRes, channelId, setListRes } = useLists(props);

  // 开关，标记当前是否还有新数据
  // 上拉加载触发的关键条件: 1. hasMore = true 2. 小于threshold
  const [hasMore, setHasMore] = useState(true);
  // 加载下一页的函数
  const loadMore = async () => {
    // 编写加载下一页的核心逻辑
    console.log('上拉加载触发了');
    // setHasMore(false);
    try {
      // 必须传入请求参数
      const res = await fetchListAPI({
        channel_id: channelId,
        timestamp: listRes.pre_timestamp
      });
      // 拼接新数据 + 存取下一次请求的时间戳
      setListRes({
        results: [...listRes.results, ...res.data.data.results],
        pre_timestamp: res.data.data.pre_timestamp
      })
      // 停止监听
      if (res.data.data.results.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      throw new Error('fetch list error');
    }
  }

  const navigate = useNavigate()
  const gotToDetail = (id: string) => {
    // 路由跳转
    navigate(`/detail?id=${id}`)
  };

  return (
    <>
      <List>
        {listRes.results.map((item) => (
          <List.Item
            key={item.art_id}
            prefix={
              <Image
                src={item.cover.images?.[0]}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={item.pubdate}
            onClick={() => gotToDetail(item.art_id)}
            >
            {item.title}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={10}></InfiniteScroll>
    </>
  )
};

export default HomeList