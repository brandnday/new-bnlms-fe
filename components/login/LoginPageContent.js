import React from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import Router from 'next/router'
import {signin} from '../../actions-redux/login/LoginActionCreator'
import { withCookies, Cookies } from 'react-cookie';

class NormalLoginForm extends React.Component {
  state = {username:'',password:''}
  handleSubmit = async e => {
    e.preventDefault();
    const {username,password}=this.state;
    const sign = await signin(username,password);
    if(sign){
      this.props.cookies.set('token', sign, { path: '/' });
      Router.push({
        pathname: '/dashboard',
      })
    }
    
  };

  componentDidMount(){
    console.log('com level',this.props.cookies.get('token'))
    if(this.props.cookies.get('token')){
      Router.push({
        pathname: '/dashboard',
      })
    }
  }

  handleUsernameChange = (e)=>{
    this.setState({username:e.target.value})
  }
  handlePasswordChange = (e)=>{
    this.setState({password:e.target.value})
  }

  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
         <Card title="Login" bordered={false} style={{ width: 300 }}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              onChange={this.handleUsernameChange}
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              onChange={this.handlePasswordChange}
            />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
      </Card>
      </div>
    );
  }
}

export default withCookies(NormalLoginForm);
