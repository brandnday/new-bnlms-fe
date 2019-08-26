import produce from "immer";

import { createSelector } from "reselect";
import * as AdminManagerActionTypes from "./AdminManagerActionTypes";

const initialState = {
  adminList: [],
  currentPage: 1,
  totalData: 0,
  churchList: [],
  churchMapList: []
};

function AdminManagerReducer(state = initialState, action) {
  const { type, payload } = action;
  return produce(state, draftState => {
    switch (type) {
      case AdminManagerActionTypes.ADMIN_LIST_UPDATE:
        draftState.adminList = payload.rows;
        draftState.totalData = payload.totalData;
        break;
      case AdminManagerActionTypes.CHURCH_ALL_LIST_UPDATE:
        draftState.churchList = payload;
        break;
      case AdminManagerActionTypes.CHURCH_MAPPING_LIST_UPDATE:
        console.log("test")
        draftState.churchMapList = payload;
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
export const selectChurchList = state => state.AdminManagerReducer.churchList;
export const selectChurchMapList = state =>
  state.AdminManagerReducer.churchMapList;
export const selectMapChurchList = state =>
  state.AdminManagerReducer.churchList;
export const selectCurrentPage = state => state.AdminManagerReducer.currentPage;
export const selectTotalData = state => state.AdminManagerReducer.totalData;

export const mapChurchListToSelectOptions = createSelector(
  selectChurchList,
  churchList =>
    churchList.map(church => ({
      text: church.churchname,
      id: church.id
    }))
);
export default AdminManagerReducer;
