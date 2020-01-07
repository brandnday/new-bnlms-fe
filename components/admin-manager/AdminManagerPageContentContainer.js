import { connect } from 'react-redux';

import AdminManagerPageContent from './AdminManagerPageContent';

import {getAdminList,getAllChurch,insertAdmin,deleteAdmin,updateCurrentPagination} from '../../actions-redux/AdminManager/AdminManagerActionCreator'

import {selectAdminList, selectCurrentPage,selectTotalData} from '../../actions-redux/AdminManager/AdminManagerReducer'

const mapStateToProps = (state)=>({
adminList : selectAdminList(state),
currentPage:selectCurrentPage(state),
totalData:selectTotalData(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAdminList:(username,role)=>dispatch(getAdminList(username,role)),
    getAllChurch:()=>dispatch(getAllChurch()),
    insertAdmin:(username,password,email,phone,role)=>dispatch(insertAdmin({username,password,email,phone,role})),
    deleteAdmin:(editingId)=>dispatch(deleteAdmin(editingId)),
    updateCurrentPagination:(page)=>dispatch(updateCurrentPagination(page))
});

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(AdminManagerPageContent);
