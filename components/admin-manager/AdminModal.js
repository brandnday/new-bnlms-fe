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
    isLoading: false,
    searchfilter: { name: "" },
    editingdata: { id: "" },
  };

  requiredRules = (field)=>([
    {
      required: true,
      message: `Please input ${field}!`
    }
  ])

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if(!err){
        this.setState({isLoading:true})
        if (this.props.editingIndex===-1){
          await this.props.insertAdmin(values)
        } else {
          this.props.updateAdmin({...values,editingId:this.props.adminList[this.props.editingIndex].id})
        }
        this.setState({isLoading:false})
        this.props.form.resetFields();
        this.props.onSubmit();
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {editingIndex,adminList} = this.props;
    return (
        <Modal {...this.props}>
          <Row>
            <Col span={18}>
              <Form onSubmit={e=>this.handleSubmit(e)}  encType="multipart/form-data">
              <Form.Item {...formItemLayout} label="username">
                  {getFieldDecorator("username", {
                    initialValue: editingIndex>=0?adminList[editingIndex].username:'',
                    rules: this.requiredRules("username")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="password">
                  {getFieldDecorator("password", {
                    initialValue: editingIndex>=0?adminList[editingIndex].password:'',
                    rules: this.requiredRules("password")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="email">
                  {getFieldDecorator("email", {
                    initialValue: editingIndex>=0?adminList[editingIndex].email:'',
                    rules: this.requiredRules("email")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="phone">
                  {getFieldDecorator("phone", {
                    initialValue: editingIndex>=0?adminList[editingIndex].phone:'',
                    rules: this.requiredRules("phone")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="role">
                  {getFieldDecorator("role", {
                    initialValue: editingIndex>=0?adminList[editingIndex].role:'',
                    rules: this.requiredRules("role")
                  })(<Input />)}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={this.state.isLoading}
                  >
                    {this.props.editingIndex == -1 ? "Add" : "Update"}
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