import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import DashboardWrapperPage from '../../components/shared/DashboardWrapperPageContainer';
import NotificationManagerReducer from '../../actions-redux/notification-manager/NotificationManagerReducer'
import NotificationManagerPageContent from '../../components/notification-manager/NotificationManagerPageContentContainer.js'
import { composeWithDevTools } from 'redux-devtools-extension';
import {mixedStore} from '../../actions-redux/common'

const store = mixedStore({NotificationManagerReducer})
export default class NotificationManagerPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <DashboardWrapperPage title='Dashboard' subtitle=''  role={'ADMIN'}>
        <NotificationManagerPageContent />
      </DashboardWrapperPage>
      </Provider>
    );
  }
}
