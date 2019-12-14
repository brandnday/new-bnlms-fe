import * as AttendanceManagerActionTypes from "./AttendanceManagerActionTypes";
import { callPost, dynamicData } from "../common";
import { ATTENDANCE_CHILDREN_LIST_GET,ATTENDED_CHILDREN_LIST_GET } from "../../constant/apiEndpoints";
export const getAttendanceChildrenList = requestData => async dispatch => {
  const ENDPOINT = requestData.attendanceType==='NOT_ATTEND'?ATTENDANCE_CHILDREN_LIST_GET:ATTENDED_CHILDREN_LIST_GET;
  const res = await callPost(ENDPOINT, requestData);
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
  await dynamicData("ATTENDANCE", "ADD", req);
export const deleteAttendance = req => async dispatch =>
  await dynamicData("ATTENDANCE", "DELETE", req);
