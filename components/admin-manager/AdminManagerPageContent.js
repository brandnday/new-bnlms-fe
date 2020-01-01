import React from "react";
import "antd/dist/antd.css";
import { generateColumns } from "../../tools/generators";
import AdminModal from "./AdminModalContainer";
import MapChurchModal from "./MapChurchModalContainer";
import { Button, Input, Col, Table, Pagination,Modal } from "antd";
import Select from "../shared/Select";
import { ADMIN_LIST_SIZE } from "../../constant/listSize";
const InputGroup = Input.Group;
const roleData = [
  { id: "ALL", text: "All" },
  { id: "admin", text: "super admin" }
];
export default class AdminManagerPage extends React.Component {
  state = {
    visible: false,
    modalType: "ADMIN",
    editIndex: -1,
    role: "ALL",
    username: ""
  };
  componentDidMount() {
    this.props.getAdminList(this.state.username, this.state.role);
    this.props.getAllChurch(this.state.username, this.state.role);

  }

  handleSearch = e => {
    this.props.getAdminList(this.state.username, this.state.role);
  };

  handleClose = () => {
    this.setState({
      visible: false
    });
    Modal.destroyAll()
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

  showModal = (editid,modalType) => {
    this.setState({
      editIndex: editid,
      modalType,
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
          <a onClick={() => this.showModal(index,'ADMIN')}>update</a>&emsp;
          <a onClick={() => this.handleDelete(text)}>Delete</a>&emsp;
          <a onClick={() => this.showModal(text,'MAPCHURCH')}>Church Mapping</a>
        </span>
      )
    }
  ];

  render() {
    const newAdminTitle = this.state.editIndex===-1?"Insert New Admin":"Update Admin"
    const modalTitle = this.state.modalType === "ADMIN"?newAdminTitle:'Map Admin to church';
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
                this.showModal(-1,'ADMIN');
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
          pageSize={ADMIN_LIST_SIZE}
          total={this.props.totalData}
          onChange={this.handlePageChange}
        />
        <Modal
          title={modalTitle}
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleClose}
          destroyOnClose={true}
        >
          {this.state.modalType === "ADMIN" ? (
            <AdminModal
              editingIndex={this.state.editIndex}
              onSubmit={this.handleSubmit}
              onCancel={this.handleClose}
            />
          ) : (
            <MapChurchModal
              visible={this.state.visibleMap}
              onCancel={this.handleClose}
              editingId={this.state.editIndex}
            />
          )}
        </Modal>
      </div>
    );
  }
}
