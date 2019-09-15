import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import AccountReducer from '../../actions-redux/account/AccountReducer'


export default class ProviderHelper extends React.Component {
  
  render() {
    const store= createStore(
      combineReducers({AccountReducer: AccountReducer, ...this.props.reducers}),
      composeWithDevTools(applyMiddleware(thunk)))
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>

    )}

}