import { connect } from 'react-redux';

import NotificationManagerPageContent from './NotificationManagerPageContent';

import {getNotificationList,insertNotification,deleteNotification,} from '../../actions-redux/notification-manager/NotificationManagerActionCreator'

import {selectNotificationList} from '../../actions-redux/notification-manager/NotificationManagerReducer'

const mapStateToProps = (state)=>({
  notificationList:selectNotificationList(state)
})

const mapDispatchToProps = 
{
  getNotificationList,
  deleteNotification
}
export default connect(
  mapStateToProps,
    mapDispatchToProps
)(NotificationManagerPageContent);
