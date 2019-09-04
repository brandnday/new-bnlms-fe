import { connect } from 'react-redux';

import ChildrenManagerModal from './ChildrenManagerModal';

import {insertChildren,updateChildren} from '../../../actions-redux/children-manager/ChildrenManagerActionCreator';

import {selectChildrenList }from '../../../actions-redux/children-manager/ChildrenManagerReducer'
const mapStateToProps = (state)=>({
childrenList:selectChildrenList(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  insertChildren:(values)=>dispatch(insertChildren({...values})),
    
});

export default connect(
  mapStateToProps,
    mapDispatchToProps
)(ChildrenManagerModal);
