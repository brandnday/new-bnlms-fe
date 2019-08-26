import React from "react";
import { formItemLayout, tailFormItemLayout } from "../../constant/FormLayout";
import "antd/dist/antd.min.css";
import { generateColumns } from "../../tools/generators";
import { Table, Button, Form, Row, Col,Input } from "antd";
import Select from "../shared/Select";
import Column from "antd/lib/table/Column";
const InputGroup = Input.Group;

const roleData = [
  { id: 'ADMIN', text: "Admin" },
  { id: 'OPERATOR', text: "Operator" },
];
class MapChurchModal extends React.Component {
  state = {
    isLoading: false,
    searchfilter: { name: "" },
    editingdata: { id: "" }
  };

  requiredRules = field => [
    {
      required: true,
      message: `Please input ${field}!`
    }
  ];
  componentDidMount(){
    this.props.getAllChurchAdminMapping(this.props.editingId);
  }

  handleDeleteMapping =async  mapId => {
    await this.props.deleteAdminMapChurch(mapId);
    this.props.getAllChurchAdminMapping(this.props.editingId);};

  handleUpdateChurch = (churchid) => {
    this.setState({churchid})
  };
  handleUpdateRole = (role) => {
    this.setState({role})
  };
  handleAddMapping = async () => {
    const {churchid,role} = this.state;
    await this.props.insertAdminMapChurch(this.props.editingId,churchid,role);
    this.props.getAllChurchAdminMapping(this.props.editingId);
  };
  
  columns = [
    ...generateColumns([
      { title: "Church Name", key: "churchname" },
      { title: "Role", key: "role" }
    ]),
    {
      title: "Action",
      key: "id",
      dataIndex: "id",
      render: (text, record, index) => (
        <span>
          <a onClick={() => this.handleDeleteMapping(text)}>Delete</a>&emsp;
        </span>
      )
    }
  ];
  render() {
    return (
      <>
        <Row>
           <Table
              columns={this.columns}
              dataSource={this.props.mapChurchList}
              pagination={false}
              loading={false}
            />
            <InputGroup size="large">
              <Col >
                <Select
                  size="large"
                  style={{ width: 200 }}
                  placeholder="Select Church"
                  options={this.props.churchList}
                  onChange={this.handleUpdateChurch}
                />
              </Col>
              <Col>
                <Select
                  size="large"
                  style={{ width: 200 }}
                  placeholder="Select role"
                  options={roleData}
                  onChange={this.handleUpdateRole}
                />
              </Col>
              <Col>
                <Button
                  type="primary"
                  icon="add"
                  size="large"
                  onClick={this.handleAddMapping}
                >
                  Add Mapping
                </Button>
              </Col>
            </InputGroup>
        </Row>
      </>
    );
  }
}
const WrappedLogin2 = Form.create()(MapChurchModal);
export default WrappedLogin2;
