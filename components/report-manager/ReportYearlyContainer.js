import { connect } from "react-redux";

import ReportYearly from "./ReportYearly";

import { downloadYearlyReport } from "../../actions-redux/report-manager/ReportManagerActionCreator";

const mapStateToProps = state => ({
  serviceList: "asdf"
});

const mapDispatchToProps = {
  downloadYearlyReport
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportYearly);
