import {
  CloudUploadOutlined,
  FolderOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';

const { Header, Sider, Content } = Layout;

const Home: React.FC = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header
        style={{
          background: '#fff',
          padding: '0 24px',
          borderBottom: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h2 style={{ margin: 0 }}>Snowden Disk</h2>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<FolderOutlined />}>
              我的文件
            </Menu.Item>
            <Menu.Item key="2" icon={<CloudUploadOutlined />}>
              文件上传
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingOutlined />}>
              设置
            </Menu.Item>
          </Menu>
        </Sider>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: '#fff',
          }}
        >
          {/* 这里将来放置文件列表等内容 */}
          <div>欢迎使用 Snowden Disk</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
