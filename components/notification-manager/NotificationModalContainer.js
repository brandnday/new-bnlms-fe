import { connect } from "react-redux";

import NotificationModal from "./NotificationModal.js";

import { insertNotification,updateNotification } from "../../actions-redux/notification-manager/NotificationManagerActionCreator";
import { selectNotificationList } from "../../actions-redux/notification-manager/NotificationManagerReducer";
import { selectSelectedChurch, mapAvailableChurchListToOptions } from "../../actions-redux/account/AccountReducer.js";
const mapStateToProps = state => ({
  notificationList: selectNotificationList(state),
  churchid:selectSelectedChurch(state),
  churchList: mapAvailableChurchListToOptions(state)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  insertNotification: values => dispatch(insertNotification({...values})),
  updateNotification: values => dispatch(updateNotification({...values}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationModal);
