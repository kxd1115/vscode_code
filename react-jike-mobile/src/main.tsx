import ReactDOM from 'react-dom/client'
import router from './router/index.tsx';
import { RouterProvider } from 'react-router-dom';


// 测试接口
import { fetchChannelAPI } from '@/apis/list.ts'
fetchChannelAPI().then((res) => {
  console.log(res.data.data.channels);
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
