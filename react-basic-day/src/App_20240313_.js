import { useState, useRef, createContext, useContext } from 'react'

// 1. 使用createContext创建上下文对象
const MsgContext = createContext();

// 2. 在顶层组件中使用Provide提供数据

// 3. 在底层组件中使用useContext钩子函数获得数据


function A () {
  return (
    <div>
      this is A componet
      <B></B>
    </div>
  )
}

function B () {
  const msg = useContext(MsgContext);
  return (
    <div>
      this is B componet, {msg}
    </div>
  )
}

function App() {
  const msg = 'this is App msg';
  
  return (
    <div className="App">
      {/* 通过value接收数据 */}
      <MsgContext.Provider value={msg}>
        this is App
        <A></A>
      </MsgContext.Provider>
    </div>
  );
}

export default App;


