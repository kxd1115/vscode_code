import { useReducer } from "react";

function reducer(state, action) {
  switch(action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "SET":
      return state + action.payload;
    default:
      return state;
  }
}

function App() {
  // 类似useState，只能使用dispatch修改状态
  // dispatch的参数必须是一个对象: dispatch({type: "INC"})
  // 这里的0表示state的初始状态
  const [state, dispatch] = useReducer(reducer, 0); 
  return (
    <div className="App">
      <div>this is App</div>
      <button onClick={() => dispatch({type: 'INC'})}>+</button>
      <div>
        {state}
      </div>
      <button onClick={() => dispatch({type: 'DEC'})}>-</button>
      {/* 支持在对象中传递自定义参数 */}
      <button onClick={() => dispatch({type: 'SET', payload: 100})}>更新</button>
    </div>
  );
}

export default App;
