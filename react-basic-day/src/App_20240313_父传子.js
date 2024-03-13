import { useState, useRef } from 'react'

// 父组件传递数据
// 子组件接受数据，使用props.name接收

function Son(props) {
  return (
    <div>
      <span>{props.children}</span>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Son>
        <span>this is span</span>
      </Son>
    </div>
  );
}

export default App;


