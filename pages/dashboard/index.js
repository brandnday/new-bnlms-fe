import React from 'react'
import { Provider } from 'react-redux'

import "antd/dist/antd.css";
import DashboardWrapperPage from '../../components/shared/DashboardWrapperPageContainer';
import {mixedStore} from '../../actions-redux/common'

const store = mixedStore({})
export default class SiderDemo extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <DashboardWrapperPage title='Dashboard' subtitle='' role ={'ADMIN'}>
        test
         <div>
          asdfasdf
        </div>
      </DashboardWrapperPage>
      </Provider>
    );
  }
}
