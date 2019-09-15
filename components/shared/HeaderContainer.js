import { connect } from 'react-redux';

import Header from './Header';

import {mapAvailableChurchListToOptions,selectSelectedChurch,selectToken} from '../../actions-redux/account/AccountReducer'
import {getAvailableChurchList,updateToken,updateCurrentChurchId} from '../../actions-redux/account/AccountActionCreator'

const mapStateToProps = (state)=>({
  availableChurchList:mapAvailableChurchListToOptions(state),
  selectedChurchId:selectSelectedChurch(state),
  token:selectToken(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAvailableChurchList:()=>dispatch(getAvailableChurchList()),
  updateToken:(token)=>dispatch(updateToken(token)),
  updateCurrentChurchId:(churchId)=>dispatch(updateCurrentChurchId(churchId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
