import { Image, List } from 'antd-mobile'
import { useEffect, useState } from 'react'
import { ListRes, fetchListAPI } from '@/apis/list';

type Props = {
  channelId: string
};

const HomeList = (props: Props) => {
  const { channelId } = props;
  // 获取列表数据
  const [listRes, setListRes] = useState<ListRes>({
    results: [],
    pre_timestamp: '' + new Date().getTime()
  });
  useEffect(() => {
    const getList = async () => {
      try {
        // 必须传入请求参数
        const res = await fetchListAPI({
          channel_id: channelId,
          timestamp: '' + new Date().getTime()
        });
        setListRes({
          results: res.data.data.results,
          pre_timestamp: res.data.data.pre_timestamp
        })
      } catch (error) {
        throw new Error('fetch list error');
      }
    };
    getList();
  }, [])

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
            >
            {item.title}
          </List.Item>
        ))}
      </List>
    </>
  )
}

export default HomeList