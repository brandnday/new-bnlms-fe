import React from "react";
import { Layout, Breadcrumb, Icon, Row, Col, Spin } from "antd";
import { withCookies, CookiesProvider } from "react-cookie";
import Head from "next/head";
import { AuthWrapper } from "./AuthWrapperPage";
import Router from "next/router";
import HeaderPage from "./HeaderContainer";
const { Content, Footer, Header } = Layout;
import Sidebar from "../../components/shared/Sidebar";
class DashboardWrapperPage extends React.Component {
  state = {
    collapsed: false,
    authorized: true
  };
  componentDidMount() {
    if (!this.props.cookies.get("token")) {
      Router.push({
        pathname: "/login"
      });
    } else {
      this.authorizePage();
    }
  }
  handleToggle = () => {
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }));
  };
  authorizePage = async () => {
    const token = this.props.cookies.get("token");
    const {
      authorized,
      token: newToken,
      timeout
    } = await this.props.checkAuthorize(token);
    newToken && await this.props.cookies.set("token", newToken, { path: "/" });
    timeout &&
      Router.push({
        pathname: "/logout"
      });
    !authorized &&
      Router.push({
        pathname: "/dashboard"
      });
    this.setState({ authorized });
  };

  render() {
    return this.state.authorized ? (
      <CookiesProvider>
        <Head>
          <meta name="googlebot" content="noindex" />
          <meta name="googlebot-news" content="nosnippet" />
        </Head>
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar collapsed={this.state.collapsed} role={this.props.role} />
          <Layout>
            <HeaderPage
              collapsed={this.state.collapsed}
              onHandleToggle={this.handleToggle}
            />
            <Content
              style={{ margin: "0 16px" }}
              key={this.props.selectedChurchId}
            >
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>{this.props.title}</Breadcrumb.Item>
                {this.props.subtitle === "" && (
                  <Breadcrumb.Item>{this.props.subtitle}</Breadcrumb.Item>
                )}
              </Breadcrumb>

              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                {this.props.selectedChurchId === -300 ? (
                  <Spin />
                ) : (
                  this.props.children
                )}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>cc admin </Footer>
          </Layout>
        </Layout>
      </CookiesProvider>
    ) : (
      "Authorizing"
    );
  }
}
export default withCookies(DashboardWrapperPage);
