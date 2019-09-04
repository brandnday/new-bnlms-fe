import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import LoginPageContent from '../../components/login/LoginPageContent';

export default class AdminManagerPage extends React.Component {
  render() {
    return (
        <LoginPageContent />
    );
  }
}
