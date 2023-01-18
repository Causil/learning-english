"use client"
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Typography } from 'antd';
import Image from 'next/image';
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
  getItem('Temas', 'sub1', <TeamOutlined />, [
    getItem('Greetings', '1'),
    getItem('Farewells', '2'),
    getItem('Introductions', '3'),
    getItem('Expressions', '4'),
    getItem('Personal information', '5'),
    getItem('The alphabet', '6'),
  ]),
];
export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer,colorPrimaryTextActive },
  } = theme.useToken();
  return (
    <>
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
            padding: "0 0 0 5%",
            background: 'white',
            borderRadius:"10px",
            justifyContent:"start",
            alignContent:"center",
          }}
        >   
           <Image
           src={"/Logo.png"}
           alt={"Logo de Eureka"}
           width={30}
           height={30}
           />
          <Title
          level={5}
          style={{margin:"2px 0 0 5px"}}
          >
            | Eureka
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
          <p> {`\\frac{1}{2}`} </p>
        </Footer>
      </Layout>
    </Layout>
    </>
  );
};
