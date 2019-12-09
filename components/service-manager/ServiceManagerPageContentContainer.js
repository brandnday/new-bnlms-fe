import { connect } from "react-redux";

import ServiceManagerPageContent from "./ServiceManagerPageContent";

import {
  getServiceList,
  deleteService
} from "../../actions-redux/service-manager/ServiceManagerActionCreator";

import { selectServiceList } from "../../actions-redux/service-manager/ServiceManagerReducer";

const mapStateToProps = state => ({
  serviceList: selectServiceList(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getServiceList: () => dispatch(getServiceList()),
  deleteService: values => dispatch(deleteService({...values}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceManagerPageContent);
