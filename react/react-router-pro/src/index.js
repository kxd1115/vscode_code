import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

// 1. 引用router实例对象，并配置路由对应关系
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 路由绑定 */}
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);
