import produce from "immer";

import * as AttendanceManagerActionTypes from "./AttendanceManagerActionTypes";

const initialState = {
  attendanceChildrenList: [],
  currentPage: 1,
  totalData: 0
};

function AttendanceManagerReducer(state = initialState, action) {
  const { type, payload } = action;
  return produce(state, draftState => {
    switch (type) {
      case AttendanceManagerActionTypes.ATTENDANCE_CHILDREN_LIST_UPDATE:
        draftState.attendanceChildrenList = payload.rows;
        draftState.totalData = payload.totalData;
        break;

      case AttendanceManagerActionTypes.ATTENDANCE_PAGINATION_UPDATE:
        draftState.currentPage = payload;
        break;
      default:
        return state;
    }
  });
}

export const selectAttendanceChildrenList = state =>
  state.AttendanceManagerReducer.attendanceChildrenList;
export const selectCurrentPage = state =>
  state.AttendanceManagerReducer.currentPage;
export const selectTotalData = state =>
  state.AttendanceManagerReducer.totalData;

export default AttendanceManagerReducer;
