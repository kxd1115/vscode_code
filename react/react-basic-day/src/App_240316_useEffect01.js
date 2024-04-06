import { useState, useRef, createContext, useContext, useEffect } from 'react'


const URL = 'http://geek.itheima.net/v1_0/channels';

function App() {
  
  // 创建状态数据
  const [list, setList] = useState([]);
  useEffect(() => {
    // 获取频道列表
    async function getList() {
      const res = await fetch(URL);
      const list = await res.json();
      console.log(list);
      setList(list.data.channels);
    }
    getList();
  }, [])

  return (
    <div className="App">
      this is App
      <ul>
        { list.map((item) => <li key={item.id}>{item.name}</li>) }
      </ul>
    </div>
  );
}

export default App;


