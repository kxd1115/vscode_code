// 路由配置
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";

import { createBrowserRouter } from 'react-router-dom';
import { AuthRoute } from "@/components/AuthRoute";

const router = createBrowserRouter([
  {
    path: '/',
    // 测试有无token条件下的高阶组件是否能够跳转
    element: <AuthRoute> <Layout /></AuthRoute>
  },
  { 
    path: '/login',
    element: <Login></Login>
  }
]);

export default router;