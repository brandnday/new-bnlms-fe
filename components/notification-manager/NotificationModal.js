import React from "react";
import moment from "moment";
import { formItemLayout, tailFormItemLayout } from "../../constant/FormLayout";
import "antd/dist/antd.min.css";
import { Input, Button, DatePicker, Form, Row, Col } from "antd";
import Select from "../shared/Select";

const { RangePicker } = DatePicker;

class NotificationModal extends React.Component {
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
      const { message, priority, expiry_date, churchid } = values;
      if (!err) {
        this.setState({ isLoading: true });
        if (this.props.editingIndex === -1) {
          await this.props.insertNotification({
            message,
            priority,
            expiry_date:moment(expiry_date).format('YYYY-MM-DD'),
            churchid
          });
        } else {
          this.props.updateNotification({
            message,
            priority,
            expiry_date:moment(expiry_date).format('YYYY-MM-DD'),
            churchid,
            editingId: this.props.notificationList[this.props.editingIndex].id
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
    const { editingIndex, termList } = this.props;
    const churchListOption = [
      { id: -1, text: "All Church" },
      ...this.props.churchList
    ];
    return (
      <>
        <Row>
          <Col span={18}>
            <Form
              onSubmit={e => this.handleSubmit(e)}
              encType="multipart/form-data"
            >
              <Form.Item {...formItemLayout} label="Message">
                {getFieldDecorator("message", {
                  initialValue: this.props.notificationList[this.props.editingIndex].message
                })(<Input />)}
              </Form.Item>
              <Form.Item {...formItemLayout} label="Priority">
                {getFieldDecorator("priority", {
                  initialValue: this.props.notificationList[this.props.editingIndex].priority
                })(<Input />)}
              </Form.Item>
              <Form.Item {...formItemLayout} label="Expiry Date">
                {getFieldDecorator("expiry_date", {
                  initialValue: moment(this.props.notificationList[this.props.editingIndex].expiry_date)
                })(<DatePicker />)}
              </Form.Item>

              <Form.Item {...formItemLayout} label="Church">
                {getFieldDecorator("churchid", {
                  initialValue:
                    editingIndex >= 0
                      ? this.props.notificationList[this.props.editingIndex].churchid
                      : -1,
                  rules: this.requiredRules("churchid")
                })(
                  <Select
                    options={churchListOption}
                    placeholder="Select Church"
                  />
                )}
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
      </>
    );
  }
}
const WrappedLogin2 = Form.create()(NotificationModal);
export default WrappedLogin2;
