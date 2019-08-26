import produce from "immer";

import * as ChurchManagerActionTypes from "./ChurchManagerActionTypes";

const initialState = {
  churchList: [],
  currentPage: 1,
  totalData:0,
};

function ChurchManagerReducer(state = initialState, action) {
  const { type, payload } = action;
  return produce(state, draftState => {
    switch (type) {
      case ChurchManagerActionTypes.CHURCH_LIST_UPDATE:
        draftState.churchList = payload.rows;
        draftState.totalData = payload.totalData;
        break;
      case ChurchManagerActionTypes.CHURCH_PAGINATION_UPDATE:
        draftState.currentPage = payload;
        break;
      default:
        return state;
    }
  });
}


export const selectChurchList = state => state.ChurchManagerReducer.churchList;
export const selectCurrentPage = state => state.ChurchManagerReducer.currentPage;
export const selectTotalData = state => state.ChurchManagerReducer.totalData;

export default ChurchManagerReducer;
