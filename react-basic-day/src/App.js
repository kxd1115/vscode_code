import { useState, useRef, createContext, useContext, useEffect } from 'react'

// 封装自定义HOOK
// 通用思路
// 1. 声明use开头的函数
// 2. 在函数体内封装可复用的逻辑

function useToggle() {
  const [value, setValue] = useState(true);
  const toggle = () => setValue(!value);
  return [value, toggle];
}

function App() {

  const [value, toggle] = useToggle();

  return (
    <div className="App">
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

export default App;


