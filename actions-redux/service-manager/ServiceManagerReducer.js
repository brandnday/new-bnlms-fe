import produce from "immer";

import * as ServiceManagerActionTypes from "./ServiceManagerActionTypes";

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
