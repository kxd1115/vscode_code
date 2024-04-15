import { createBrowserRouter } from 'react-router-dom';

import Login from '@/pages/Login';
import Layout from '@/pages/Layout';
import Home from '@/pages/Home';
import User from '@/pages/User';
import Work from '@/pages/Work';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
  },
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
  {
    path: '/login',
    element: <Login></Login>
  }
]);

export default router;