import React, { useState } from 'react';

import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  DashboardOutlined,
  TeamOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <HomeOutlined />
          <span>Home</span>
          <Link to="/"></Link>
        </Menu.Item>

        <Menu.Item key="/users">
          <TeamOutlined />
          <span>Users</span>
          <Link to="/users"></Link>
        </Menu.Item>

        <Menu.Item key="/users-redux">
          <UsergroupAddOutlined />
          <span>Users Redux</span>
          <Link to="/users-redux"></Link>
        </Menu.Item>

        <Menu.Item key="/counter">
          <DashboardOutlined />
          <span>Counter</span>
          <Link to="/counter"></Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default App;
