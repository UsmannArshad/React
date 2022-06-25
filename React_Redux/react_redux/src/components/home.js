import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment,Decrement,MovieList } from "../Store/Action";
const Home=()=>{
const count=useSelector(state=>state.counter)
const movies=useSelector(state=>state.movies)
const Dispatch=useDispatch()
return(
<>
<h1>Current count is {count}</h1>
<button onClick={()=>{Dispatch(Increment)}}>Increment</button>
<button onClick={Dispatch(Decrement)}>Decrement</button>
<h1>Movies List:</h1>
<button onClick={Dispatch(MovieList)}>Movie</button>
{movies.map((item)=>(
    <div key={item.id}>
        {item.name}
    </div>
))}
</>
)
}
export default Home