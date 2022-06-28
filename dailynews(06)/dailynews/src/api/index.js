import axios from 'axios'
const Url_Serv="http://localhost:3004"
export const GetPost=async(page=1,order="desc",limit=6)=>{
try{
    const response=await axios.get(`${Url_Serv}/posts/?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`)
    return {
        articles:response.data
    }
}
catch(error){
throw error;
}
}