import * as NotificationManagerActionTypes from "./NotificationManagerActionTypes";
import { callGet, callPost, dynamicData, callPostWithAuth } from "../common";
import { NOTIFICATION_LIST_GET, DASHBOARDNOTIFICATION_LIST_GET } from "../../constant/apiEndpoints";
import { selectSelectedChurch } from "../account/AccountReducer";

export const getNotificationList = () => async (dispatch, getState) => {
  const res = await dispatch(
    callPostWithAuth(NOTIFICATION_LIST_GET, {
      requestData: {}
    })
  );
  dispatch({
    type: NotificationManagerActionTypes.NOTIFICATION_LIST_UPDATE,
    payload: res
  });
};

export const getDashboardNotificationList = () => async (
  dispatch,
  getState
) => {
  const churchId = selectSelectedChurch(getState());
  const res = await dispatch(
    callPostWithAuth(DASHBOARDNOTIFICATION_LIST_GET, {
      requestData: { churchId }
    })
  );
  dispatch({
    type: NotificationManagerActionTypes.NOTIFICATION_LIST_UPDATE,
    payload: res
  });
};

export const insertNotification = req => async dispatch =>
  await dispatch(dynamicData("NOTIFICATION", "ADD", req));

export const updateNotification = req => async dispatch =>
  await dispatch(dynamicData("NOTIFICATION", "UPDATE", req));

export const deleteNotification = req => async dispatch =>
  await dispatch(dynamicData("NOTIFICATION", "DELETE", req));
