import { forwardRef } from "react";
import { useRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref}></input>
})

function App() {
  const inputRef = useRef(null);
  const showRef = () => {
    console.log(inputRef);
    inputRef.current.focus();
  }
  return (
    <div className="App"> 
      this is App
      <Input ref={inputRef} ></Input>
      <button onClick={showRef}> focus</button>
    </div>
    
  )
}

export default App;