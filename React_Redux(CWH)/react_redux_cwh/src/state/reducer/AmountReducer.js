const AmountReducer = (state=0,action) => {
    if(action.type==="AddAmount")
    {
        return state+action.payload
    }
    else if(action.type==="SubtractAmount")
    {
        return state-action.payload
    }
    else
    {
        return state
    }
}

export default AmountReducer