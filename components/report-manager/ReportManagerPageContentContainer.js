import { connect } from "react-redux";

import ReportManagerPageContent from "./ReportManagerPageContent";


const mapStateToProps = state => ({
  serviceList: 'asdf'
});


export default connect(
  mapStateToProps,
  null
)(ReportManagerPageContent);
