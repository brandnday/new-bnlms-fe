import * as ChurchManagerActionTypes from "./ChurchManagerActionTypes";
import { callGet, callPost, dynamicData, callPostWithAuth } from "../common";
import { CHURCH_LIST_GET } from "../../constant/apiEndpoints";
import { selectCurrentPage } from "./ChurchManagerReducer";
import { CHURCH_LIST_SIZE } from "../../constant/listSize";
export const getChurchList = churchname => async (dispatch, getState) => {
  const res = await dispatch(
    callPostWithAuth(CHURCH_LIST_GET, {
      churchname,
      pagination: {
        page: selectCurrentPage(getState()),
        size: CHURCH_LIST_SIZE
      }
    })
  );
  dispatch({
    type: ChurchManagerActionTypes.CHURCH_LIST_UPDATE,
    payload: res
  });
};

export const updateCurrentPagination = page => ({
  type: ChurchManagerActionTypes.CHURCH_PAGINATION_UPDATE,
  payload: page
});
export const insertChurch = req => async dispatch =>
  await dispatch(dynamicData("CHURCH", "ADD", req));
export const updateChurch = req => async dispatch =>
  await dispatch(dynamicData("CHURCH", "UPDATE", req));
export const deleteChurch = req => async dispatch =>
  await dispatch(dynamicData("CHURCH", "DELETE", req));
