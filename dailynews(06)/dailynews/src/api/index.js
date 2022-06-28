import axios from 'axios'
const Url_Serv="http://localhost:3004"
export const GetPost=async()=>{
try{
    const response=await axios.get(`${Url_Serv}/posts`)
    return {
        articles:response.data
    }
}
catch(error){
throw error;
}
}