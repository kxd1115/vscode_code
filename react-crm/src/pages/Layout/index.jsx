import { Layout, Menu, Button, theme } from 'antd';
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  PieChartOutlined,
  AlertOutlined,
  InsertRowAboveOutlined,
  UserOutlined,
  PaperClipOutlined,
  HomeOutlined
} from '@ant-design/icons';
import './index.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const items = [
  {
    key: "/",
    label: "首页",
    icon: <HomeOutlined />
  },
  {
    key: "/workbench",
    label: "工作台",
    icon: <PaperClipOutlined />
  },
  {
    key: "/memberlist",
    label: "会员列表",
    icon: <InsertRowAboveOutlined />
  },
  {
    key: "/task",
    icon: <AlertOutlined />,
    label: "任务中心"
  },
  {
    key: "/user",
    label: "用户管理",
    icon: <UserOutlined />
  },
  {
    key: "/databoard",
    label: "数据看板",
    icon: <PieChartOutlined />
  },
  {
    key: "/system",
    label: "系统中心",
    icon: <SettingOutlined />
  },
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

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      {/* 
      * collapsible: 表示layout可以隐藏 
      * 通过collapsed控制状态
      */}
        <div className='logo' />
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
        </Header>
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