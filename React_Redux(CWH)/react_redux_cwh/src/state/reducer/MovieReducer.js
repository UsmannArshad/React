const MovieReducer = (state=[{id:1,name:"Bahubali",price:200}],action) => {
    if(action.type==="AddMovie")
    {
        return [...state,action.payload]
    }
    else if(action.type==="DeleteMovie")
    {
        state.splice(action.payload,1)
        return [...state]
    }
    else
    {
        return state
    }
}

export default MovieReducer