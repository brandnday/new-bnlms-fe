import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import "antd/dist/antd.css";
import DashboardWrapperPage from '../../components/shared/DashboardWrapperPageContainer';
import ChildrenManager from '../../components/children-manager/ChildrenManagerContent/ChildrenManagerContentContainer';
import ChildrenManagerReducer from '../../actions-redux/children-manager/ChildrenManagerReducer'
import {mixedStore} from '../../actions-redux/common'

const store = mixedStore({ChildrenManagerReducer})
export default class SiderDemo extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <DashboardWrapperPage title='Dashboard' subtitle=''  role={'ADMIN'}>
          <ChildrenManager/>
      </DashboardWrapperPage>
      </Provider>
    );
  }
}
