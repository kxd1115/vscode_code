import { createBrowserRouter } from "react-router-dom";

// 导入路由
import CRMLayout from "@/pages/Layout";
import Home from "@/pages/Home";
import WorkBench from "@/pages/WorkBench";
import MemberList from "@/pages/MemberList";
import TaskCenter from "@/pages/Task";
import User from "@/pages/User";
import DataBoard from "@/pages/DataBoard";
import SystemCenter from "@/pages/System";
import Login from "@/pages/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <CRMLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />
      },
      {
        path: '/workbench',
        element: <WorkBench />
      },
      {
        path: '/memberlist',
        element: <MemberList />
      },
      {
        path: '/task',
        element: <TaskCenter />
      },
      {
        path: '/user',
        element: <User />
      },
      {
        path: '/databoard',
        element: <DataBoard />
      },
      {
        path: '/system',
        element: <SystemCenter />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]);

export default router;