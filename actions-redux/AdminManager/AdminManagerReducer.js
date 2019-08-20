import produce from "immer";

import * as AdminManagerActionTypes from "./AdminManagerActionTypes";

const initialState = {
  adminList: [],
  currentPage: 1,
  totalData:0,
};

function AdminManagerReducer(state = initialState, action) {
  const { type, payload } = action;
  return produce(state, draftState => {
    switch (type) {
      case AdminManagerActionTypes.ADMIN_LIST_UPDATE:
        draftState.adminList = payload.rows;
        draftState.totalData = payload.totalData;
        break;
      case AdminManagerActionTypes.ADMIN_PAGINATION_UPDATE:
        draftState.currentPage = payload;
        break;
      default:
        return state;
    }
  });
}

export const selectAdminList = state => state.AdminManagerReducer.adminList;
export const selectCurrentPage = state => state.AdminManagerReducer.currentPage;
export const selectTotalData = state => state.AdminManagerReducer.totalData;

export default AdminManagerReducer;
