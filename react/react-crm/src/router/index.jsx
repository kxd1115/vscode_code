import { createBrowserRouter } from 'react-router-dom';

import Login from '@/pages/Login';
import Layout from '@/pages/Layout';
import Home from '@/pages/Home';
import User from '@/pages/User';
import Work from '@/pages/Work';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/work',
        element: <Work></Work>
      },
      {
        path: '/user',
        element: <User></User>
      },
    ]
  }
]);

export default router;