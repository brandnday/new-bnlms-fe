import { connect } from "react-redux";

import MapChurchModal from "./MapChurchModal.js";

import { insertAdmin,updateAdmin ,insertAdminMapChurch,getAllChurchAdminMapping,deleteAdminMapChurch} from "../../actions-redux/AdminManager/AdminManagerActionCreator";
import { selectAdminList, mapChurchListToSelectOptions, selectChurchMapList} from "../../actions-redux/AdminManager/AdminManagerReducer";
const mapStateToProps = state => ({
  adminList: selectAdminList(state),
  churchList: mapChurchListToSelectOptions(state),
  mapChurchList :selectChurchMapList(state),
});
const mapDispatchToProps = (dispatch) => ({
  insertAdminMapChurch:(userid,churchid,role)=>dispatch(insertAdminMapChurch({userid,churchid,role})),
  deleteAdminMapChurch:(mapId)=>dispatch(deleteAdminMapChurch({mapId})),
  getAllChurchAdminMapping:(userid)=>dispatch(getAllChurchAdminMapping(userid)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapChurchModal);
