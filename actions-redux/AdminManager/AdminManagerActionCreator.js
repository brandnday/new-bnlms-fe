import * as AdminManagerActionTypes from "./AdminManagerActionTypes";
import { dynamicData, callPostWithAuth } from "../common";
import {
  ADMIN_LIST_GET,
  CHURCH_ALL_LIST_GET,
  CHURCH_MAP_ADMIN_LIST_GET
} from "../../constant/apiEndpoints";
import { selectCurrentPage } from "./AdminManagerReducer";
import { ADMIN_LIST_SIZE } from "../../constant/listSize";
export const getAdminList = (username, role) => async (dispatch, getState) => {
  const res = await dispatch(
    callPostWithAuth(ADMIN_LIST_GET, {
      username,
      role,
      pagination: { page: selectCurrentPage(getState()), size: ADMIN_LIST_SIZE }
    })
  );
  dispatch({
    type: AdminManagerActionTypes.ADMIN_LIST_UPDATE,
    payload: res
  });
};
export const getAllChurch = () => async dispatch => {
  const res = await dispatch(callPostWithAuth(CHURCH_ALL_LIST_GET));
  dispatch({
    type: AdminManagerActionTypes.CHURCH_ALL_LIST_UPDATE,
    payload: res
  });
};
export const getAllChurchAdminMapping = userid => async dispatch => {
  const res = await dispatch(
    callPostWithAuth(CHURCH_MAP_ADMIN_LIST_GET, { userid })
  );
  dispatch({
    type: AdminManagerActionTypes.CHURCH_MAPPING_LIST_UPDATE,
    payload: res
  });
};

export const updateCurrentPagination = page => ({
  type: AdminManagerActionTypes.ADMIN_PAGINATION_UPDATE,
  payload: page
});

export const insertAdminMapChurch = req => async dispatch =>
  await dispatch(dynamicData("ADMINMAPCHURCH", "ADD", req));
export const deleteAdminMapChurch = req => async dispatch =>
  await dispatch(dynamicData("ADMINMAPCHURCH", "DELETE", req));

export const insertAdmin = req => async dispatch =>
  await dispatch(dynamicData("ADMIN", "ADD", req));
export const updateAdmin = req => async dispatch =>
  await dispatch(dynamicData("ADMIN", "UPDATE", req));
export const deleteAdmin = req => async dispatch =>
  await dispatch(dynamicData("ADMIN", "DELETE", req));
