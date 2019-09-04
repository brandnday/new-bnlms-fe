import React from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';

export default class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
         <Card title="Login" bordered={false} style={{ width: 300 }}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
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
