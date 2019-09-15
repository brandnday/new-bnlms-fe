import axios from "axios";

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import AccountReducer from "./account/AccountReducer";
const baseUrl = "http://localhost:3001/";

import { dynamicDataEndpointResolver } from "../constant/apiEndpoints";
export const callGet = async (url, param = {}) => {
  return (await axios.get(`${baseUrl}${url}`, param)).data.response;
};

export const callPost = async (url, param = {}) => {
  return (await axios.post(`${baseUrl}${url}`, param)).data.response;
};

export const dynamicData = async (dataName, dataAction, requestData) => {
  const res = await callPost(
    dynamicDataEndpointResolver(dataName, dataAction),
    { requestData }
  );
  return res;
};

export const mixedStore = reducers =>
  createStore(
    combineReducers({ AccountReducer: AccountReducer, ...reducers }),
    composeWithDevTools(applyMiddleware(thunk))
  );
