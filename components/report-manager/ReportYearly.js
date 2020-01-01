import React, { Fragment } from "react";
import "antd/dist/antd.css";
import moment from "moment";
import { generateColumns } from "../../tools/generators";
import { Input, Col, Table, Row, Button } from "antd";
import Select from "../shared/Select";
const InputGroup = Input.Group;

let yearList = [];
for (let year = 2019; year <= moment().format("YYYY"); year++) {
  yearList.push({ id: `${year}`, text: `${year}` });
}

export default class ReportBirthday extends React.Component {
  state = {
    visible: false,
    editIndex: -1,
    date: "2019",
    monthId: 0
  };
  componentDidMount() {}

  handleClose = () => {
    this.setState({
      visible: false
    });
    Modal.destroyAll();
  };

  downloadReport = () => {
    this.props.downloadYearlyReport(this.state.date);
  };

  handleSubmit = () => {
    this.handleClose();
  };

  handleUpdateMonth = monthId => {
    this.setState({ monthId });
  };

  handleUpdateDate = date => {
    this.setState({ date });
  };

  render() {
    return (
      <Fragment>
        <InputGroup size="large">
          <Row gutter={16} style={{ marginBottom: 24 }}>
            <Col span={10}>
              <Select
                onChange={this.handleUpdateDate}
                size="large"
                style={{ width: "100%" }}
                value={this.state.date}
                label={"Year"}
                placeholder="Select year"
                options={yearList}
              />
            </Col>
            <Col span={4}>
              <Button
                type="primary"
                icon="add"
                size="large"
                onClick={this.downloadReport}
              >
                Download Yearly Report
              </Button>
            </Col>
          </Row>
        </InputGroup>
      </Fragment>
    );
  }
}
