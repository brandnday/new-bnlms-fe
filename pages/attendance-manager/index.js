import React from "react";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import DashboardWrapperPage from "../../components/shared/DashboardWrapperPageContainer";
import ServiceManagerReducer from '../../actions-redux/service-manager/ServiceManagerReducer'
import AttendanceManagerReducer from '../../actions-redux/attendance-manager/AttendanceManagerReducer'
import TermManagerReducer from '../../actions-redux/term-manager/TermManagerReducer'
import AttendanceManager from "../../components/attendance-manager/AttendanceManagerContentContainer";
import {mixedStore} from '../../actions-redux/common'
const store = mixedStore({ServiceManagerReducer,TermManagerReducer,AttendanceManagerReducer})
class AttendanceManagerPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DashboardWrapperPage title="Dashboard" subtitle="" role={'OPERATOR'}>
          <AttendanceManager />
        </DashboardWrapperPage>
      </Provider>
    );
  }
}
export default AttendanceManagerPage;
