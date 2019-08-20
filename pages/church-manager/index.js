import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import DashboardWrapperPage from '../../components/shared/DashboardWrapperPage';
import ChurchManagerReducer from '../../actions-redux/ChurchManager/ChurchManagerReducer'
import ChurchManagerPageContent from '../../components/ChurchManager/ChurchManagerPageContentContainer.js'
import { composeWithDevTools } from 'redux-devtools-extension';
import ChurchManagerPageContentContainer from '../../components/ChurchManager/ChurchManagerPageContentContainer';

const store = createStore(
  combineReducers({ChurchManagerReducer: ChurchManagerReducer}),
  composeWithDevTools(applyMiddleware(thunk)))
export default class AdminManagerPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <DashboardWrapperPage title='Church Manager' subtitle=''>
        <ChurchManagerPageContent />
      </DashboardWrapperPage>
      </Provider>
    );
  }
}
