import { connect } from "react-redux";

import ServiceModal from "./ServiceModal.js";

import { insertService,updateService } from "../../actions-redux/service-manager/ServiceManagerActionCreator";
import { selectServiceList } from "../../actions-redux/service-manager/ServiceManagerReducer";
import { selectSelectedChurch } from "../../actions-redux/account/AccountReducer.js";
const mapStateToProps = state => ({
  serviceList: selectServiceList(state),
  churchid:selectSelectedChurch(state),
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  insertService: values => dispatch(insertService({...values})),
  updateService: values => dispatch(updateService({...values}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceModal);
