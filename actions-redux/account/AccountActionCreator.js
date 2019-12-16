import * as AccountActionTypes from "./AccountActionTypes";
import { callGet, callPost, dynamicData, callPostWithAuth } from "../common";
import {
  GET_AVAILABLE_CHURCH_ENDPOINT,AUTHORIZE_ENDPOINT
} from "../../constant/apiEndpoints";
import { selectToken, selectSelectedChurch } from "./AccountReducer";
export const getAvailableChurchList = (nickname) => async (dispatch, getState) => {
  const res = await  dispatch(callPostWithAuth(GET_AVAILABLE_CHURCH_ENDPOINT, {
    token:selectToken(getState()),
  }));
  res.length>0 && dispatch(updateCurrentChurchId(res[0].id))
  dispatch({
    type: AccountActionTypes.AVAILABLE_CHURCH_UPDATE,
    payload: res
  });
};

export const checkAuthorize =  (token,role) =>async (dispatch,getState)=>{
  const res = await dispatch(callPostWithAuth(AUTHORIZE_ENDPOINT, {
    role
  }));
  return res;
};

export const updateToken  = token => ({
  type: AccountActionTypes.CURRENT_TOKEN_UPDATE,
  payload: token
});

export const updateCurrentChurchId  = churchId => ({
  type: AccountActionTypes.CHURCH_SELECTED_UPDATE,
  payload: churchId
});