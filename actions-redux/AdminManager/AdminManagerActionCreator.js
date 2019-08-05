import * as AdminManagerActionTypes from './AdminManagerActionTypes'
import {callGet,callPost} from '../common'
import {ADMIN_LIST_GET} from '../../constant/apiEndpoints'



export const getAdminList =  ()=>async (dispatch)=>{
    const res = await callGet(ADMIN_LIST_GET,{test:false})

    dispatch({
        type:AdminManagerActionTypes.ADMIN_LIST_UPDATE,
        payload:res
    });
}
