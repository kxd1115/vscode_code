import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { useRef } from "react";

const Input = forwardRef((props, ref) => {
  // 实现聚焦逻辑
  const inputRef = useRef(null);
  const focusHandler = () => {
    inputRef.current.focus();
  }
  // 把聚焦方法暴露出去
  useImperativeHandle(ref, () => {
    return {
      // 暴露的方法
      focusHandler
    };
  })
  return <input type="text" ref={inputRef}></input>
})

function App() {
  const sonRef = useRef(null);
  const focusHandler = () => {
    sonRef.current.focusHandler();
  }
  return (
    <div className="App"> 
      this is App
      <Input ref={sonRef} ></Input>
      <button onClick={focusHandler}>focus</button>
    </div>
    
  )
}

export default App;