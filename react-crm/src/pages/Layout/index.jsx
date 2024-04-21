import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './index.scss';

import { 
  Layout, 
  Menu, 
  Button, 
  theme, 
  Popconfirm,
  Avatar,
  Space,
  Breadcrumb
} from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  PieChartOutlined,
  AlertOutlined,
  InsertRowAboveOutlined, AppstoreOutlined,
  UserAddOutlined, TeamOutlined,
  PaperClipOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  ExceptionOutlined,
  SearchOutlined, WarningOutlined, ExportOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

function getitem(key, label, icon, children) {
  if (!key) {
    return {
      icon,
      children,
      label
    }
  } else {
    return {
      key,
      icon,
      children,
      label
    } 
  }
  
}

const items = [
  getitem("/","系统首页",<HomeOutlined />),
  getitem("/databoard","数据看板",<PieChartOutlined />),

  getitem("","任务中心",<ExceptionOutlined />, [
    getitem("/workbench","任务进度",<AlertOutlined />),
    getitem("/task","任务列表",<PaperClipOutlined />),
    getitem("/releasetask","任务发布", <ExportOutlined />),

  ]),
  getitem("","会员中心",<UnorderedListOutlined />, [
    getitem("/member","会员查询",<SearchOutlined />),
    getitem("/customerlist","会员列表",<InsertRowAboveOutlined />),
    getitem("/customersea","会员公海", <AppstoreOutlined />),
  ]),
  getitem("","系统管理",<SettingOutlined />, [
    getitem("/user","新增用户", <UserAddOutlined />),
    getitem("/worktype","排班管理", <TeamOutlined />),
    getitem("/system","系统设置",<WarningOutlined />),
  ])
]

const CRMLayout = ()=> {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  // 实现点击菜单按钮切换路由
  const navigate = useNavigate();

  const onMenuClick = (route) => {
    navigate(route.key)
  }

  // 获取当前路由路径
  const location = useLocation;
  const selectedKey = location.pathname;

  // 退出登录后返回登录页
  const onConfirm = () => {
    navigate('/login')
    // 清除token
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      {/* 
      * collapsible: 表示layout可以隐藏 
      * 通过collapsed控制状态
      */}
        <div className='logo' />
        {/* 菜单栏 */}
        <Menu 
          theme='dark' // 风格
          mode='inline'
          // defaultSelectedKeys={['/']}
          selectedKeys={selectedKey}
          items={items}
          onClick={onMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer
          }}
        >
          {/* 展开隐藏菜单栏功能 */}
          <Button 
           type="text"
           icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined />}
           onClick={() => setCollapsed(!collapsed)} // 点击后隐藏layout菜单
           style={{
            fontSize: '16px',
            width: 64,
            height: 64
           }}
          />
          {/* 用户头像，名称，退出登录模块 */}
          <div className="user-info">
            <Space wrap size={16}>
              <Avatar shape="vertical" size={26} src='src/assets/user.jpeg' />
            </Space>
            <span className="user-logout">
              <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onConfirm}>
                <span className="user-name">会员管家-小东</span>
              </Popconfirm>
            </span>
          </div>
        </Header>
        {/* 内容模块 */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          {/* 设置二级路由出口 */}
          <Outlet />
        </Content>
      </Layout>

    </Layout>
  )
};

export default CRMLayout;