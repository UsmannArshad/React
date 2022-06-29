import axios from 'axios'
const Url_Serv="http://localhost:3004"
export const GetPost=async(posts,page=1,order="desc",limit=6)=>{
try{
    const response=await axios.get(`${Url_Serv}/posts/?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`)
    return {
        articles:posts.articles ? [...posts.articles,...response.data]:response.data,
        page:page,
        isended:response.data.length===0 ? true:false 
    }
}
catch(error){
throw error; 
}
}
export const AddUsers=(prevlist,user)=>{
    return{
        users:prevlist ? [...prevlist,user]:[user]
    }
}