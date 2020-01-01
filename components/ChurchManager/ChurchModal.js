import React from "react";
import { formItemLayout, tailFormItemLayout } from "../../constant/FormLayout";
import "antd/dist/antd.min.css";
import { Modal, Button, Input, Form, Row, Col } from "antd";
class AdminModal extends React.Component {
  state = {
    isLoading: false,
    searchfilter: { name: "" },
    editingdata: { id: "" }
  };

  requiredRules = field => [
    {
      required: true,
      message: `Please input ${field}!`
    }
  ];

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        this.setState({ isLoading: true });
        if (this.props.editingIndex === -1) {
          await this.props.insertChurch(values);
        } else {
          this.props.updateChurch({
            ...values,
            editingId: this.props.churchList[this.props.editingIndex].id
          });
        }
        this.setState({ isLoading: false });
        this.props.form.resetFields();
        this.props.onSubmit();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { editingIndex, churchList } = this.props;
    return (
      <Modal {...this.props}>
        <Row>
          <Col span={18}>
            <Form
              onSubmit={e => this.handleSubmit(e)}
              encType="multipart/form-data"
            >
              <Form.Item {...formItemLayout} label="churchname">
                {getFieldDecorator("churchname", {
                  initialValue:
                    editingIndex >= 0
                      ? churchList[editingIndex].churchname
                      : "",
                  rules: this.requiredRules("churchname")
                })(<Input />)}
              </Form.Item>
              <Form.Item {...formItemLayout} label="description">
                {getFieldDecorator("description", {
                  initialValue:
                    editingIndex >= 0
                      ? churchList[editingIndex].description
                      : "",
                  rules: this.requiredRules("description")
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