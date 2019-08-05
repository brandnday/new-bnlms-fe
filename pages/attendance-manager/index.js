import React from 'react'

import "antd/dist/antd.css";
import DashboardWrapperPage from '../../components/shared/DashboardWrapperPage';
import AttendanceManager from '../../components/AttendanceManager/AttendanceManagerContent';

export default class SiderDemo extends React.Component {
  render() {
    return (
      <DashboardWrapperPage title='Dashboard' subtitle=''>
      <AttendanceManager/>
      </DashboardWrapperPage>
    );
  }
}
