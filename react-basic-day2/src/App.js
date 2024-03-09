import { useState, useRef } from 'react'


function App() {
  const [value, setValue] = useState("")
  
  // 使用useRef生成ref对象，并绑定到DOM标签上
  const inputRef = useRef(null)
  // 当DOM可用时，通过ref.current获取DOM
  const showDom = () => {
    console.log(inputRef.current);
  }

  return (
    <div className="App">
      {/* 使用value获取初始值 */}
      {/* 使用onChange，通过调用setValue获取input.value */}
      <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />

      <div>
        {/*  */}
        <input type='text' ref={inputRef}></input>
        <button onClick={showDom}>获取DOM</button>
      </div>
    </div>
  );
}

export default App;


