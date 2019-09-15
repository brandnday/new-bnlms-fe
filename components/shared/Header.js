import React from "react";
import { withCookies, CookiesProvider } from "react-cookie";
import { Layout, Row,Col, Icon } from "antd";
import Select from "../shared/Select";

import {mapAvailableChurchListToOptions} from '../../actions-redux/account/AccountReducer'
import {getAvailableChurchList,updateToken,updateCurrentChurchId} from '../../actions-redux/account/AccountActionCreator'
const {Header}  = Layout;
class HeaderPage extends React.Component {
  state={
    churchList:[]
  }
  async componentDidMount(){
    const {availableChurchList,selectedChurchId,token}=this.props;
    const tokenFromCookie = this.props.cookies.get('token');
    if(token==='' && tokenFromCookie){
      await this.props.updateToken(tokenFromCookie)
    }
    if(availableChurchList.length===0){
      await this.props.getAvailableChurchList()
    }
  
  }
  handleUpdateChurch = (e)=>{
    this.props.updateCurrentChurchId(e)
  }
  render() {
    return (
      <Header style={{ background: "#fff" }}>
        <Row gutter={16}>
          <Col span={6}>
            {" "}
            <Icon
              className="trigger"
              type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.props.onHandleToggle}
            />
          </Col>
          <Col span={6} />
          <Col span={6} />
          <Col span={6}>
          <Select
              size="large"
              style={{ width: 200 }}
              value={this.props.selectedChurchId}
              options={this.props.availableChurchList}
              onChange={this.handleUpdateChurch}
            />
          </Col>
        </Row>
      </Header>
    );
  }
}

export default withCookies(HeaderPage)