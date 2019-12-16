import { connect } from "react-redux";

import ReportAttendance from "./ReportAttendance";
import { downloadBIrthdayReport } from "../../actions-redux/report-manager/ReportManagerActionCreator";

const mapStateToProps = state => ({
  serviceList: "asdf"
});

const mapDispatchToProps = {
  downloadBIrthdayReport
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportAttendance);
