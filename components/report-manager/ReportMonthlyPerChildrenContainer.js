import { connect } from "react-redux";

import ReportBirthday from "./ReportBirthday";

import { downloadBIrthdayReport } from "../../actions-redux/report-manager/ReportManagerActionCreator";

const mapStateToProps = state => ({
  serviceList: "asdf"
});

const mapDispatchToProps = {
  downloadBIrthdayReport
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportBirthday);
