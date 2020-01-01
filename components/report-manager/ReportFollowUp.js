import React, { Fragment } from "react";
import "antd/dist/antd.css";
import moment from "moment";
import { generateColumns } from "../../tools/generators";
import { Input, Col, Table, Row, DatePicker, Button } from "antd";
import Select from "../shared/Select";
const { MonthPicker } = DatePicker;
const InputGroup = Input.Group;

const followUpRange = [
  { id: 7, text: "1 past week" },
  { id: 32, text: "1 past month" },
  { id: 62, text: "2 past month" },
  { id: 90, text: "3 past month" },
  { id: 180, text: "6 past month" }
];

export default class ReportBirthday extends React.Component {
  state = {
    visible: false,
    editIndex: -1,
    date: moment().subtract(270, "days"),
    followUpRange: 7,
    monthId: 0
  };
  componentDidMount() {}

  handleClose = () => {
    this.setState({
      visible: false
    });
    Modal.destroyAll();
  };

  downloadReport = () => {
    this.props.downloadFollowUpReport(
      this.state.date,
      this.state.followUpRange
    );
  };

  handleSubmit = () => {
    this.handleClose();
  };

  handleUpdateMonth = monthId => {
    this.setState({ monthId });
  };

  handleUpdateDate = date => {
    this.setState({ date });
  };
  render() {
    return (
      <Fragment>
        <InputGroup size="large">
          <Row gutter={16} style={{ marginBottom: 24 }}>
            <Col span={8}>
              <MonthPicker
                style={{ width: "100%" }}
                value={this.state.date}
                format={"MMMM YYYY"}
                placeholder={"Select Year & Month"}
                onChange={this.handleUpdateDate}
              />
            </Col>
            <Col span={8}>
              <Select
                onChange={this.handleUpdateService}
                size="large"
                style={{ width: "100%" }}
                value={this.state.followUpRange}
                label={"Ibadah ke"}
                placeholder="Ibadah ke"
                options={followUpRange}
              />
            </Col>
            <Col span={4}>
              <Button
                type="primary"
                icon="add"
                size="large"
                onClick={this.downloadReport}
              >
                Download Follow Up Report
              </Button>
            </Col>
          </Row>
        </InputGroup>
      </Fragment>
    );
  }
}
