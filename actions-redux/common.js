import axios from 'axios'

const baseUrl = 'http://localhost:3001/'

export const callGet = async (url,param={})=>{
    return (await axios.get(`${baseUrl}${url}`, {})).data.response;
}

const callPost = async (url,param={})=>{
    return await axios.post(`${baseUrl}${url}`, param);
}