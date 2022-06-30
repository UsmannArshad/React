import { GetPosts,GetPostById } from "../types";
export default function PostReducer(state={},action){
    switch(action.type)
    {
        case GetPosts:
            return{...state,...action.payload}
        case GetPostById:
            return{...state,...action.payload}
        default:
            return state;
    }
}