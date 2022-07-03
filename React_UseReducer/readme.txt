UseReducer hook is used instead of react-redux
const [state,dispatch]=useReducer((state,action)=>{},0)
action tells us what we want to done like if we ()=>dispatch(-1) 
and const [state,dispatch]=useReducer((state,action)=>{return action},0)
then state will become -1.