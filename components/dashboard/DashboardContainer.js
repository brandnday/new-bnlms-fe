import { connect } from "react-redux";

import AttendanceManagerContent from "./Dashboard";

import { getDashboardNotificationList } from "../../actions-redux/notification-manager/NotificationManagerActionCreator";
import { selectNotificationList } from "../../actions-redux/notification-manager/NotificationManagerReducer";

const mapStateToProps = state => ({
  // serviceList: mapServiceListToOptions(state),
  // churchId: selectSelectedChurch(state),
  // termList: mapTermListToOptions(state),
  // attendanceChildrenList: selectAttendanceChildrenList(state),
  // totalData: selectTotalData(state)
  notificationList: selectNotificationList(state)
});

const mapDispatchToProps = {
  // getTermList: () => dispatch(getTermList()),
  // getServiceList: () => dispatch(getServiceList()),
  // getAttendanceChildrenId: attendanceId =>
  //   dispatch(getAttendanceChildrenId(attendanceId)),
  // updateCurrentPagination: page => dispatch(updateCurrentPagination(page)),
  // getAttendanceChildrenList: requestData =>
  //   dispatch(getAttendanceChildrenList(requestData)),
  // insertAttendance: requestData => dispatch(insertAttendance(requestData)),
  // deleteAttendance: requestData => dispatch(deleteAttendance(requestData))
  getDashboardNotificationList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendanceManagerContent);
