import * as api from "../../api";
import { GetPosts,AddUsers } from "../types";
export const getPost=(posts,page,order,limit)=>{
    return({
    type:GetPosts,
    payload:api.GetPost(posts,page,order,limit)
})
}
export const adduser=(prevlist,user)=>{
    return({
        type:AddUsers,
        payload:api.AddUsers(prevlist,user)
    })
}