import axios from 'axios'
import { Types } from '../Type'
export const GetUserFromServer=()=>{
    const request=axios.get(`https://jsonplaceholder.typicode.com/users`).then(response=>{
        return response.data
    })
    console.log(request)
    return {
        type:Types.UserType,
        payload:request
    }
}