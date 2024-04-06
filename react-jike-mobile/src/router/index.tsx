import Home from "@/pages/Home";
import Detail from "@/pages/Detail";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: 'home',
    element: <Home></Home>
  },
  {
    path: 'detail',
    element: <Detail></Detail>
  },
]);

export default router;