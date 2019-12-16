import React, { Fragment } from "react";
import "antd/dist/antd.css";
import { generateColumns } from "../../tools/generators";
import { Input, Col, Table, Row, DatePicker, Pagination } from "antd";
import Select from "../shared/Select";
const InputGroup = Input.Group;


export default class ReportAttendance extends React.Component {
  state = {
    visible: false,
    editIndex: -1,
    reportId:'ATTENDANCE_REPORT',
  };
  componentDidMount() {}

  handleClose = () => {
    this.setState({
      visible: false
    });
    Modal.destroyAll();
  };

  handleSubmit = () => {
    this.handleClose();
  };
  handleUpdateReport=(reportId)=>{
    this.setState({reportId})
  }
  render() {
    return (
      <Fragment>
        <InputGroup size="large">
          <Row gutter={16} style={{ marginBottom: 24 }}>
            <Col span={8}>
              <Select
                onChange={this.handleUpdateReport}
                size="large"
                style={{ width: "100%" }}
                value={this.state.reportId}
                label={"Choose Report"}
                placeholder="Choose Report"
                options={[]}
              />
            </Col>
          </Row>
        </InputGroup>
        asdfasdf
      </Fragment>
    );
  }
}
