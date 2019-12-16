import * as TermManagerActionTypes from "./TermManagerActionTypes";
import { callGet, callPost, dynamicData, callPostWithAuth } from "../common";
import {
  TERM_LIST_GET
} from "../../constant/apiEndpoints";
import { selectSelectedChurch } from "../account/AccountReducer";
export const getTermList = () => async (dispatch, getState) => {
  const churchid=selectSelectedChurch(getState());
  const res = await dispatch(callPostWithAuth(TERM_LIST_GET, {
    requestData:{churchid},
  }));
  dispatch({
    type: TermManagerActionTypes.TERM_LIST_UPDATE,
    payload: res
  });
};
export const insertTerm = req => async dispatch =>
  await dispatch(dynamicData("TERM", "ADD", req));
export const updateTerm = req => async dispatch =>
  await dispatch(dynamicData("TERM", "UPDATE", req));
export const deleteTerm = req => async dispatch =>
  await dispatch(dynamicData("TERM", "DELETE", req));
