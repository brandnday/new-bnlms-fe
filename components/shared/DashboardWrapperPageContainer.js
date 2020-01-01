import { connect } from 'react-redux';

import DashboardWrapperPage from './DashboardWrapperPage';

import {mapAvailableChurchListToOptions,selectSelectedChurch,selectToken, selectRole} from '../../actions-redux/account/AccountReducer'
import {checkAuthorize,updateToken,updateCurrentChurchId} from '../../actions-redux/account/AccountActionCreator'

const mapStateToProps = (state)=>({
  availableChurchList:mapAvailableChurchListToOptions(state),
  selectedChurchId:selectSelectedChurch(state),
  token:selectToken(state),
  role:selectRole(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  checkAuthorize:(token)=>dispatch(checkAuthorize(token,ownProps.role)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardWrapperPage);
