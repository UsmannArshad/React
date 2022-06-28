import * as api from "../../api";
import { GetPosts } from "../types";
export const getPost=(page,order,limit)=>{
    return({
    type:GetPosts,
    payload:api.GetPost(page,order,limit)
})
}