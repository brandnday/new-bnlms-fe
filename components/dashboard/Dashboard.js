import React, { Fragment } from "react";
import moment from "moment";
import "antd/dist/antd.css";
import { generateColumns } from "../../tools/generators";
import {
  Input,
  Card,
  Col,
  Table,
  Row,
  DatePicker,
  Pagination,
  notification
} from "antd";
import Select from "../shared/Select";
const InputGroup = Input.Group;

const data = [{ name: "test", role: "admin", status: "active" }];
export default class AttendanceManager extends React.Component {
  state = {
    visible: false,
    editdata: 1,
    serviceId: 0,
    termId: 0,
    date: moment(),
    followUpList: [],
    loading: true,
    attendanceType: "NOT_ATTEND",
    name: ""
  };
  handleChangeFollowUpDateFormat = folup => {
    return {
      ...folup,
      birthdate: moment(folup.birthdate).format("DD MMM YYYY"),
      lastattendance: moment(folup.lastattendance, "YYYY-MM-DD").format("DD MMM YYYY")
    };
  };

  handleGetFollowUpList = async () => {
    const range = moment().subtract(8, "months");
    const followUp = await this.props.getFollowUpReport(range, 30);
    const followUpList =
      followUp.rows.length > 0
        ? followUp.rows.map(this.handleChangeFollowUpDateFormat)
        : [];
    console.log(followUpList);
    this.setState({ followUpList });
  };

  componentDidMount() {
    this.props.getDashboardNotificationList();
    this.handleGetFollowUpList();
  }

  columns = [
    ...generateColumns([
      { title: "Name", key: "name" },
      { title: "Birthday", key: "birthdate" },
      { title: "Last Attend", key: "lastattendance" }
    ])
  ];
  render() {
    return (
      <Fragment>
        {this.props.notificationList.map(notif => (
          <Card>
            <p>{notif.message}</p>
          </Card>
        ))}
        <br></br>

        <Card>
          <h2>Follow Up</h2>
            <Table
          columns={this.columns}
          dataSource={this.state.followUpList}
          pagination={false}
          loading={false}
        />
          </Card>
        
      </Fragment>
    );
  }
}
