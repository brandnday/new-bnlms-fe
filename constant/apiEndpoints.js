export const dynamicDataEndpointResolver = (dataName,dataAction)=>{
  return INSERT_UPDATE_DELETE[`${dataName}_DATA_${dataAction}`]
}
const INSERT_UPDATE_DELETE = {
  ADMIN_DATA_ADD :'v1/admins/adminAdd',
  ADMIN_DATA_UPDATE :'v1/admins/adminUpdate',
  ADMIN_DATA_DELETE :'v1/admins/adminDeactivate',

  CHURCH_DATA_ADD :'v1/churches/churchAdd',
  CHURCH_DATA_UPDATE :'v1/churches/churchUpdate',
  CHURCH_DATA_DELETE :'v1/churches/churchDeactivate',
}

export const ADMIN_LIST_GET = 'v1/admins/adminList'
export const ADMIN_NEW_ADD = 'v1/admins/adminAdd'
export const ADMIN_DATA_UPDATE = 'v1/admins/adminUpdate'

export const CHURCH_LIST_GET = 'v1/churches/churchList'