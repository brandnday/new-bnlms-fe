import * as ServiceManagerActionTypes from "./ServiceManagerActionTypes";
import { callGet, callPost, dynamicData } from "../common";
import {
  SERVICE_LIST_GET
} from "../../constant/apiEndpoints";
export const getServiceList = () => async (dispatch, getState) => {
  const churchid=0;
  const res = await callPost(SERVICE_LIST_GET, {
    requestData:{churchid},
  });
  dispatch({
    type: ServiceManagerActionTypes.SERVICE_LIST_UPDATE,
    payload: res
  });
};
export const insertService = req => async dispatch =>
  await dynamicData("TERM", "ADD", req);
export const updateService = req => async dispatch =>
  await dynamicData("TERM", "UPDATE", req);
export const deleteService = req => async dispatch =>
  await dynamicData("TERM", "DELETE", req);
