import { useState, useRef, createContext, useContext, useEffect } from 'react'


const URL = 'http://geek.itheima.net/v1_0/channels';

function App() {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // 情况1，没有依赖项
  // 只要组件内有更新，都会执行
  // useEffect(() => {
  //   console.log("副作用函数执行了!");
  // }, [])

  // 情况2，空数组依赖项
  // 只在组件更新时执行
  // useEffect(() => {
  //   console.log("副作用函数执行了!");
  // }, [])

  // 情况3，特定依赖项
  // 只在组件更新时, 以及特定依赖项更新时执行
  useEffect(() => {
    console.log("副作用函数执行了!");
  }, [count1])
  
  return (
    <div className="App">
      this is App
      <button onClick={() => setCount(count+1)}>+{count}</button>
      <button onClick={() => setCount1(count1+1)}>+{count1}</button>
    </div>
  );
}

export default App;


