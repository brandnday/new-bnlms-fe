import produce from "immer";

import * as TermManagerActionTypes from "./TermManagerActionTypes";
import { createSelector } from "reselect";

const initialState = {
  termList: [],
};

function TermManagerReducer(state = initialState, action) {
  const { type, payload } = action;
  return produce(state, draftState => {
    switch (type) {
      case TermManagerActionTypes.TERM_LIST_UPDATE:
        draftState.termList = payload.rows;
        break;
      default:
        return state;
    }
  });
}

export const selectTermList = state => state.TermManagerReducer.termList;
export default TermManagerReducer;

export const mapTermListToOptions = createSelector(
  selectTermList,
  termList =>
    termList.map(term => ({
      text: term.termname,
      id: term.id
    }))
);

