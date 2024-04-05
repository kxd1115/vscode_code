// react + ts

import { useState } from "react";

type User = {
  name: string,
  age: number,
}

function App() {
  const [value, setValue] = useState(false);
  const [list, setList] = useState([1,2,3]);

  // 初始值必须是一个User | () => User
  // const [user, setUser] = useState<User>({
  //   name: 'jack',
  //   age: 18
  // });
  const [user, setUser] = useState<User>(() => {
    return {
      name: 'jack',
      age: 18
    }
  });
  // setUser必须是 User | () => User | undefined 
  // 第三种情况不常见

  const changeValue = () => {
    setValue(true)
  }
  return (<>this is App {list}</>);
}

export default App
