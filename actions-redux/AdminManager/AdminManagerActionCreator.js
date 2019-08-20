import * as AdminManagerActionTypes from "./AdminManagerActionTypes";
import { callGet, callPost, dynamicData } from "../common";
import {
  ADMIN_LIST_GET,
} from "../../constant/apiEndpoints";
import { selectCurrentPage } from "./AdminManagerReducer";
export const getAdminList = (username, role) => async (dispatch, getState) => {
  const res = await callPost(ADMIN_LIST_GET, {
    username,
    role,
    pagination: { page: selectCurrentPage(getState()),size:2 }
  });
  dispatch({
    type: AdminManagerActionTypes.ADMIN_LIST_UPDATE,
    payload: res
  });
};

export const updateCurrentPagination = page => ({
  type: AdminManagerActionTypes.ADMIN_PAGINATION_UPDATE,
  payload: page
});

export const insertAdmin = req => async dispatch =>
  await dynamicData("ADMIN", "ADD", req);
export const updateAdmin = req => async dispatch =>
  await dynamicData("ADMIN", "UPDATE", req);
export const deleteAdmin = req => async dispatch =>
  await dynamicData("ADMIN", "DELETE", req);
