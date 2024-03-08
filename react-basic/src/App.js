// 项目根组件
// App -> index.js -> public/index.html(root)

import { useState } from "react";
import "./index.css"

const list = [
  { id: 1001, name: 'Vue'},
  { id: 1002, name: 'React'},
  { id: 1003, name: 'Angular'},
];

const isLogin = true;

const articleType = 3; // 0 1 3
function getArticleTem() {
  if (articleType === 0) {
    return <div>我是无图文章</div>
  } else if (articleType === 1) {
    return <div>我是单图模式</div>
  } else {
    return <div>我是三图模式</div>
  }
}

function App() {

  const handleCLick1 = (e) => {
    // 简单的方法
    console.log("我被点击了！", e.target);
  };
  const handleCLick2 = (name) => {
    // 如果需要调参
    console.log("我被点击了！", name);
  };
  const handleCLick3 = (e, name) => {
    // 如果需要调参
    console.log("我被点击了！", e, name);
  };

  // 定义一个组件
  function Button() {
    // 组件内部逻辑
    return <button>我是一个按钮组件</button>;
  }

  // 使用useState函数
  const [count, setCount] = useState(0);
  const handleCLick4 = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      this is App
      {/* 列表渲染 */}
      <ul>
        {/* 
          * 使用遍历渲染时，必须要在内部绑定一个key，每个key必须是唯一的 
          * React框架内部使用，key用于提升更新性能
        */}
        { list.map(item => <li key={item.id}>{item.name}</li>) }
      </ul>
        {/* 条件渲染 */}
        {/* 逻辑与 && */}
        { isLogin && <span> this is span </span> }
        {/* 三元运算 ?: */}
        { isLogin ? <span>Jack</span> : <span>loading</span> }
        {/* 复杂的条件渲染 */}
        { getArticleTem() }

        {/* 基础事件绑定 */}
        <button onClick={ handleCLick1 }>click1 me</button>
        <button onClick={ () => handleCLick2("Dennis") } className="foo">
          click2 me
        </button>
        <button onClick={ (e) => handleCLick3(e.target, "Dennis") }>
          click3 me
        </button>

        {/* 添加一个按钮组件 */}
        <Button />
        {/* 第二种方式: <Button></Button> */}

        <div>
          {/* 使用 useState函数实现一个计数器 */}
          <button onClick={ handleCLick4 } id="span01">count: { count }</button>
        </div>
    </div>
  );
}

export default App;
