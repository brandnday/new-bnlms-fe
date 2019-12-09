import { connect } from "react-redux";

import AttendanceManagerContent from "./AttendanceManagerContent";

import { getServiceList } from "../../actions-redux/service-manager/ServiceManagerActionCreator";
import { selectServiceList } from "../../actions-redux/service-manager/ServiceManagerReducer";
import { selectSelectedChurch } from "../../actions-redux/account/AccountReducer";
import { selectTermList } from "../../actions-redux/term-manager/TermManagerReducer";
import { getTermList } from "../../actions-redux/term-manager/TermManagerActionCreator";
const mapStateToProps = state => ({
  serviceList:selectServiceList(state),
  churchId:selectSelectedChurch(state),
  termList:selectTermList(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTermList: () => dispatch(getTermList()),
  getServiceList: () => dispatch(getServiceList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendanceManagerContent);
