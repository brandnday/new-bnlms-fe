import React from "react";

import "antd/dist/antd.css";
import { generateColumns } from "../../../tools/generators";
import ChildrenManagerModal from "../ChildrenManagerModal/ChildrenManagerModalContainer";
import { Button, Input, Col, Table, Row, Modal, Pagination } from "antd";
import Select from "../../shared/Select";
import { CHILDREN_LIST_SIZE } from "../../../constant/listSize";
const InputGroup = Input.Group;

const data = [{ name: "test", role: "admin", status: "active" }];
const roleData = [
  { id: 0, text: "All" },
  { id: 1, text: "super admin" }
];
export default class ChildrenManager extends React.Component {
  state = {
    visible: false,
    editIndex: -1
  };

  componentDidMount() {
    this.props.getChildrenList();
  }

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  handleSubmit = () => {
    this.handleClose();
    this.handleSearch();
  };

  handleClose = () => {
    this.setState({
      visible: false
    });
    Modal.destroyAll();
  };

  handleSearch = () => {
    this.props.getChildrenList();
  };

  showModal = editIndex => {
    this.setState({
      visible: true,
      editIndex
    });
  };

  handlePageChange = async page => {
    await this.props.updateCurrentPagination(page);
    this.props.getChildrenList();
  };

  handleDownloadAttendance = childId => () => {
    this.props.downloadChildrenAttendance(childId);
  };

  columns = [{
    title: "Name",
    key: "name",
    dataIndex: "name",
    render: (text, record, index) => (
      <>
       {`${text}(${record.nickname})`}
      </>
    )
  },
    ...generateColumns([
      { title: "Name", key: "nickname" },
      { title: "Birthday", key: "birthdate" },
      { title: "Gender", key: "gender" },
      { title: "Last Service", key: "lastService" }
    ]),
    {
      title: "Action",
      key: "id",
      dataIndex: "id",
      render: (text, record, index) => (
        <>
          <a onClick={this.handleDownloadAttendance(index)}>
            Attendance Report
          </a>
          &nbsp;
          <a onClick={() => this.showModal(index, "")}>Details</a>&nbsp;
          <a onClick={() => this.handleDelete(text)}>Delete</a>
        </>
      )
    }
  ];

  render() {
    return (
      <>
        <InputGroup size="large">
          <Row gutter={16} style={{ marginBottom: 24 }}>
            <Col span={5}>
              <Input placeholder="Search name" />
            </Col>
            <Col span={5}>
              <Select
                onChange={() => console.log("asdf")}
                size="large"
                style={{ width: "100%" }}
                value={0}
                label={"Gender"}
                placeholder="Select Gender"
                options={[{ id: 0, text: "male" }]}
              />
            </Col>
            <Col span={5}>
              <Select
                onChange={() => console.log("asdf")}
                size="large"
                style={{ width: "100%" }}
                value={1996}
                label={"Tahun lahir"}
                placeholder="Tahun Lahir"
                options={[{ id: 1996, text: 1996 }]}
              />
            </Col>
            <Col span={5}>
              <Select
                onChange={() => console.log("asdf")}
                size="large"
                style={{ width: "100%" }}
                value={1}
                label={"Tahun lahir"}
                placeholder="Tahun Lahir"
                options={[{ id: 1, text: "January" }]}
              />
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                icon="add"
                size="large"
                onClick={this.handleSearch}
              >
                Search
              </Button>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                icon="add"
                size="large"
                onClick={value => this.showModal(-1, "")}
              >
                Insert New Children
              </Button>
            </Col>
          </Row>
        </InputGroup>
        <Table
          columns={this.columns}
          dataSource={this.props.childrenList}
          pagination={false}
          loading={false}
          rowKey={record => `as${record.uid}`}
        />

        <Pagination
          defaultCurrent={this.props.totalData}
          pageSize={CHILDREN_LIST_SIZE}
          total={this.props.totalData}
          onChange={this.handlePageChange}
        />

        <ChildrenManagerModal
          title="Insert New Admin Role"
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
          editingIndex={this.state.editIndex}
        />
      </>
    );
  }
}
