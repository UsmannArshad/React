import { Types } from "../Type"
const UserReducer=(state=[],action)=>{
    console.log("ff")
    if(action.type===Types.UserType)
    {
        return [action.payload]
    }
    else
    {
        return state
    }
}
export default UserReducer