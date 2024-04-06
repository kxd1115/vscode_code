import { Image, List } from 'antd-mobile'
import { useLists } from '@/hooks/useLists';
import type { Props } from '@/apis/list';

const HomeList = (props: Props) => {
  const { listRes } = useLists(props);

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