import axios from "axios";

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import AccountReducer, { selectToken } from "./account/AccountReducer";
//const baseUrl = "http://localhost:3001/";
const baseUrl = "http://cc1d.gbi1d.org:3001/";

import { dynamicDataEndpointResolver } from "../constant/apiEndpoints";
export const callGet = async (url, param = {}) => {
  return (await axios.get(`${baseUrl}${url}`, param)).data.response;
};

export const callPost = async (url, param = {}) => {
  return (await axios.post(`${baseUrl}${url}`, param)).data.response;
};

export const callPostWithAuth = (url, param = {}) => async (dispatch,getState)=>{
  const headers = {
    authoken : selectToken(getState())
  }
  return (await axios.post(`${baseUrl}${url}`, param,{headers})).data.response;
};

export const dynamicData = (dataName, dataAction, requestData) => async (dispatch) =>{
  const res = await dispatch(callPostWithAuth(
    dynamicDataEndpointResolver(dataName, dataAction),
    { requestData }
  ));
  return res;
};

export const mixedStore = reducers =>
  createStore(
    combineReducers({ AccountReducer: AccountReducer, ...reducers }),
    composeWithDevTools(applyMiddleware(thunk))
  );
