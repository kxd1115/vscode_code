import Login from "../page/Login";
import Article from "../page/Article";
import Layout from "../page/Layout";
import Board from "../page/Board";
import About from "../page/About";
import NotFound from "../page/NotFound";

import { createBrowserRouter, createHashRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/article/:id/:name",
    element: <Article></Article>
  },
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        // 设置为二级路由，一级路由访问时，它也能得到渲染
        index: true,
        // path: '/About',
        element: <About></About>
      },
      {
        path: '/Board',
        element: <Board></Board>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
])

export default router;