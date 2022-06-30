import * as api from "../../api";
import { GetPosts,AddUsers,ClearUsers,GetPostById} from "../types";
export const getPost=(posts,page,order,limit)=>{
    return({
    type:GetPosts,
    payload:api.GetPost(posts,page,order,limit)
})
}
export const adduser=(user)=>{
    return({
        type:AddUsers,
        payload:api.AddUser(user)
    })
}
export const clearuser=()=>{
    return({
        type:ClearUsers,
        payload:{newsletter:false,email:{}}
    })
}
export const getpostbyid=(id)=>{
    return({
        type:GetPostById,
        payload:api.GetPostDetail(id)
    })
}