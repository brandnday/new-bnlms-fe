import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import DashboardWrapperPage from '../../components/shared/DashboardWrapperPageContainer';
import ChurchManagerReducer from '../../actions-redux/ChurchManager/ChurchManagerReducer'
import ChurchManagerPageContent from '../../components/ChurchManager/ChurchManagerPageContentContainer.js'
import { composeWithDevTools } from 'redux-devtools-extension';
import ChurchManagerPageContentContainer from '../../components/ChurchManager/ChurchManagerPageContentContainer';
import {mixedStore} from '../../actions-redux/common'

const store = mixedStore({ChurchManagerReducer})
export default class AdminManagerPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <DashboardWrapperPage title='Church Manager' subtitle=''  role={'ADMIN'}>
        <ChurchManagerPageContent />
      </DashboardWrapperPage>
      </Provider>
    );
  }
}
