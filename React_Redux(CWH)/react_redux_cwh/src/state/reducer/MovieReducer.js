const MovieReducer = (state=[],action) => {
    if(action.type==="AddMovie")
    {
        return [...state,action.payload]
    }
    else if(action.type==="SubtractAmount")
    {
        return state.splice(action.payload,1)
    }
    else
    {
        return state
    }
}

export default MovieReducer