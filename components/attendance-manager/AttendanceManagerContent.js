import React, { Fragment } from "react";
import moment from "moment";
import "antd/dist/antd.css";
import { generateColumns } from "../../tools/generators";
import { Input, Col, Table, Row, DatePicker, Pagination } from "antd";
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
    Promise.all([this.props.getTermList(), this.props.getServiceList()]).then(
      () => {
        this.resetFilter();
      }
    );
  }

  handlePageChange = async page => {
    await this.props.updateCurrentPagination(page);
    this.handleGetAttendanceChildrenList(page);
  };

  resetFilter = () => {
    this.setState({
      serviceId: this.props.serviceList[0].id,
      termId: this.props.termList[0].id
    });

    this.handleGetAttendanceChildrenList(1);
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleGetAttendanceChildrenList = page => {
    const { date, serviceId, termId, name, attendanceType } = this.state;
    const requestData = {
      date: date.format("YYYY-MM-DD"),
      serviceId,
      termId,
      name,
      churchId: this.props.churchId,
      attendanceType,
      pagination: {
        page,
        size: 10
      }
    };
    this.props.getAttendanceChildrenList(requestData);
    console.log(this.props.attendanceChildrenList);
  };

  handleUpdateAttendanceType = async attendanceType => {
    await this.setState({ attendanceType });
    this.handleGetAttendanceChildrenList(1);
  };
  handleUpdateNameFilter = async e => {
    await this.setState({ name: e.target.value });
    this.handleGetAttendanceChildrenList(1);
  };

  handleChangeDatePicker = async date => {
    await this.setState({ date });
    this.handleGetAttendanceChildrenList(1);
  };
  handleUpdateService = async serviceId => {
    await this.setState({ serviceId });
    this.handleGetAttendanceChildrenList(1);
  };
  handleUpdateTerm = async termId => {
    await this.setState({ termId });
    this.handleGetAttendanceChildrenList(1);
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  handleInsertAttendance = async childrenId => {
    const { date, serviceId, termId } = this.state;
    await this.props.insertAttendance({
      churchId: this.props.churchId,
      date: date.format("YYYY-MM-DD"),
      serviceId,
      termId,
      childrenId
    });

    this.handleGetAttendanceChildrenList(1);
  };

  handleDelete = async editingId => {
    await this.props.deleteAttendance({ editingId });
    this.handleGetAttendanceChildrenList(1);
  };
  showModal = (editid, name) => {
    this.setState({
      visible: true,
      editdata: { id: editid }
    });
  };
  columns = [
    ...generateColumns([
      { title: "Name", key: "name" },
      { title: "Birthday", key: "birthdate", format: "DD MMM YYYY" },
      { title: "Attendance Time", key: "time" }
    ]),
    {
      title: "Action",
      key: "id",
      dataIndex: "id",
      render: (text, record) =>
        this.state.attendanceType === "NOT_ATTEND" ? (
          <a onClick={() => this.handleInsertAttendance(text)}>Absen</a>
        ) : (
          <a onClick={() => this.handleDelete(text)}>Delete Absen</a>
        )
    }
  ];
  render() {
    return (
      <Fragment>
        <InputGroup size="large">
          <Row gutter={16} style={{ marginBottom: 24 }}>
            <Col span={8}>
              <DatePicker
                style={{ width: "100%" }}
                value={this.state.date}
                onChange={this.handleChangeDatePicker}
              />
            </Col>
            <Col span={8}>
              <Select
                onChange={this.handleUpdateService}
                size="large"
                style={{ width: "100%" }}
                value={this.state.serviceId}
                label={"Ibadah ke"}
                placeholder="Ibadah ke"
                options={this.props.serviceList}
              />
            </Col>
            <Col span={8}>
              <Select
                onChange={this.handleUpdateTerm}
                size="large"
                style={{ width: "100%" }}
                value={this.state.termId}
                label={"Term ke"}
                placeholder="Term ke"
                options={this.props.termList}
              />
            </Col>
          </Row>
          <Row gutter={16} style={{ marginBottom: 24 }}>
            <Col span={18}>
              <Input
                placeholder="Search name"
                value={this.state.name}
                onChange={this.handleUpdateNameFilter}
              />
            </Col>
            <Col span={6}>
              <Select
                onChange={this.handleUpdateAttendanceType}
                size="large"
                style={{ width: "100%" }}
                value={this.state.attendanceType}
                label={"List type"}
                placeholder="List type"
                options={[
                  { text: "Have Not Attend", id: "NOT_ATTEND" },
                  { text: "Attended", id: "ATTENDED" }
                ]}
              />
            </Col>
          </Row>
        </InputGroup>
        <Table
          columns={this.columns}
          dataSource={this.props.attendanceChildrenList}
          pagination={false}
          loading={false}
        />
        <Pagination
          defaultCurrent={this.props.totalData}
          pageSize={10}
          total={this.props.totalData}
          onChange={this.handlePageChange}
        />
      </Fragment>
    );
  }
}
