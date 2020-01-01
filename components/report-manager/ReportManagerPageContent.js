import React, { Fragment } from "react";
import "antd/dist/antd.css";
import AttendanceReport from "./ReportAttendanceContainer";
import { Input, Col, Table, Row, DatePicker, Pagination } from "antd";
import BirthdayReport from "./ReportBirthdayContainer";
import ServiceReport from "./ReportPerServiceContainer";
import MonthlyReport from "./ReportMonthlyContainer";
import YearlyReport from "./ReportYearlyContainer";
import FollowUpReport from "./ReportFollowUpContainer";
import PointReport from "./ReportPointContainer";
import Select from "../shared/Select";
const InputGroup = Input.Group;

const reportList = [
  { text: "Attendance Report", id: "ATTENDANCE_REPORT" },
  { text: "Birthday Report", id: "BIRTHDAY_REPORT" },
  { text: "Service Report", id: "SERVICE_REPORT" },
  { text: "Monthly Report", id: "MONTHLY_REPORT" },
  { text: "Yearly Report", id: "YEARLY_REPORT" },
  { text: "Follow Up Report", id: "FOLLOWUP_REPORT" },
  { text: "Point Report", id: "POINT_REPORT" }
];
const reportComponent = {
  ATTENDANCE_REPORT: <AttendanceReport />,
  BIRTHDAY_REPORT: <BirthdayReport />,
  SERVICE_REPORT: <ServiceReport />,
  MONTHLY_REPORT: <MonthlyReport />,
  YEARLY_REPORT: <YearlyReport />,
  FOLLOWUP_REPORT: <FollowUpReport />,
  POINT_REPORT: <PointReport />
};

export default class ReportManagerPage extends React.Component {
  state = {
    visible: false,
    editIndex: -1,
    reportId: "FOLLOWUP_REPORT"
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
  handleUpdateReport = reportId => {
    this.setState({ reportId });
  };
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
                options={reportList}
              />
            </Col>
          </Row>
          <Row key={this.state.reportId}>
            {reportComponent[this.state.reportId]}
          </Row>
        </InputGroup>
      </Fragment>
    );
  }
}
