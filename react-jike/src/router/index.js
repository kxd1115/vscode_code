// 路由配置
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";

import { createBrowserRouter } from 'react-router-dom';
import { AuthRoute } from "@/components/AuthRoute";
import Article from "@/pages/Article";
import Home from "@/pages/Home";
import Publish from "@/pages/Publish";

const router = createBrowserRouter([
  {
    path: '/',
    // 测试有无token条件下的高阶组件是否能够跳转
    element: <AuthRoute> <Layout /></AuthRoute>,
    children: [
      {
        path: '/',
        index: true, // 设置为默认二级路由
        element: <Home></Home>
      },
      {
        path: '/article',
        element: <Article></Article>
      },
      {
        path: '/publish',
        element: <Publish></Publish>
      },
    ]
  },
  { 
    path: '/login',
    element: <Login></Login>
  }
]);

export default router;