import React, { Fragment } from "react";
import "antd/dist/antd.css";
import { generateColumns } from "../../tools/generators";
import { Input, Col, Table, Row, DatePicker, Button } from "antd";
import Select from "../shared/Select";
const InputGroup = Input.Group;


export default class ReportBirthday extends React.Component {
  state = {
    visible: false,
    editIndex: -1,
    termId: 0
  };
  componentDidMount() {

    this.props.getTermList();
  }

  handleClose = () => {
    this.setState({
      visible: false
    });
    Modal.destroyAll();
  };
  downloadReport = () => {
    this.props.downloadPointReportPerTerm(this.state.termId);
  };
  handleSubmit = () => {
    this.handleClose();
  };
  handleUpdateTerm = termId => {
    this.setState({ termId });
  };
  render() {
    return (
      <Fragment>
        <InputGroup size="large">
          <Row gutter={16} style={{ marginBottom: 24 }}>
            <Col span={8}>
              <Select
                onChange={this.handleUpdateTerm}
                size="large"
                style={{ width: "100%" }}
                value={this.state.termId}
                label={"Choose Report"}
                placeholder="Choose Report"
                options={this.props.termList}
              />
            </Col>
            <Col span={4}>
              <Button
                type="primary"
                icon="add"
                size="large"
                onClick={this.downloadReport}
              >
                Download birthday report
              </Button>
            </Col>
          </Row>
        </InputGroup>
      </Fragment>
    );
  }
}
