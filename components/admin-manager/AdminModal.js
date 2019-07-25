import React from "react";
import { formItemLayout, tailFormItemLayout } from "../../constant/FormLayout";
import "antd/dist/antd.min.css";
import {
  Modal,
  Button,
  Input,
  Form,
  Row,
  Col,
} from "antd";
class AdminModal extends React.Component {
  state = {
    loading: false,
    searchfilter: { name: "" },
    editingdata: { id: "" },
    nama:'',
    password:'',
    email:'',
    phone:''
  };
  data = [];
  componentDidMount() {}
  requiredRules = (field)=>([
    {
      required: true,
      message: `Please input ${field}!`
    }
  ])
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Modal

        {...this.props}
        >
          <Row>
            <Col span={18}>
              <Form onSubmit={e=>this.props.onSubmit(e,this.props.form)} encType="multipart/form-data">
              <Form.Item {...formItemLayout} label="nama">
                  {getFieldDecorator("nama", {
                    initialValue: this.props.nama,
                    rules: this.requiredRules("nama")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="password">
                  {getFieldDecorator("password", {
                    initialValue: this.props.password,
                    rules: this.requiredRules("password")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="email">
                  {getFieldDecorator("email", {
                    initialValue: this.props.email,
                    rules: this.requiredRules("email")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="phone">
                  {getFieldDecorator("phone", {
                    initialValue: this.props.phone,
                    rules: this.requiredRules("phone")
                  })(<Input />)}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                  >
                    {this.props.editingid == -1 ? "Add" : "Update"}
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Modal>
    );
  }
}
const WrappedLogin2 = Form.create()(AdminModal);
export default WrappedLogin2;