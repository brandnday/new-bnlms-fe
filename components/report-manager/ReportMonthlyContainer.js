import { connect } from "react-redux";

import ReportMonthly from "./ReportMonthly";

import { downloadMonthlyReport } from "../../actions-redux/report-manager/ReportManagerActionCreator";

const mapStateToProps = state => ({
  serviceList: "asdf"
});

const mapDispatchToProps = {
  downloadMonthlyReport
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportMonthly);
