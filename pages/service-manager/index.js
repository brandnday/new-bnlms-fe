import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import DashboardWrapperPage from '../../components/shared/DashboardWrapperPage';
import ServiceManagerReducer from '../../actions-redux/service-manager/ServiceManagerReducer'
import ServiceManagerPageContent from '../../components/service-manager/ServiceManagerPageContentContainer.js'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({ServiceManagerReducer: ServiceManagerReducer}),
  composeWithDevTools(applyMiddleware(thunk)))
export default class ServiceManagerPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <DashboardWrapperPage title='Dashboard' subtitle=''>
        <ServiceManagerPageContent />
      </DashboardWrapperPage>
      </Provider>
    );
  }
}
