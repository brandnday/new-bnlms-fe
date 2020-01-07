import { connect } from "react-redux";

import ChildrenManagerContent from "./ChildrenManagerContent";

import {
  getChildrenList,
  updateCurrentPagination,
  downloadChildrenAttendance,
  deleteChildren,
} from "../../../actions-redux/children-manager/ChildrenManagerActionCreator";

import {
  selectChildrenList,
  selectCurrentPage,
  selectTotalData
} from "../../../actions-redux/children-manager/ChildrenManagerReducer";
const mapStateToProps = state => ({
  childrenList: selectChildrenList(state),
  currentPage: selectCurrentPage(state),
  totalData: selectTotalData(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getChildrenList: () => dispatch(getChildrenList("")),
  updateCurrentPagination: page => dispatch(updateCurrentPagination(page)),
  downloadChildrenAttendance: childId => dispatch(downloadChildrenAttendance(childId)),
  deleteChildren: childId => dispatch(deleteChildren(childId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildrenManagerContent);
