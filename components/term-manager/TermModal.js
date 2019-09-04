import React from "react";
import moment from 'moment'
import { formItemLayout, tailFormItemLayout } from "../../constant/FormLayout";
import "antd/dist/antd.min.css";
import {
  Modal,
  Button,
  DatePicker,
  Form,
  Row,
  Col,
} from "antd";

const {  RangePicker } = DatePicker;

const rangeConfig = {
  rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};
class TermModal extends React.Component {
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
      const [termstart,termend]=values.termrange;
      const startdate = moment(termstart).format('YYYY-MM-DD');
      const enddate = moment(termend).format('YYYY-MM-DD');
      console.log(startdate)
      console.log(enddate)
      if(!err){
        this.setState({isLoading:true})
        if (this.props.editingIndex===-1){
          await this.props.insertTerm({startdate,enddate,churchid:0})
        } else {
          this.props.updateTerm({startdate,enddate,churchid:0,editingId:this.props.termList[this.props.editingIndex].id})
        }
        this.setState({isLoading:false})
        this.props.form.resetFields();
        this.props.onSubmit();
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {editingIndex,termList} = this.props;
    let initialValue=null;
    if(editingIndex>=0){
      const {startdate,enddate} = termList[editingIndex];
      initialValue=[moment(startdate),moment(enddate)]
    }
    return (
        <>
          <Row>
            <Col span={18}>
              <Form onSubmit={e=>this.handleSubmit(e)}  encType="multipart/form-data">
              <Form.Item {...formItemLayout} label="termrange">
                  {getFieldDecorator('termrange', {...rangeConfig,initialValue})(<RangePicker />)}
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
const WrappedLogin2 = Form.create()(TermModal);
export default WrappedLogin2;