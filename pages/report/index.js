import React from "react";

import "antd/dist/antd.css";
import DashboardWrapperPage from "../../components/shared/DashboardWrapperPageContainer";
import { Provider } from "react-redux";

import TermManagerReducer from "../../actions-redux/term-manager/TermManagerReducer";
import ServiceManagerReducer from "../../actions-redux/service-manager/ServiceManagerReducer";
import { mixedStore } from "../../actions-redux/common";
import ReportManagerPageContent from "../../components/report-manager/ReportManagerPageContentContainer";

const store = mixedStore({ ServiceManagerReducer, TermManagerReducer });
export default class SiderDemo extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DashboardWrapperPage title="Dashboard" subtitle="" role={"ADMIN"}>
          <ReportManagerPageContent />
        </DashboardWrapperPage>
      </Provider>
    );
  }
}
