import * as ChildrenManagerActionTypes from "./ChildrenManagerActionTypes";
import { callGet, callPost, dynamicData, callPostWithAuth } from "../common";
import {
  CHILDREN_LIST_GET
} from "../../constant/apiEndpoints";
import { selectCurrentPage } from "./ChildrenManagerReducer";
import { selectSelectedChurch } from "../account/AccountReducer";
export const getChildrenList = (nickname) => async (dispatch, getState) => {
  const res = await dispatch(callPostWithAuth(CHILDREN_LIST_GET, {
    nickname,
    pagination: { page: selectCurrentPage(getState()), size: 5 },
    registeredAt: selectSelectedChurch(getState()),
  }));
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
