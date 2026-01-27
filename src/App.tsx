import React, { useState } from 'react';
import { ConfigProvider, Switch, theme, Layout } from 'antd';
import { Signup } from './pages/Auth/Signup';
import { Content, Header } from 'antd/es/layout/layout';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark',
  );

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setDarkMode(checked);
    localStorage.setItem('theme', checked ? 'dark' : 'light');
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span></span>
          <Switch defaultChecked={darkMode} onChange={onChange} />
        </Header>
        <Content style={{ padding: '12px' }}>
          <Signup />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
