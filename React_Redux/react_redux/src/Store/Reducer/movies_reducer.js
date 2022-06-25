export default function(state=[{id:1,name:'dabang'}],action){
    switch(action.type)
    {
        case "MOVIES_LIST":
            return action.payload
        default:
            return state
    }
}