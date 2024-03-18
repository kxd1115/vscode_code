import { useState, useRef, createContext, useContext, useEffect } from 'react'
import { increment, decrement, addNum } from './store/modules/counterStore';
import { useSelector, useDispatch } from 'react-redux';

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

  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(addNum(10))}>+10</button>
      </div>
    </div>
  );
}

export default App;


