import { useState, useRef } from 'react'

// 1. 子传父， A -> App
// 2. 父传子, App -> B

function SonA ({ onGetMsgA }) {
  const name = 'this is A name';
  return (
    <div>
      this is SonA
      <button onClick={() => onGetMsgA(name)}>Send</button>
    </div>
  )
}

function SonB (props) {
  return (
    <div>
      this is SonB, {props.msg}
    </div>
  )
}

function App() {
  // 获取A子组件传递的数据
  const [msgA, setMsgA] = useState('');
  const getMsgA = (msg) => {
    setMsgA(msg);
  };
  return (
    <div className="App">
      this is App, {msgA}
      <SonA onGetMsgA={getMsgA}></SonA>
      <SonB 
        msg={msgA}
      >
      </SonB>
    </div>
  );
}

export default App;


