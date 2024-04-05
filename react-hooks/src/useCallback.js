import { useCallback } from "react";
import { useState, memo } from "react";

const Input = memo(function Input({onChange}) {
  console.log("子组件被渲染了");
  return <input onChange={(e) => onChange(e.target.value)}></input>
})

function App() {
  const changeHandler = useCallback((value) => console.log(value), []);
  const [count, setCount] = useState(0);
  return (
    <div className="App"> 
      this is App
      <Input onChange={ changeHandler }></Input>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
    
  )
}

export default App;