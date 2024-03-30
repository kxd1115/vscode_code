// 创建路由实例，绑定path element

import Layout from "@/pages/Layout";
import New from "@/pages/New";
import Year from "@/pages/Year";
import Month from "@/pages/Month";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        // path: '/month',
        index: true, // 设置为默认二级目录
        element: <Month></Month>,
      },
      {
        path: '/year',
        element: <Year></Year>,
      }
    ]
  },
  {
    path: '/new',
    element: <New></New>
  },
]);

export default router;