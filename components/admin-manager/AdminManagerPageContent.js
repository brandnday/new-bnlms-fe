import React from "react";
import "antd/dist/antd.css";
import { generateColumns } from "../../tools/generators";
import AdminModal from "./AdminModalContainer";
import { Button, Input, Col, Table, Pagination } from "antd";
import Select from "../shared/Select";
const InputGroup = Input.Group;
const roleData = [
  { id: "ALL", text: "All" },
  { id: "admin", text: "super admin" }
];
export default class AdminManagerPage extends React.Component {
  state = {
    visible: false,
    editIndex: -1,
    role: "ALL",
    username: ""
  };
  componentDidMount() {
    this.props.getAdminList(this.state.username, this.state.role);
  }

  handleOk = e => {
    this.setState({
      visible: false
    });
  };
  handleSearch = e => {
    this.props.getAdminList(this.state.username, this.state.role);
  };

  handleClose = () => {
    this.setState({
      visible: false
    });
  };
  handleSubmit = () => {
    this.handleClose();
    this.handleSearch();
  };
  handlePageChange = async page => {
    await this.props.updateCurrentPagination(page);
    this.props.getAdminList(this.state.username, this.state.role);
  };

  handleSearchName = e => {
    this.setState({ username: e.target.value });
  };
  handleUpdateRole = e => {
    this.setState({ role: e });
  };

  handleDelete = async editingId => {
    await this.props.deleteAdmin({ editingId });
  };

  showModal = editid => {
    this.setState({
      editIndex: editid,
      visible: true
    });
  };
  columns = [
    ...generateColumns([
      { title: "Name", key: "username" },
      { title: "Role", key: "role" },
      { title: "Status", key: "status" }
    ]),
    {
      title: "Action",
      key: "id",
      dataIndex: "id",
      render: (text, record, index) => (
        <span>
          <a onClick={() => this.showModal(index)}>update</a> &nbsp;
          <a onClick={() => this.handleDelete(text)}>Delete</a>
        </span>
      )
    }
  ];

  render() {
    return (
      <div>
        <InputGroup size="large">
          <Col span={5}>
            <Input
              placeholder="Search name"
              value={this.state.username}
              onChange={this.handleSearchName}
            />
          </Col>
          <Col span={5}>
            <Select
              size="large"
              style={{ width: 200 }}
              value={this.state.role}
              placeholder="Select role"
              options={roleData}
              onChange={this.handleUpdateRole}
            />
          </Col>
          <Col span={5}>
            <Button
              type="primary"
              icon="add"
              size="large"
              onClick={this.handleSearch}
            >
              Search
            </Button>
          </Col>
          <Col span={5}>
            <Button
              type="primary"
              icon="add"
              size="large"
              onClick={value => {
                this.showModal(-1);
              }}
            >
              Insert New User
            </Button>
          </Col>
        </InputGroup>
        <Table
          columns={this.columns}
          dataSource={this.props.adminList}
          pagination={false}
          loading={false}
        />
        <Pagination
          defaultCurrent={this.props.totalData}
          pageSize={2}
          total={this.props.totalData}
          onChange={this.handlePageChange}
        />
        <AdminModal
          title="Insert New Admin"
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleClose}
          onSubmit={this.handleSubmit}
          editingIndex={this.state.editIndex}
        />
      </div>
    );
  }
}
