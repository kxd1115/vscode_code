// useMemo
// 作用：在组件渲染时缓存计算的结果

import { useMemo } from 'react'
import { useState } from 'react'

function fib(n) {
  console.log('斐波那契函数执行了')
  return n <= 0 ? 1 : n * fib(n - 1)
}

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const sumByCount = useMemo(() => {
    return fib(count1);
  }, [count1])
  // 计算斐波那契之和

  return (
    <>
      {sumByCount}
      <button onClick={() => setCount1(count1 + 1)}>+count1:{count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>+count2:{count2}</button>
    </>
  )
}

export default App