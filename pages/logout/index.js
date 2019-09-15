import React from 'react'
import { withCookies } from 'react-cookie';
import Router from 'next/router'

class LogOutPage extends React.Component {
  componentDidMount(){
    this.props.cookies.remove('token');
    Router.push({
      pathname: '/login',
    })
  }
  render() {
    return (
''    );
  }
}

export default withCookies(LogOutPage);