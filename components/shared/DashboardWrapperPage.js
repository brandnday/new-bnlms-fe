import React from "react";
import { Layout, Breadcrumb, Icon,Row,Col } from "antd";

const { Content, Footer, Header } = Layout;
import Sidebar from "../../components/shared/Sidebar";
export default class SiderDemo extends React.Component {
  state = {
    collapsed: false
  };
  handleToggle = () => {
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }));
  };
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar collapsed={this.state.collapsed} />
        <Layout>
          <Header style={{ background: "#fff" }}>
            <Row gutter={16}>
              <Col span={6}>
                {" "}
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.handleToggle}
                />
              </Col>
              <Col span={6} />
              <Col span={6} />
              <Col span={6}>asdadsf</Col>
            </Row>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>{this.props.title}</Breadcrumb.Item>
              {this.props.subtitle === "" && (
                <Breadcrumb.Item>{this.props.subtitle}</Breadcrumb.Item>
              )}
            </Breadcrumb>

            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
