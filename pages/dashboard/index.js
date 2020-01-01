import React from "react";
import { Provider } from "react-redux";

import "antd/dist/antd.css";
import DashboardWrapperPage from "../../components/shared/DashboardWrapperPageContainer";
import DashboardPageContent from "../../components/dashboard/DashboardContainer.js";
import NotificationManagerReducer from "../../actions-redux/notification-manager/NotificationManagerReducer";

import { mixedStore } from "../../actions-redux/common";

const store = mixedStore({ NotificationManagerReducer });
export default class SiderDemo extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DashboardWrapperPage title="Dashboard" subtitle="" role={"OPERATOR"}>
          <DashboardPageContent />
        </DashboardWrapperPage>
      </Provider>
    );
  }
}
