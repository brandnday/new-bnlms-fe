import { connect } from "react-redux";

import ReportPerService from "./ReportPerService";

import { downloadPerServiceReport } from "../../actions-redux/report-manager/ReportManagerActionCreator";

import { getServiceList } from "../../actions-redux/service-manager/ServiceManagerActionCreator";
import { mapServiceListToOptions } from "../../actions-redux/service-manager/ServiceManagerReducer";

const mapStateToProps = state => ({
  serviceList: mapServiceListToOptions(state)
});

const mapDispatchToProps = {
  downloadPerServiceReport,
  getServiceList
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportPerService);
