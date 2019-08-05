import { connect } from 'react-redux';

import AdminManagerPageContent from './AdminManagerPageContent';

import {getAdminList} from '../../actions-redux/AdminManager/AdminManagerActionCreator'

import {selectAdminList} from '../../actions-redux/AdminManager/AdminManagerReducers'

const mapStateToProps = (state)=>({
adminList : selectAdminList(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAdminList:()=>dispatch(getAdminList())
});

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(AdminManagerPageContent);
