export const dynamicDataEndpointResolver = (dataName, dataAction) => {
  return INSERT_UPDATE_DELETE[`${dataName}_DATA_${dataAction}`];
};
const INSERT_UPDATE_DELETE = {
  ADMIN_DATA_ADD: "v1/admins/adminAdd",
  ADMIN_DATA_UPDATE: "v1/admins/adminUpdate",
  ADMIN_DATA_DELETE: "v1/admins/adminDeactivate",

  ADMINMAPCHURCH_DATA_ADD: "v1/churches/adminAddMapping",
  ADMINMAPCHURCH_DATA_DELETE: "v1/churches/addminDeleteMapping",

  CHURCH_DATA_ADD: "v1/churches/churchAdd",
  CHURCH_DATA_UPDATE: "v1/churches/churchUpdate",
  CHURCH_DATA_DELETE: "v1/churches/churchDeactivate",

  TERM_DATA_ADD: "v1/terms/termAdd",
  TERM_DATA_UPDATE: "v1/terms/termUpdate",
  TERM_DATA_DELETE: "v1/terms/termDeactivate",

  SERVICE_DATA_ADD: "v1/services/serviceAdd",
  SERVICE_DATA_UPDATE: "v1/services/serviceUpdate",
  SERVICE_DATA_DELETE: "v1/services/serviceDeactivate",

  CHILDREN_DATA_ADD: "v1/children/childrenAdd",
  CHILDREN_DATA_UPDATE: "v1/children/childrenUpdate",
  CHILDREN_DATA_DELETE: "v1/children/childrenDeactivate"
};

export const TERM_LIST_GET = "v1/terms/termList";
export const SERVICE_LIST_GET = "v1/services/serviceList";

export const ADMIN_LIST_GET = "v1/admins/adminList";
export const ADMIN_NEW_ADD = "v1/admins/adminAdd";
export const ADMIN_DATA_UPDATE = "v1/admins/adminUpdate";

export const CHURCH_LIST_GET = "v1/churches/churchList";
export const CHURCH_ALL_LIST_GET = "v1/churches/churchAll";
export const CHURCH_MAP_ADMIN_LIST_GET = "v1/churches/churchAdminMap";

export const CHILDREN_LIST_GET = "v1/children/childrenList";

// account things
export const SIGNIN_ENDPOINT = "v1/users/signin";
export const GET_AVAILABLE_CHURCH_ENDPOINT = "v1/churches/availableChurchList";
export const AUTHORIZE_ENDPOINT = "v1/users/checkAuthorize";
