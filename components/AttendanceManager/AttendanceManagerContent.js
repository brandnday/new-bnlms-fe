import React from 'react'

import 'antd/dist/antd.css';
import { generateColumns } from '../../tools/generators';
import ChildrenManagerModal from './AttendanceManagerModal'
import {
  Button, Input, Col, Table, Row
} from 'antd';
import Select from '../shared/Select'
const InputGroup = Input.Group;

const data = [{ name: 'test', role: 'admin', status: 'active' }];
export default class AttendanceManager extends React.Component {
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
      { title: 'Birthday', key: 'birthday' },
      { title: 'Jam Absen', key: 'gender' },
    ]),
    {
      title: 'Action',
      key: 'id',
      dataIndex: 'id',
      render: (text, record) => (
        <>
          <a onClick={() => this.showModal(1, '')}>
            Absen</a>&nbsp;
          <a onClick={() => this.handleDelete(text)}>
            Delete Absen</a>
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
</Row>
          <Row gutter={16} style={{marginBottom:24}}>
            <Col span={5}>
              <Select
                onChange={() => console.log("asdf")}
                size='large'
                style={{ width: '100%' }}
                value={1996}
                label={"Tahun lahir"}
                placeholder='Tahun Lahir'
                options={[{id:2013,text:2013}]}
              />
            </Col>
            <Col span={5}>
              <Select
                onChange={() => console.log("asdf")}
                size='large'
                style={{ width: '100%' }}
                value={1}
                label={"Tahun lahir"}
                placeholder='Tahun Lahir'
                options={[{id:1,text:'January'}]}
              />
            </Col>
            <Col span={5}>
              <Select
                onChange={() => console.log("asdf")}
                size='large'
                style={{ width: '100%' }}
                value={1}
                label={"tanggal"}
                placeholder='Tanggal'
                options={[{id:1,text:'Tanggal 5'}]}
              />
            </Col>
            <Col span={5}>
              <Select
                onChange={() => console.log("asdf")}
                size='large'
                style={{ width: '100%' }}
                value={1}
                label={"Ibadah ke"}
                placeholder='Ibadah ke'
                options={[{id:1,text:'Ibadah ke 2'}]}
              />
            </Col>
            <Col span={3}>
              <Button type='primary' icon='add' size='large' onClick={() => console.log("search")}>Search</Button>
            </Col>
            <Col span={3}>
              <Button type='primary' icon='add' size='large' onClick={value =>this.showModal(-1, '')}>Insert New Attendance
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
        <ChildrenManagerModal
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
