import React from "react";
import "antd/dist/antd.css";
import { generateColumns } from "../../tools/generators";
import TermModal from "./TermModalContainer";
import { Button, Input, Col, Table, Pagination, Modal } from "antd";
import Select from "../shared/Select";
const InputGroup = Input.Group;
export default class TermManagerPage extends React.Component {
  state = {
    visible: false,
    editIndex: -1,
    role: "ALL",
    username: ""
  };
  componentDidMount() {
    this.props.getTermList();
  }

  handleClose = () => {
    this.setState({
      visible: false
    });
    Modal.destroyAll();
  };

  handleSubmit = () => {
    this.handleClose();
    this.props.getTermList();
  };
  handlePageChange = async page => {
    await this.props.updateCurrentPagination(page);
    this.props.getAdminList(this.state.username, this.state.role);
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
      { title: "Term Name", key: "termname" },
      { title: "Start date", key: "startdate" },
      { title: "End date", key: "enddate" }
    ]),
    {
      title: "Action",
      key: "id",
      dataIndex: "id",
      render: (text, record, index) => (
        <span>
          <a onClick={() => this.showModal(index, "ADMIN")}>update</a>&emsp;
          <a onClick={() => this.handleDelete(text)}>Delete</a>&emsp;
        </span>
      )
    }
  ];

  render() {
    const modalTitle =
      this.state.editIndex === -1 ? "Insert New Term" : "Update Term";
    return (
      <div>
        <InputGroup size="large">
          <Col span={5}>
            <Button
              type="primary"
              icon="add"
              size="large"
              onClick={value => {
                this.showModal(-1, "ADMIN");
              }}
            >
              Insert New User
            </Button>
          </Col>
        </InputGroup>
        <Table
          columns={this.columns}
          dataSource={this.props.termList}
          pagination={false}
          loading={false}
        />
        <Pagination
          defaultCurrent={this.props.totalData}
          pageSize={2}
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
          <TermModal
            editingIndex={this.state.editIndex}
            onSubmit={this.handleSubmit}
            onCancel={this.handleClose}
          />
        </Modal>
      </div>
    );
  }
}
