import { useEffect } from 'react';
import {create} from 'zustand';
const URL = 'http://geek.itheima.net/v1_0/channels'

// 创建store
// 1. 函数参数必须返回一个对象 对象内部编写状态数据和方法
// 2. set时用来修改数据的专门方法，必须调用它来修改数据
// 语法1：参数是函数，需要用到老数据的场景
// 语法2：参数直接是一个对象
const useStore = create((set) => {
  return {
    // 状态数据
    count: 0,
    // 修改状态数据的方法
    // 语法1
    inc: () => {
      set((state) => ({ count: state.count + 1 }))
    },
    // 语法2
    inc100: () => {
      set({count: 100})
    },

    // 新的状态数据
    channelList: [],
    fetchChannelList: async () => {
      const res = await fetch(URL);
      const jsonRes = await res.json();
      set({
        channelList: jsonRes.data.channels
      })
    }
  }
})

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