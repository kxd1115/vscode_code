import './style.css';
import { Tabs } from 'antd-mobile';
import { useTabs } from '@/hooks/useTabs';
import HomeList from './List';

const Home = () => {
  
  const { channels } = useTabs();

  return (
    <div>
      <div className='tabContainer'>
        {/*tab区域*/}
        <Tabs>
          { channels.map(item => (
            <Tabs.Tab title={item.name} key={item.id}>
              {/* list组件 */}
              <HomeList channelId={'' + item.id}></HomeList>
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>
  )
};

export default Home;