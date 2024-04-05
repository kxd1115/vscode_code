// react + ts

import { useState } from "react";

type User = {
  name: string,
  age: number,
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  
  const changeUser = () => {
    setUser(null);
    setUser({
      name: "jack",
      age: 18
    });
  };
  // 为了类型安全，通过可选链做类型守卫
  // 只有user不为null，才进行点运算
  return (<>this is App {user?.age}</>);
}

export default App
