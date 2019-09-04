import { connect } from 'react-redux';

import TermManagerPageContent from './TermManagerPageContent';

import {getTermList,insertTerm,deleteTerm,} from '../../actions-redux/term-manager/TermManagerActionCreator'

import {selectTermList} from '../../actions-redux/term-manager/TermManagerReducer'

const mapStateToProps = (state)=>({
  termList:selectTermList(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTermList:()=>dispatch(getTermList()),
});

export default connect(
  mapStateToProps,
    mapDispatchToProps
)(TermManagerPageContent);
