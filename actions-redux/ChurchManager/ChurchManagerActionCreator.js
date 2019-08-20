import * as ChurchManagerActionTypes from "./ChurchManagerActionTypes";
import { callGet, callPost, dynamicData } from "../common";
import {
  CHURCH_LIST_GET,
} from "../../constant/apiEndpoints";
import { selectCurrentPage } from "./ChurchManagerReducer";
export const getChurchList     = (churchname) => async (dispatch, getState) => {
  const res = await callPost(CHURCH_LIST_GET, {
    churchname,
    pagination: { page: selectCurrentPage(getState()),size:2 }
  });
  dispatch({
    type: ChurchManagerActionTypes.CHURCH_LIST_UPDATE,
    payload: res
  });
};

export const updateCurrentPagination = page => ({
  type: ChurchManagerActionTypes.CHURCH_PAGINATION_UPDATE,
  payload: page
});
export const insertChurch= req => async dispatch =>
  await dynamicData("CHURCH", "ADD", req);
export const updateChurch= req => async dispatch =>
  await dynamicData("CHURCH", "UPDATE", req);
export const deleteChurch= req => async dispatch =>
  await dynamicData("CHURCH", "DELETE", req);
