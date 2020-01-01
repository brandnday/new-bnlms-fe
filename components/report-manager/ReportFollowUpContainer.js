import { connect } from "react-redux";

import ReportFollowUp from "./ReportFollowUp";

import { downloadFollowUpReport } from "../../actions-redux/report-manager/ReportManagerActionCreator";

const mapStateToProps = state => ({
  serviceList: "asdf"
});

const mapDispatchToProps = {
  downloadFollowUpReport
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportFollowUp);
