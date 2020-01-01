import produce from "immer";

import * as ChildrenManagerActionTypes from "./ChildrenManagerActionTypes";

const initialState = {
  childrenList: [],
  currentPage: 1,
  totalData: 0,
  churchList: [],
  churchMapList: []
};

function ChildrenManagerReducer(state = initialState, action) {
  const { type, payload } = action;
  return produce(state, draftState => {
    switch (type) {
      case ChildrenManagerActionTypes.CHILDREN_LIST_UPDATE:
        draftState.childrenList = payload.rows;
        draftState.totalData = payload.totalData;
        break;
      case ChildrenManagerActionTypes.CHILDREN_PAGINATION_UPDATE:
        draftState.currentPage = payload;
        break;
      default:
        return state;
    }
  });
}

export const selectChildrenList = state =>
  state.ChildrenManagerReducer.childrenList;

export const selectCurrentPage = state =>
  state.ChildrenManagerReducer.currentPage;
export const selectTotalData = state => state.ChildrenManagerReducer.totalData;

export default ChildrenManagerReducer;
