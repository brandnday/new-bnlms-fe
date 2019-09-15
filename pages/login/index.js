import React from 'react'
import 'antd/dist/antd.css';
import LoginPageContent from '../../components/login/LoginPageContent';

export default class AdminManagerPage extends React.Component {
  render() {
    console.log('page level',this.props)
    return (
        <LoginPageContent />
    );
  }
}
