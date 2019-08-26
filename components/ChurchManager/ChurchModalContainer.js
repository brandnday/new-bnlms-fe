import { connect } from "react-redux";

import ChurchModal from "./ChurchModal.js";

import { insertChurch,updateChurch } from "../../actions-redux/ChurchManager/ChurchManagerActionCreator";
import { selectChurchList } from "../../actions-redux/ChurchManager/ChurchManagerReducer";
const mapStateToProps = state => ({
  churchList: selectChurchList(state)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  insertChurch: values => dispatch(insertChurch({...values})),
  updateChurch: values => dispatch(updateChurch({...values}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChurchModal);
