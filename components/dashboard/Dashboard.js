import React, { Fragment } from "react";
import moment from "moment";
import "antd/dist/antd.css";
import { generateColumns } from "../../tools/generators";
import {
  Input,
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
    loading: true,
    attendanceType: "NOT_ATTEND",
    name: ""
  };

  componentDidMount() {
    this.props.getDashboardNotificationList();
  }

  // handlePageChange = async page => {
  //   await this.props.updateCurrentPagination(page);
  //   this.handleGetAttendanceChildrenList(page);
  // };

  // resetFilter = () => {
  //   this.setState({
  //     serviceId: this.props.serviceList[0].id,
  //     termId: this.props.termList[0].id
  //   });

  //   this.handleGetAttendanceChildrenList(1);
  // };

  // handleOk = e => {
  //   this.setState({
  //     visible: false
  //   });
  // };

  // handleUpdateQRAttendance = async e => {
  //   const { childrenId } = await this.props.getAttendanceChildrenId(
  //     e.target.value
  //   );
  //   if (childrenId === -1) {
  //     this.setState({
  //       qrtext: ""
  //     });
  //     notification.error({
  //       message: `Error QR ID not found`,
  //       placement:'bottomLeft'
  //     });
  //   } else {
  //     const insertAttendance = await this.handleInsertAttendance(childrenId);
  //     this.setState({
  //       qrtext: ""
  //     });
  //     if(insertAttendance===200){

  //       notification.success({
  //         message: `Attendance successfully inserted`,
  //         placement:'bottomLeft'
  //       });
  //     }else{

  //     notification.error({
  //       message: `Attendance already inserted`,
  //       placement:'bottomLeft'
  //     });
  //     }

  //   }
  // };

  // handleGetAttendanceChildrenList = page => {
  //   const { date, serviceId, termId, name, attendanceType } = this.state;
  //   const requestData = {
  //     date: date.format("YYYY-MM-DD"),
  //     serviceId,
  //     termId,
  //     name,
  //     churchId: this.props.churchId,
  //     attendanceType,
  //     pagination: {
  //       page,
  //       size: 10
  //     }
  //   };
  //   this.props.getAttendanceChildrenList(requestData);
  // };

  // handleUpdateAttendanceType = async attendanceType => {
  //   await this.setState({ attendanceType });
  //   this.handleGetAttendanceChildrenList(1);
  // };
  // handleUpdateNameFilter = async e => {
  //   await this.setState({ name: e.target.value });
  //   this.handleGetAttendanceChildrenList(1);
  // };

  // handleChangeDatePicker = async date => {
  //   await this.setState({ date });
  //   this.handleGetAttendanceChildrenList(1);
  // };
  // handleUpdateService = async serviceId => {
  //   await this.setState({ serviceId });
  //   this.handleGetAttendanceChildrenList(1);
  // };
  // handleUpdateTerm = async termId => {
  //   await this.setState({ termId });
  //   this.handleGetAttendanceChildrenList(1);
  // };

  // handleCancel = e => {
  //   this.setState({
  //     visible: false
  //   });
  // };

  // handleInsertAttendance = async childrenId => {
  //   const { date, serviceId, termId } = this.state;
  //   await this.props.insertAttendance({
  //     churchId: this.props.churchId,
  //     date: date.format("YYYY-MM-DD"),
  //     serviceId,
  //     termId,
  //     childrenId
  //   });

  //   this.handleGetAttendanceChildrenList(1);
  // };

  // handleDelete = async editingId => {
  //   await this.props.deleteAttendance({ editingId });
  //   this.handleGetAttendanceChildrenList(1);
  // };
  // showModal = (editid, name) => {
  //   this.setState({
  //     visible: true,
  //     editdata: { id: editid }
  //   });
  // };
  // columns = [
  //   ...generateColumns([
  //     { title: "Name", key: "name" },
  //     { title: "Birthday", key: "birthdate", format: "DD MMM YYYY" },
  //     { title: "Attendance Time", key: "time" }
  //   ]),
  //   {
  //     title: "Action",
  //     key: "id",
  //     dataIndex: "id",
  //     render: (text, record) =>
  //       this.state.attendanceType === "NOT_ATTEND" ? (
  //         <a onClick={() => this.handleInsertAttendance(text)}>Absen</a>
  //       ) : (
  //         <a onClick={() => this.handleDelete(text)}>Delete Absen</a>
  //       )
  //   }
  // ];
  render() {
    return <Fragment>asdf</Fragment>;
  }
}
