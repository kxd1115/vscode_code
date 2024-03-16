import { useState, useRef } from 'react'

// 在子组件中调用父组件的函数，并传递参数

function Son({onGetSonMsg}) {
  const sonMsg = 'this is son msg';
  return (
    <div>
      this is Son
      <button onClick={() => onGetSonMsg(sonMsg)}>sedMsg</button>
    </div>
  )
}

function App() {
  // 使用useState接收子组件的数据
  const [msg, setMsg] = useState('');
  const getMsg = (msg) => {
    console.log(msg);
    setMsg(msg); // 获取子组件传递进来的数据，存贮到状态变量中
  }
  return (
    <div className="App">
      this is App, {msg}
      {/* 获取父组件的方法 */}
      <Son onGetSonMsg={getMsg}></Son>
    </div>
  );
}

export default App;


