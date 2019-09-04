import React from "react";
import { formItemLayout, tailFormItemLayout } from "../../../constant/FormLayout";
import "antd/dist/antd.min.css";
import {
  Modal,
  Button,
  Input,
  Form,
  Row,
  Col,
} from "antd";
class ChildrenManagerModal extends React.Component {
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
          await this.props.insertChildren(values)
        } else {
          this.props.updateChildren({...values,editingIndex:this.props.adminList[this.props.editingIndex].id})
        }
        this.setState({isLoading:false})
        this.props.form.resetFields();
        this.props.onSubmit();
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const {editingIndex,childrenList} = this.props;
    return (
        <Modal

        {...this.props}
        >
          <Row>
            <Col span={18}>
              <Form onSubmit={e=>this.handleSubmit(e)}  encType="multipart/form-data">
              <Form.Item {...formItemLayout} label="Name">
                  {getFieldDecorator("name", {
                    initialValue: editingIndex>=0?childrenList[editingIndex].name:'',
                    rules: this.requiredRules("name")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Nama Panggilan">
                  {getFieldDecorator("nickname", {
                    initialValue: editingIndex>=0?childrenList[editingIndex].nickname:'',
                    rules: this.requiredRules("nickname")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Gender">
                  {getFieldDecorator("gender", {
                    initialValue: editingIndex>=0?childrenList[editingIndex].gender:'',
                    rules: this.requiredRules("gender")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Address">
                  {getFieldDecorator("address", {
                    initialValue: editingIndex>=0?childrenList[editingIndex].address:'',
                    rules: this.requiredRules("address")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="School">
                  {getFieldDecorator("school", {
                    initialValue: editingIndex>=0?childrenList[editingIndex].school:'',
                    rules: this.requiredRules("school")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Phone">
                  {getFieldDecorator("phone", {
                    initialValue: editingIndex>=0?childrenList[editingIndex].phone:'',
                    rules: this.requiredRules("phone")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Father">
                  {getFieldDecorator("father", {
                    initialValue: editingIndex>=0?childrenList[editingIndex].father:'',
                    rules: this.requiredRules("father")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Mother">
                  {getFieldDecorator("mother", {
                    initialValue: editingIndex>=0?childrenList[editingIndex].mother:'',
                    rules: this.requiredRules("mother")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Birthdate">
                  {getFieldDecorator("birthdate", {
                    initialValue: editingIndex>=0?childrenList[editingIndex].birthdate:'',
                    rules: this.requiredRules("birthdate")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Registered At">
                  {getFieldDecorator("registered_at", {
                    initialValue: editingIndex>=0?childrenList[editingIndex].registered_at:'',
                    rules: this.requiredRules("registered_at")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Photo">
                  {getFieldDecorator("photo", {
                    initialValue: editingIndex>=0?childrenList[editingIndex].photo:'',
                    rules: this.requiredRules("photo")
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Card Code">
                  {getFieldDecorator("attendanceid", {
                    initialValue: editingIndex>=0?childrenList[editingIndex].attendanceid:'',
                    rules: this.requiredRules("attendanceid")
                  })(<Input />)}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                  >
                    {this.props.editingIndex === -1 ? "Add" : "Update"}
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Modal>
    );
  }
}
const WrappedLogin2 = Form.create()(ChildrenManagerModal);
export default WrappedLogin2;