import React from 'react'

import 'antd/dist/antd.css';
import { generateColumns } from '../../tools/generators';
import AdminRoleModal from './AdminRoleModal'
import {
  Button, Input, Col, Table, Row
} from 'antd';
import Select from '../../components/shared/Select'
const InputGroup = Input.Group;

const data = [{ name: 'test', role: 'admin', status: 'active' }];
const roleData = [{ id: 0, text: 'All' }, { id: 1, text: 'super admin' }]
export default class AdminRoleMapping extends React.Component {
  state = {
    visible: false,
    editdata: 1
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

  showModal = (editid, name) => {
    this.setState({
      visible: true,
      editdata: { id: editid }
    });
  };
  columns = [
    ...generateColumns([
      { title: 'Name', key: 'name' },
      { title: 'Role', key: 'role' },
      { title: 'Church', key: 'church' },
      { title: 'Status', key: 'status' }
    ]),
    {
      title: 'Action',
      key: 'id',
      dataIndex: 'id',
      render: (text, record) => (
        <>
          <a onClick={() => this.showModal(1, '')}>
            update</a>&nbsp;
          <a onClick={() => this.handleDelete(text)}>
            Delete</a>
        </>
      )
    }]
  render() {
    return (
      <>

        <InputGroup size='large'>
          <Row gutter={16} style={{marginBottom:24}}>
            <Col span={5}>
              <Input placeholder="Search name" />
            </Col>
            <Col span={5}>
              <Select
                onChange={() => console.log("asdf")}
                size='large'
                style={{ width: '100%' }}
                value={0}
                placeholder='Select role'
                options={roleData}
              />
            </Col>
            <Col span={3}>
              <Button type='primary' icon='add' size='large' onClick={() => console.log("search")}>Search</Button>
            </Col>
            <Col span={3}>
              <Button type='primary' icon='add' size='large' onClick={value =>this.showModal(-1, '')}>Insert New Role
            </Button>
            </Col>
          </Row>
        </InputGroup>
        <Table
          columns={this.columns}
          dataSource={data}
          pagination={false}
          loading={false}
        />
        <AdminRoleModal
          title="Insert New Admin Role"
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
          editingid={this.state.editdata.id}
        />
      </>
    );
  }
}
