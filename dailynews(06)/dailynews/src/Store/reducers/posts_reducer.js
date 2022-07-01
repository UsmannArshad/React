import { GetPosts,GetPostById, ClearPost } from "../types";
export default function PostReducer(state={},action){
    switch(action.type)
    {
        case GetPosts:
            return{...state,...action.payload}
        case GetPostById:
            return{...state,...action.payload}
        case ClearPost:
            return{...state,...action.payload}
        default:
            return state;
    }
}