import React,{useReducer} from "react";
import { Reducers } from "./utils/reducers";
const App=()=>{
  const [state,dispatch]=useReducer(Reducers,{count:0,user:'USMAN'})
  const ChangeNameHandler=()=>{
    const newName=['Ali','Umer','Abeer']
    console.log("gg")
    return{
      type:'changeuser',
      payload:newName[Math.floor(Math.random()*newName.length)]
    }
  }
  return (
    <div className="App">
      <div>Current Count:{state.count}</div>
      <div>Current User:{state.user}</div>
      <button onClick={()=>dispatch({type:'increment',payload:1})}>Inc</button>
      <button onClick={()=>dispatch({type:'decrement',payload:-1})}>Dec</button>
      <button onClick={()=>dispatch(ChangeNameHandler())}>Cange User</button>
    </div>
  );
}

export default App;
