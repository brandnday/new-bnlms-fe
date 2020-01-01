import React, { Fragment } from "react";
import "antd/dist/antd.css";
import moment from "moment";
import { Input, Col, Table, Row, DatePicker, Button } from "antd";
import Select from "../shared/Select";
const InputGroup = Input.Group;


export default class ReportBirthday extends React.Component {
  state = {
    visible: false,
    editIndex: -1,
    monthId: 0,
    serviceId: 0,
    date: moment()
  };
  componentDidMount() {
    this.props.getServiceList()
  }

  handleClose = () => {
    this.setState({
      visible: false
    });
    Modal.destroyAll();
  };
  downloadReport = () => {
    this.props.downloadPerServiceReport(this.state.date,this.state.serviceId);
  };
  handleSubmit = () => {
    this.handleClose();
  };
  handleUpdateService = serviceId => {
    this.setState({ serviceId });
  };
  handleUpdateDate = date => {
    this.setState({ date });
  };
  render() {
    return (
      <Fragment>
        <InputGroup size="large">
          <Row gutter={16} style={{ marginBottom: 24 }}>
            <Col span={6}>
              <DatePicker
                style={{ width: "100%" }}
                value={this.state.date}
                onChange={this.handleUpdateDate}
              />
            </Col>
            <Col span={6}>
              <Select
                onChange={this.handleUpdateService}
                size="large"
                style={{ width: "100%" }}
                value={this.state.serviceId}
                label={"Ibadah ke"}
                placeholder="Ibadah ke"
                options={[{id:0,text:'All Service'},...this.props.serviceList]}
              />
            </Col>
            <Col span={4}>
              <Button
                type="primary"
                icon="add"
                size="large"
                onClick={this.downloadReport}
              >
                Download Service report
              </Button>
            </Col>
          </Row>
        </InputGroup>
      </Fragment>
    );
  }
}
