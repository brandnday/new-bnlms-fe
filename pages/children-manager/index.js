import React from 'react'

import "antd/dist/antd.css";
import DashboardWrapperPage from '../../components/shared/DashboardWrapperPage';
import ChildrenManager from '../../components/ChildrenManager/ChildrenManagerContent';

export default class SiderDemo extends React.Component {
  render() {
    return (
      <DashboardWrapperPage title='Dashboard' subtitle=''>
          <ChildrenManager/>
      </DashboardWrapperPage>
    );
  }
}
