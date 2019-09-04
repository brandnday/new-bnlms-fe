import * as TermManagerActionTypes from "./TermManagerActionTypes";
import { callGet, callPost, dynamicData } from "../common";
import {
  TERM_LIST_GET
} from "../../constant/apiEndpoints";
export const getTermList = () => async (dispatch, getState) => {
  const churchid=0;
  const res = await callPost(TERM_LIST_GET, {
    requestData:{churchid},
  });
  dispatch({
    type: TermManagerActionTypes.TERM_LIST_UPDATE,
    payload: res
  });
};
export const insertTerm = req => async dispatch =>
  await dynamicData("TERM", "ADD", req);
export const updateTerm = req => async dispatch =>
  await dynamicData("TERM", "UPDATE", req);
export const deleteTerm = req => async dispatch =>
  await dynamicData("TERM", "DELETE", req);
