import { AddUsers,ClearUsers,GetPostById } from "../types";
export default function UserReducer(state={},action){
    switch(action.type)
    {
        case AddUsers:
            return{...state,...action.payload}
        case ClearUsers:
            return{...state,...action.payload}
        case GetPostById:
            return{...state,...action.payload}
        default:
            return state;
    }
}