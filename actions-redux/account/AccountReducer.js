import produce from "immer";

import * as AccountActionTypes from "./AccountActionTypes";
import { createSelector } from "reselect";

const initialState = {
  churchId: -1,
  token: "",
  availableChurchList: []
};

function AccountReducer(state = initialState, action) {
  const { type, payload } = action;
  return produce(state, draftState => {
    switch (type) {
      case AccountActionTypes.CURRENT_TOKEN_UPDATE:
        draftState.token = payload;
        break;
      case AccountActionTypes.CHURCH_SELECTED_UPDATE:
        draftState.churchId = payload;
        break;
      case AccountActionTypes.AVAILABLE_CHURCH_UPDATE:
        draftState.availableChurchList = payload;
        break;
      default:
        return state;
    }
  });
}

export const selectSelectedChurch = state => state.AccountReducer.churchId;
export const selectToken = state => state.AccountReducer.token;
export const selectAvailableChurchList = state =>
  state.AccountReducer.availableChurchList;

  export const mapAvailableChurchListToOptions = createSelector(
    selectAvailableChurchList,
    churchList =>
      churchList.map(church => ({
        text: church.churchname,
        id: church.id
      }))
  );

export default AccountReducer;
