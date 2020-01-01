import * as ChildrenManagerActionTypes from "./ChildrenManagerActionTypes";
import sortBy from "lodash/sortBy";
import moment from 'moment'
import { callGet, callPost, dynamicData, callPostWithAuth } from "../common";
import {
  CHILDREN_LIST_GET,
  REPORT_MONTHLYPERCHILD_GET
} from "../../constant/apiEndpoints";
import { selectCurrentPage } from "./ChildrenManagerReducer";
import { selectSelectedChurch } from "../account/AccountReducer";
import { CHILDREN_LIST_SIZE } from "../../constant/listSize";
import { downloadCSV } from "../../tools/csvGenerator";

export const getChildrenList = nickname => async (dispatch, getState) => {
  const res = await dispatch(
    callPostWithAuth(CHILDREN_LIST_GET, {
      nickname,
      pagination: {
        page: selectCurrentPage(getState()),
        size: CHILDREN_LIST_SIZE
      },
      registeredAt: selectSelectedChurch(getState())
    })
  );
  dispatch({
    type: ChildrenManagerActionTypes.CHILDREN_LIST_UPDATE,
    payload: res
  });
};

export const insertChildren = req => async dispatch =>
  await dispatch(dynamicData("CHILDREN", "ADD", req));

export const updateChildren = req => async dispatch =>
  await dispatch(dynamicData("CHILDREN", "UPDATE", req));

export const deleteChildren = req => async dispatch =>
  await dispatch(dynamicData("CHILDREN", "DELETE", req));

export const updateCurrentPagination = page => ({
  type: ChildrenManagerActionTypes.CHILDREN_PAGINATION_UPDATE,
  payload: page
});

export const downloadChildrenAttendance = childrenId => async (
  dispatch,
  getState
) => {
  const res = await dispatch(
    callPostWithAuth(REPORT_MONTHLYPERCHILD_GET, {
      childrenId
    })
  );
  let csvData = [];
  csvData = res.rows.map((attendance, INDEX) => ({
    Name: attendance.name,
    Time: attendance.time,
    "Service Name": attendance.servicename,
    Date: moment(attendance.date).format("DD MMM YYYY"),
    AttendanceStatus: attendance.attendancestatus === "G" ? "Attend" : "Late"
  }));
  csvData = sortBy(csvData, "Date");
  console.log(csvData)
  downloadCSV({
    filename: `Attendance of ${csvData[0].Name}.csv`,
    data: csvData,
    columns: ["Name", "Time", "Date", "AttendanceStatus", "Service Name"]
  });
};
