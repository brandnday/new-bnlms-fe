import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import DashboardWrapperPage from '../../components/shared/DashboardWrapperPageContainer';
import AdminManagerReducer from '../../actions-redux/AdminManager/AdminManagerReducer'
import AdminManagerPageContent from '../../components/admin-manager/AdminManagerPageContentContainer'
import { composeWithDevTools } from 'redux-devtools-extension';
import {mixedStore} from '../../actions-redux/common'

const store = mixedStore({AdminManagerReducer})
export default class AdminManagerPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <DashboardWrapperPage title='Dashboard' subtitle=''  role={'SADMIN'}>
        <AdminManagerPageContent />
      </DashboardWrapperPage>
      </Provider>
    );
  }
}
