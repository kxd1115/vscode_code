import { useState, useRef } from 'react'

// 父组件传递数据
// 子组件接受数据，使用props.name接收

function Son(props) {
  return (
    <div>
      this is son, {props.name}
    </div>
  )
}

function App() {
  const name = 'this is app name';
  return (
    <div className="App">
      <Son name={name} />
    </div>
  );
}

export default App;


