// React必须要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

// 项目跟组件
import App from './App';

// 把App根据组件渲染到id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // 进行渲染
