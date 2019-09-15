import { callGet, callPost, dynamicData } from "../common";
import {
  SIGNIN_ENDPOINT
} from "../../constant/apiEndpoints";
export const signin = async (username,password) => {
  
  const res = await callPost(SIGNIN_ENDPOINT, {
      username,
      password,
  });
  if(res.success){
    return res.token;
  }else{
    return false;
  }
  console.log(res)
};