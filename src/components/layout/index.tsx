import React from 'react';
import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { CommentOutlined, HomeFilled, UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const items = Array.from({ length: 15 }).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

export const CommonLayout: React.FC = () => {
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onClick: MenuProps['onClick'] = (e) => {
    if(e.key === '1') navigate('/councillor');
    else navigate('/agenda');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          onClick={onClick}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={[
            {
              key: 1,
              icon: <UserOutlined />,
              label: "議員"
            },
            {
              key: 2,
              icon: <CommentOutlined />,
              label: "議題"
            }
          ]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[
            { title: <HomeFilled onClick={() => navigate('/')} /> },
          ]}
        />
        <div
          style={{
            height: '100%',
            width: '100%',
            background: colorBgContainer,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};