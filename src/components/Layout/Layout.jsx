"use client"
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Typography } from 'antd';
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
const { Paragraph, Title } = Typography;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Class 1', '1', <PieChartOutlined />),
  getItem('Class 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer,colorPrimaryTextActive },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div
          style={{
            display: "flex",
            height: 32,
            margin: 16,
            padding: 0,
            //background: 'rgba(255, 255, 255, 0.2)',
            justifyContent:"center",
            alignContent:"center",
          }}
        >
            <Title
                    editable
                    level={5}
                    style={{
                      margin: 0,
                      color:"white"
                    }}
            >
                Learning English
            </Title>
        </div>
        
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Gretiings</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              color:colorPrimaryTextActive,
            }}
          >
            
             Bill is a cat.

          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Learning English
        </Footer>
      </Layout>
    </Layout>
  );
};
