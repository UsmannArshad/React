import * as api from "../../api";
import { GetPosts } from "../types";
export const getPost=()=>{
    return({
    type:GetPosts,
    payload:api.GetPost()
})
}