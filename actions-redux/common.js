import axios from 'axios'

const baseUrl = 'http://localhost:3001/'

import{dynamicDataEndpointResolver} from '../constant/apiEndpoints'
export const callGet = async (url,param={})=>{
    return (await axios.get(`${baseUrl}${url}`, param)).data.response;
}

export const callPost = async (url,param={})=>{
    return (await axios.post(`${baseUrl}${url}`, param)).data.response;
}

export const dynamicData = async (dataName,dataAction,requestData)=>{
    const res = await callPost(dynamicDataEndpointResolver(dataName,dataAction),{requestData})
    return res;
}