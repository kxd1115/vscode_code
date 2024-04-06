import { useState, useRef, createContext, useContext, useEffect } from 'react'


function Son() {
  // 1. 渲染时开启一个定时器
  useEffect(() => {
    // 副作用函数
    const timer = setInterval(() => {
      console.log("定时器运行中...");
    }, 1000);
    // 清除副作用
    return () => {
      clearInterval(timer);
    };
  }, [])

  return (
    <div>
      this is Son
    </div>
  )
}

function App() {
  // 通过条件渲染，模拟组件卸载
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      this is App
      {show && <Son></Son>}
      <button onClick={() => setShow(false)}>卸载Son组件</button>
    </div>
  );
}

export default App;


