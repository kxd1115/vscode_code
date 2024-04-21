import { createBrowserRouter } from "react-router-dom";

// 导入路由
import CRMLayout from "@/pages/Layout";
import Home from "@/pages/Home";
import WorkBench from "@/pages/WorkBench";
import Member from "@/pages/Member";
import CustomerList from "@/pages/CustomerList";
import TaskCenter from "@/pages/Task";
import User from "@/pages/User";
import DataBoard from "@/pages/DataBoard";
import SystemCenter from "@/pages/System";
import Login from "@/pages/Login";
import ReleaseTask from "@/pages/ReleaseTask";
import CustomerSea from "@/pages/CustomerSea";
import WorkType from "@/pages/WorkType";

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
        path: '/member',
        element: <Member />
      },
      {
        path: '/customerlist',
        element: <CustomerList />
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
      {
        path: '/releasetask',
        element: <ReleaseTask />
      },
      {
        path: '/customersea',
        element: <CustomerSea />
      },
      {
        path: '/worktype',
        element: <WorkType />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]);

export default router;