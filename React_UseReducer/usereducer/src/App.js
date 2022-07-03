import React,{useReducer} from "react";
const App=()=>{
  const [state,dispatch]=useReducer((state,action)=>{
    switch(action)
    {
      case 1:
        return state+1
      case -1:
        return state-1
      default:
        return state
    }
  },0)
  return (
    <div className="App">
      <div>Current State:{state}</div>
      <button onClick={()=>dispatch(1)}>Inc</button>
      <button onClick={()=>dispatch(-1)}>Dec</button>
    </div>
  );
}

export default App;
