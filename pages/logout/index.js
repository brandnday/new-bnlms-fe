import React from "react";
import { withCookies } from "react-cookie";
import Router from "next/router";

class LogOutPage extends React.Component {
  componentDidMount() {
    this.props.cookies.remove("token", { path: '/' });
    Router.push({
      pathname: "/login"
    });
  }
  render() {
    return "Logging out";
  }
}

export default withCookies(LogOutPage);
