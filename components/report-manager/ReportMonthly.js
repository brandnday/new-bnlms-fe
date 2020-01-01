import React, { Fragment } from "react";
import "antd/dist/antd.css";
import moment from "moment";
import { generateColumns } from "../../tools/generators";
import { Input, Col, Table, Row, DatePicker, Button } from "antd";
import Select from "../shared/Select";
const { MonthPicker } = DatePicker;
const InputGroup = Input.Group;

const monthList = [
  { text: "January", id: 0 },
  { text: "February", id: 1 },
  { text: "March", id: 2 },
  { text: "April", id: 3 },
  { text: "May", id: 4 },
  { text: "June", id: 5 },
  { text: "July", id: 6 },
  { text: "August", id: 7 },
  { text: "September", id: 8 },
  { text: "October", id: 9 },
  { text: "November", id: 10 },
  { text: "December", id: 11 },
  { text: "All Months", id: 12 }
];

export default class ReportBirthday extends React.Component {
  state = {
    visible: false,
    editIndex: -1,
    date: moment(),
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
    this.props.downloadMonthlyReport(this.state.data);
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
            <Col span={10}>
              <MonthPicker
                style={{ width: "100%" }}
                value={this.state.date}
                format={'MMMM YYYY'}
                placeholder={"Select Year & Month"}
                onChange={this.handleUpdateDate}
              />
            </Col>
            <Col span={4}>
              <Button
                type="primary"
                icon="add"
                size="large"
                onClick={this.downloadReport}
              >
                Download Monthly Report
              </Button>
            </Col>
          </Row>
        </InputGroup>
      </Fragment>
    );
  }
}
