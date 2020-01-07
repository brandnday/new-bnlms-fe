import { connect } from "react-redux";

import ChurchManagerPageContent from "./ChurchManagerPageContent";

import { getChurchList, updateCurrentPagination, deleteChurch } from "../../actions-redux/ChurchManager/ChurchManagerActionCreator";
import { selectChurchList, selectCurrentPage, selectTotalData } from "../../actions-redux/ChurchManager/ChurchManagerReducer";

const mapStateToProps = state => ({
  churchList: selectChurchList(state),
  currentPage:selectCurrentPage(state),
  totalData:selectTotalData(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getChurchList: churchname => dispatch(getChurchList(churchname)),
  updateCurrentPagination:(page)=>dispatch(updateCurrentPagination(page)),
  deleteChurch:(editingId)=>dispatch(deleteChurch(editingId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChurchManagerPageContent);
