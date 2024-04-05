// 路由配置
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";

import { createBrowserRouter } from 'react-router-dom';
import { AuthRoute } from "@/components/AuthRoute";

// 借助lazy函数对组件进行导入
import { Suspense, lazy } from "react";
const Home = lazy(() => import("@/pages/Home"));
const Article = lazy(() => import("@/pages/Article"));
const Publish = lazy(() => import("@/pages/Publish"));

const router = createBrowserRouter([
  {
    path: '/',
    // 测试有无token条件下的高阶组件是否能够跳转
    element: <AuthRoute> <Layout /></AuthRoute>,
    children: [
      {
        path: '/',
        index: true, // 设置为默认二级路由
        element: <Suspense fallback={'加载中'}><Home></Home></Suspense>
      },
      {
        path: '/article',
        element: <Suspense fallback={'加载中'}><Article></Article></Suspense>
      },
      {
        path: '/publish',
        element: <Suspense fallback={'加载中'}><Publish></Publish></Suspense>
      },
    ]
  },
  { 
    path: '/login',
    element: <Login></Login>
  }
]);

export default router;