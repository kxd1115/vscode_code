import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      我是一级路由
      <Link to="/board">面板</Link>
      <Link to="/">关于</Link>
      {/* 配置二级路由出口 */}
      <Outlet></Outlet>
    </div>
  )
};

export default Layout;