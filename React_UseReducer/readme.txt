UseReducer hook is used instead of react-redux
const [state,dispatch]=useReducer((state,action)=>{},0)
action tells us what we want to done like if we ()=>dispatch(-1) 
and const [state,dispatch]=useReducer((state,action)=>{return action},0)
then state will become -1.

const [state,dispatch]=useReducer((state,action)=>{
    switch(action.type)
    {
      case "increment":
        return {...state,count:state.count+1}
      case "decrement":
        return {...state,count:state.count-1}
      case "changeuser":
        return{...state,user:action.payload}
      default:
        return state
    }
  },{count:0,user:'USMAN'})