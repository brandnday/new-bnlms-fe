import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import "antd/dist/antd.css";
import DashboardWrapperPage from "../../components/shared/DashboardWrapperPageContainer";
import AttendanceManager from "../../components/AttendanceManager/AttendanceManagerContent";
import AccountReducer from '../../actions-redux/account/AccountReducer'
import {mixedStore} from '../../actions-redux/common'
const store = mixedStore({})
class AttendanceManagerPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DashboardWrapperPage title="Dashboard" subtitle="" role={'ADMIN'}>
          <AttendanceManager />
        </DashboardWrapperPage>
      </Provider>
    );
  }
}
export default AttendanceManagerPage;
