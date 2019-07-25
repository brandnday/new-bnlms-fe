import React from 'react'

import "antd/dist/antd.css";
import DashboardWrapperPage from '../../components/shared/DashboardWrapperPage';
import AdminRoleMapping from '../../components/AdminRoleMapping/AdminRoleMappingContent'
export default class SiderDemo extends React.Component {
  render() {
    return (
      <DashboardWrapperPage title='Dashboard' subtitle=''>
        <AdminRoleMapping/>
      </DashboardWrapperPage>
    );
  }
}
