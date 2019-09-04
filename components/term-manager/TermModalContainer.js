import { connect } from "react-redux";

import TermModal from "./TermModal.js";

import { insertTerm,updateTerm } from "../../actions-redux/term-manager/TermManagerActionCreator";
import { selectTermList } from "../../actions-redux/term-manager/TermManagerReducer";
const mapStateToProps = state => ({
  termList: selectTermList(state)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  insertTerm: values => dispatch(insertTerm({...values})),
  updateTerm: values => dispatch(updateTerm({...values}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TermModal);
