import { useEffect } from 'react';
import useStore from './store';

// 绑定store到组件
function App() {
  const { count, inc, inc100, channelList, fetchChannelList } = useStore();
  useEffect(() => {
    fetchChannelList();
  }, [fetchChannelList])
  return (
    <div className="App"> 
      this is App
      <button onClick={inc}>{count}</button>
      <button onClick={inc100}>+100</button>
      <ul>{channelList.map(item => <li key={item.id}>{item.name}</li>)}</ul>
    </div>
  )
}

export default App;