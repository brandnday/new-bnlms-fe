import { connect } from 'react-redux';

import ChildrenManagerContent from './ChildrenManagerContent';

import {getChildrenList} from '../../../actions-redux/children-manager/ChildrenManagerActionCreator';

import {selectChildrenList }from '../../../actions-redux/children-manager/ChildrenManagerReducer'
const mapStateToProps = (state)=>({
childrenList:selectChildrenList(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getChildrenList:()=>dispatch(getChildrenList('')),
    
});

export default connect(
  mapStateToProps,
    mapDispatchToProps
)(ChildrenManagerContent);
