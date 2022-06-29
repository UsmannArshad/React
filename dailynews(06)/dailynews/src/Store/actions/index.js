import * as api from "../../api";
import { GetPosts,AddUsers } from "../types";
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