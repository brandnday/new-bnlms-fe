import { connect } from "react-redux";

import ReportPoint from "./ReportPoint";

import { downloadPointReportPerTerm } from "../../actions-redux/report-manager/ReportManagerActionCreator";

import { getTermList } from "../../actions-redux/term-manager/TermManagerActionCreator";
import { mapTermListToOptions } from "../../actions-redux/term-manager/TermManagerReducer";
const mapStateToProps = state => ({
  termList: mapTermListToOptions(state)
});

const mapDispatchToProps = {
  downloadPointReportPerTerm,
  getTermList
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportPoint);
