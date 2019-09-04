import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import DashboardWrapperPage from '../../components/shared/DashboardWrapperPage';
import TermManagerReducer from '../../actions-redux/term-manager/TermManagerReducer'
import TermManagerPageContent from '../../components/term-manager/TermManagerPageContentContainer.js'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({TermManagerReducer: TermManagerReducer}),
  composeWithDevTools(applyMiddleware(thunk)))
export default class TermManagerPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <DashboardWrapperPage title='Dashboard' subtitle=''>
        <TermManagerPageContent />
      </DashboardWrapperPage>
      </Provider>
    );
  }
}
