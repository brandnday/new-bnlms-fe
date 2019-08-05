import produce from 'immer';

import * as AdminManagerActionTypes from './AdminManagerActionTypes';


const initialState = {
    adminList:[]
};

function AdminManagerReducer(state = initialState, action) {
  const { type, payload } = action;
  return produce(state, draftState => {
    switch (type) {
      case AdminManagerActionTypes.ADMIN_LIST_UPDATE:
        draftState.adminList = payload;
        break;
      default:
        return state;
    }
  });
}

export const selectAdminList = state => state.AdminManagerReducer.adminList;

export default AdminManagerReducer;
