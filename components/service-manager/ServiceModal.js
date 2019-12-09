import React from "react";
import moment from "moment";
import { formItemLayout, tailFormItemLayout } from "../../constant/FormLayout";
import "antd/dist/antd.min.css";
import { Input, Button, DatePicker, Form, Row, Col, TimePicker } from "antd";

const { RangePicker } = DatePicker;
const timeFormat = "HH:mm";

const rangeConfig = {
  rules: [{ type: "array", required: true, message: "Please select time!" }]
};
class ServiceModal extends React.Component {
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
      const { servicename } = values;
      const starttime = moment(values.starttime).format(timeFormat);
      const latetime = moment(values.latetime).format(timeFormat);
      const endtime = moment(values.endtime).format(timeFormat);
      if (!err) {
        this.setState({ isLoading: true });
        if (this.props.editingIndex === -1) {
          await this.props.insertService({
            starttime,
            latetime,
            endtime,
            servicename,
            churchid: this.props.churchid
          });
        } else {
          this.props.updateService({
            starttime,
            latetime,
            servicename,
            endtime,
            editingId: this.props.serviceList[this.props.editingIndex].id
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
    const { editingIndex, serviceList } = this.props;
    let initialValue = null;
    if (editingIndex >= 0) {
      const { startdate, enddate } = serviceList[editingIndex];
      initialValue = [moment(startdate), moment(enddate)];
    }
    return (
      <>
        <Row>
          <Col span={18}>
            <Form
              onSubmit={e => this.handleSubmit(e)}
              encType="multipart/form-data"
            >
              <Form.Item {...formItemLayout} label="servicename">
                {getFieldDecorator("servicename", {
                  initialValue:
                    editingIndex >= 0
                      ? serviceList[editingIndex].servicename
                      : "",
                  rules: this.requiredRules("servicename")
                })(<Input />)}
              </Form.Item>
              <Form.Item {...formItemLayout} label="starttime">
                {getFieldDecorator("starttime", {
                  initialValue:
                    editingIndex >= 0
                      ? moment(serviceList[editingIndex].starttime, timeFormat)
                      : moment("10:00", timeFormat),
                  rules: this.requiredRules("starttime")
                })(<TimePicker format={timeFormat} />)}
              </Form.Item>
              <Form.Item {...formItemLayout} label="latetime">
                {getFieldDecorator("latetime", {
                  initialValue:
                    editingIndex >= 0
                      ? moment(serviceList[editingIndex].latetime, timeFormat)
                      : moment("10:30", timeFormat),
                  rules: this.requiredRules("latetime")
                })(<TimePicker format={timeFormat} />)}
              </Form.Item>
              <Form.Item {...formItemLayout} label="endtime">
                {getFieldDecorator("endtime", {
                  initialValue:
                    editingIndex >= 0
                      ? moment(serviceList[editingIndex].endtime, timeFormat)
                      : moment("12:00", timeFormat),

                  rules: this.requiredRules("endtime")
                })(<TimePicker format={timeFormat} />)}
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
const WrappedLogin2 = Form.create()(ServiceModal);
export default WrappedLogin2;
