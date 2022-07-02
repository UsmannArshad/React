import * as api from "../../api";
import { GetPosts,AddUsers,ClearUsers,GetPostById, ClearPost, AddContact} from "../types";
export const getPost=(posts,page,order,limit)=>({
    type:GetPosts,
    payload:api.GetPost(posts,page,order,limit)
})
export const adduser=(user)=>({
        type:AddUsers,
        payload:api.AddUser(user)
})
export const clearuser=()=>({
        type:ClearUsers,
        payload:{newsletter:false,email:{}}
})
export const getpostbyid=(id)=>({
        type:GetPostById,
        payload:api.GetPostDetail(id)
})
export const clearpost=()=>({
        type:ClearPost,
        payload:{postbyid:{}}
})
export const addcontact=(values)=>({
        type:AddContact,
        payload:api.SaveContact(values)
})