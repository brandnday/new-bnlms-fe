import { connect } from "react-redux";

import ServiceManagerPageContent from "./ServiceManagerPageContent";

import {
  getServiceList,
  deleteTerm
} from "../../actions-redux/service-manager/ServiceManagerActionCreator";

import { selectServiceList } from "../../actions-redux/service-manager/ServiceManagerReducer";

const mapStateToProps = state => ({
  serviceList: selectServiceList(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getServiceList: () => dispatch(getServiceList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceManagerPageContent);
