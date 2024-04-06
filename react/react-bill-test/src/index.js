import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

// 导入定制主题文件
import './theme.css';
// 导入store
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 注入store
  <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
  </Provider>
);