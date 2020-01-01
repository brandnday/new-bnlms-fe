import produce from "immer";

import * as NotificationManagerActionTypes from "./NotificationManagerActionTypes";
import { createSelector } from "reselect";

const initialState = {
  notificationList: [],
};

function NotificationManagerReducer(state = initialState, action) {
  const { type, payload } = action;
  return produce(state, draftState => {
    switch (type) {
      case NotificationManagerActionTypes.NOTIFICATION_LIST_UPDATE:
        draftState.notificationList = payload.rows;
        break;
      default:
        return state;
    }
  });
}

export const selectNotificationList = state => state.NotificationManagerReducer.notificationList;
export default NotificationManagerReducer;

