import { connect } from "react-redux";

import AdminModal from "./AdminModal.js";

import { insertAdmin,updateAdmin } from "../../actions-redux/AdminManager/AdminManagerActionCreator";
import { selectAdminList } from "../../actions-redux/AdminManager/AdminManagerReducer";
const mapStateToProps = state => ({
  adminList: selectAdminList(state)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  insertAdmin: values => dispatch(insertAdmin({...values})),
  updateAdmin: values => dispatch(updateAdmin({...values}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminModal);
