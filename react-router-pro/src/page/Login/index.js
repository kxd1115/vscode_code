import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      我是登录
      {/* 声明式写法 */}
      <Link to="/article">跳转到文章页</Link>
      {/* 命令式写法 */}
      <button onClick={() => navigate('/article')}>跳转到文章页</button>
    </div>
  )
};

export default Login;