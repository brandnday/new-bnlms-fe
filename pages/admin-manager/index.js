import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import DashboardWrapperPage from '../../components/shared/DashboardWrapperPage';
import AdminManagerReducer from '../../actions-redux/AdminManager/AdminManagerReducers'
import AdminManagerPageContent from '../../components/admin-manager/AdminManagerPageContentContainer.js'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({AdminManagerReducer: AdminManagerReducer}),
  composeWithDevTools(applyMiddleware(thunk)))
export default class AdminManagerPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <DashboardWrapperPage title='Dashboard' subtitle=''>
        <AdminManagerPageContent />
      </DashboardWrapperPage>
      </Provider>
    );
  }
}
