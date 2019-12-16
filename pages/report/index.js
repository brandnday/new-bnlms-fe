import React from "react";

import "antd/dist/antd.css";
import DashboardWrapperPage from "../../components/shared/DashboardWrapperPageContainer";
import { Provider } from "react-redux";

import { mixedStore } from "../../actions-redux/common";
import ReportManagerPageContent from "../../components/report-manager/ReportManagerPageContentContainer";

const store = mixedStore({});
export default class SiderDemo extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DashboardWrapperPage title="Dashboard" subtitle="" role={"ADMIN"}>
          <ReportManagerPageContent/>
        </DashboardWrapperPage>
      </Provider>
    );
  }
}
