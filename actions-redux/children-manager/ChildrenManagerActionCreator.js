import * as ChildrenManagerActionTypes from "./ChildrenManagerActionTypes";
import { callGet, callPost, dynamicData } from "../common";
import {
  CHILDREN_LIST_GET
} from "../../constant/apiEndpoints";
import { selectCurrentPage } from "./ChildrenManagerReducer";
export const getChildrenList = (nickname) => async (dispatch, getState) => {
  const res = await callPost(CHILDREN_LIST_GET, {
    nickname,
    pagination: { page: selectCurrentPage(getState()), size: 5 }
  });
  dispatch({
    type: ChildrenManagerActionTypes.CHILDREN_LIST_UPDATE,
    payload: res
  });
};
export const insertChildren = req => async dispatch =>
  await dynamicData("CHILDREN", "ADD", req);
export const updateChildren = req => async dispatch =>
  await dynamicData("CHILDREN", "UPDATE", req);
export const deleteChildren = req => async dispatch =>
  await dynamicData("CHILDREN", "DELETE", req);
