import axios from 'axios'
import { Types } from '../Type'
export const GetUserFromServer=()=>{
    console.log("gg")
    const request=axios.get(`https://jsonplaceholder.typicode.com/users`).then(response=>{
        return response.data
    })
    return {
        type:Types.UserType,
        payload:request
    }
}