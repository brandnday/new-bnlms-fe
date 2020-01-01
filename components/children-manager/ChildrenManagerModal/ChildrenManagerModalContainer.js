import { connect } from "react-redux";

import ChildrenManagerModal from "./ChildrenManagerModal";

import {
  insertChildren
} from "../../../actions-redux/children-manager/ChildrenManagerActionCreator";

import { selectChildrenList } from "../../../actions-redux/children-manager/ChildrenManagerReducer";
import { mapAvailableChurchListToOptions } from "../../../actions-redux/account/AccountReducer";
const mapStateToProps = state => ({
  childrenList: selectChildrenList(state),
  churchList: mapAvailableChurchListToOptions(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  insertChildren: values => dispatch(insertChildren({ ...values }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildrenManagerModal);
