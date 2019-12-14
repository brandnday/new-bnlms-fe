import produce from "immer";

import * as ServiceManagerActionTypes from "./ServiceManagerActionTypes";
import { createSelector } from "reselect";

const initialState = {
  serviceList: [],
};

function ServiceManagerReducer(state = initialState, action) {
  const { type, payload } = action;
  return produce(state, draftState => {
    switch (type) {
      case ServiceManagerActionTypes.SERVICE_LIST_UPDATE:
        draftState.serviceList = payload.rows;
        break;
      default:
        return state;
    }
  });
}

export const selectServiceList = state => state.ServiceManagerReducer.serviceList;
export default ServiceManagerReducer;



export const mapServiceListToOptions = createSelector(
  selectServiceList,
  serviceList =>
    serviceList.map(service => ({
      text: service.servicename,
      id: service.id
    }))
);
