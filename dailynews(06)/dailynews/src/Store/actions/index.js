import * as api from "../../api";
import { GetPosts } from "../types";
export const getPost=(posts,page,order,limit)=>{
    return({
    type:GetPosts,
    payload:api.GetPost(posts,page,order,limit)
})
}