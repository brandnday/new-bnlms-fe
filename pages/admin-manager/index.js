import React from 'react'

import 'antd/dist/antd.css';
import DashboardWrapperPage from '../../components/shared/DashboardWrapperPage';
import { generateColumns } from '../../tools/generators';
import AdminModal from '../../components/admin-manager/AdminModal'
import {
  Button, Input, Select, Col, Table,
} from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;

const data = [{ name: 'test', role: 'admin', status: 'active' }];
const roleData = [{ id: 0, roleName: 'All' }, { id: 1, roleName: 'super admin' }]
export default class SiderDemo extends React.Component {
  state = {
    visible: false,
    editdata:1
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
      editdata:{id:editid}
    });
  };
  columns = [
    ...generateColumns([
      { title: 'Name', key: 'name' },
      { title: 'Role', key: 'role' },
      { title: 'Status', key: 'status' }
    ]),
    {
      title: 'Action',
      key: 'id',
      dataIndex: 'id',
      render: (text, record) => (
        <span>
        <a onClick={() => this.showModal(1, '')}>
          update</a>
          <a onClick={() => this.handleDelete(text)}>
            Delete</a>
        </span>
      )
    }]
  render() {
    return (
      <DashboardWrapperPage title='Dashboard' subtitle=''>
        <div>

          <InputGroup size='large'>
            <Col span={5}>
              <Input placeholder="Search name" />
            </Col>
            <Col span={5}>
              <Select
                onChange={() => { }}
                size='large'
                style={{ width: 200 }}
                value={0}
                placeholder='Select role'
              >
                {roleData.map((item, index) => (
                  <Option value={item.id} key={index}>
                    {item.roleName}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col span={5}>
              <Button
                type='primary'
                icon='add'
                size='large'
                onClick={value => {
                  this.showModal(-1, '');
                }}
              >Insert New User
            </Button>
            </Col>
          </InputGroup>
          <Table
            columns={this.columns}
            dataSource={data}
            pagination={false}
            loading={false}
          />

          <AdminModal
            title="Insert New Admin"
            visible={this.state.visible}
            footer={null}
            onCancel={this.handleCancel}
            handleSubmit={this.handleSubmit}
            editingid = {this.state.editdata.id}
          />

        </div>
      </DashboardWrapperPage>
    );
  }
}
