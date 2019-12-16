import * as ServiceManagerActionTypes from "./ServiceManagerActionTypes";
import { callGet, callPost, dynamicData, callPostWithAuth } from "../common";
import {
  SERVICE_LIST_GET
} from "../../constant/apiEndpoints";
import { selectSelectedChurch } from "../account/AccountReducer";
export const getServiceList = () => async (dispatch, getState) => {
  const churchid=selectSelectedChurch(getState());
  const res = await dispatch(callPostWithAuth(SERVICE_LIST_GET, {
    requestData:{churchid},
  }));
  dispatch({
    type: ServiceManagerActionTypes.SERVICE_LIST_UPDATE,
    payload: res
  });
};
export const insertService = req => async dispatch =>
  await dispatch(dynamicData("SERVICE", "ADD", req));
export const updateService = req => async dispatch =>
  await dispatch(dynamicData("SERVICE", "UPDATE", req));
export const deleteService = req => async dispatch =>
  await dispatch(dynamicData("SERVICE", "DELETE", req));
