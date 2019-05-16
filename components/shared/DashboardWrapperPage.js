import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content, Footer } = Layout;
import Sidebar from '../../components/shared/Sidebar';
export default class SiderDemo extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{this.props.title}</Breadcrumb.Item>
              {this.props.subtitle === '' && <Breadcrumb.Item>{this.props.subtitle}</Breadcrumb.Item>}
            </Breadcrumb>

            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}