import './App.css';
import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import Dashboard from './pages/Dashboard';
import { Breadcrumb } from 'antd';

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const breadCrumbItems = [
  {
    href: '',
    title: <HomeOutlined />,
  },
  {
    href: '',
    title: (
      <>
        <UserOutlined />
        <span>Application List</span>
      </>
    ),
  },
  {
    title: 'Application',
  },
];

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ width: '100%', height: '100%' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            paddingTop: 12,
            background: colorBgContainer,
          }}
        >
          <Breadcrumb items={breadCrumbItems} style={{ marginLeft: 20 }} />
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Dashboard />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
