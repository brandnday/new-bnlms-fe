import { connect } from "react-redux";

import AttendanceManagerContent from "./AttendanceManagerContent";

import { getServiceList } from "../../actions-redux/service-manager/ServiceManagerActionCreator";
import { mapServiceListToOptions } from "../../actions-redux/service-manager/ServiceManagerReducer";
import { selectSelectedChurch } from "../../actions-redux/account/AccountReducer";
import { mapTermListToOptions } from "../../actions-redux/term-manager/TermManagerReducer";
import { getTermList } from "../../actions-redux/term-manager/TermManagerActionCreator";
import {
  getAttendanceChildrenList,
  updateCurrentPagination,
  insertAttendance,
  deleteAttendance,
  getAttendanceChildrenId
} from "../../actions-redux/attendance-manager/AttendanceManagerActionCreator";
import { selectAttendanceChildrenList } from "../../actions-redux/attendance-manager/AttendanceManagerReducer";
import { selectTotalData } from "../../actions-redux/attendance-manager/AttendanceManagerReducer";
const mapStateToProps = state => ({
  serviceList: mapServiceListToOptions(state),
  churchId: selectSelectedChurch(state),
  termList: mapTermListToOptions(state),
  attendanceChildrenList: selectAttendanceChildrenList(state),
  totalData: selectTotalData(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTermList: () => dispatch(getTermList()),
  getServiceList: () => dispatch(getServiceList()),
  getAttendanceChildrenId: attendanceId =>
    dispatch(getAttendanceChildrenId(attendanceId)),
  updateCurrentPagination: page => dispatch(updateCurrentPagination(page)),
  getAttendanceChildrenList: requestData =>
    dispatch(getAttendanceChildrenList(requestData)),
  insertAttendance: requestData => dispatch(insertAttendance(requestData)),
  deleteAttendance: requestData => dispatch(deleteAttendance(requestData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendanceManagerContent);
