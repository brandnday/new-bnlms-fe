import React from "react";
import "antd/dist/antd.css";
import { generateColumns } from "../../tools/generators";
import ChurchModal from "./ChurchModalContainer";
import { Button, Input, Col, Table, Pagination } from "antd";
import { ADMIN_LIST_SIZE } from "../../constant/listSize";
const InputGroup = Input.Group;
export default class ChurchManagerPage extends React.Component {
  state = {
    visible: false,
    editIndex: -1,
    church: ""
  };

  componentDidMount() {
    this.props.getChurchList(this.state.church);
  }

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleSearch = e => {
    this.props.getChurchList(this.state.church);
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
    this.props.getChurchList(this.state.church);
  };

  handleSearchChurch = e => {
    this.setState({ church: e.target.value });
  };
  handleUpdateRole = e => {
    this.setState({ role: e });
  };

  handleDelete = async editingId => {
    await this.props.deleteChurch({ editingId });
  };

  showModal = editid => {
    this.setState({
      editIndex: editid,
      visible: true
    });
  };
  columns = [
    ...generateColumns([
      { title: "Church Name", key: "churchname" },
      { title: "Description", key: "description" },
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
              value={this.state.church}
              onChange={this.handleSearchChurch}
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
              Insert New Church
            </Button>
          </Col>
        </InputGroup>
        <Table
          columns={this.columns}
          dataSource={this.props.churchList}
          pagination={false}
          loading={false}
        />
        <Pagination
          defaultCurrent={this.props.totalData}
          pageSize={ADMIN_LIST_SIZE}
          total={this.props.totalData}
          onChange={this.handlePageChange}
        />
        <ChurchModal
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
