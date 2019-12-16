import * as AttendanceManagerActionTypes from "./AttendanceManagerActionTypes";
import { callPost, dynamicData, callPostWithAuth } from "../common";
import { ATTENDANCE_CHILDREN_LIST_GET,ATTENDED_CHILDREN_LIST_GET } from "../../constant/apiEndpoints";
export const getAttendanceChildrenList = requestData => async dispatch => {
  const ENDPOINT = requestData.attendanceType==='NOT_ATTEND'?ATTENDANCE_CHILDREN_LIST_GET:ATTENDED_CHILDREN_LIST_GET;
  const res = await dispatch(callPostWithAuth(ENDPOINT, requestData));
  dispatch({
    type: AttendanceManagerActionTypes.ATTENDANCE_CHILDREN_LIST_UPDATE,
    payload: res
  });
};

export const updateCurrentPagination = page => ({
  type: AttendanceManagerActionTypes.ATTENDANCE_PAGINATION_UPDATE,
  payload: page
});
export const insertAttendance = req => async dispatch =>
  await dispatch(dynamicData("ATTENDANCE", "ADD", req));
export const deleteAttendance = req => async dispatch =>
  await dispatch(dynamicData("ATTENDANCE", "DELETE", req));
