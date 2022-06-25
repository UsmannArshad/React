import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import MovieViewer from './MovieViewer'
import { actionCreatoes } from '../state'
const Home = () => {
const movies=useSelector(state=>state.movies)
const balance=useSelector(state=>state.amount)
const dispatch=useDispatch()
return (
    <>
    {movies.map((item)=>(
        <MovieViewer item={item} key={item.id}/>
    ))}
    <h3>Amount:{balance}</h3>
    <button onClick={()=>{dispatch(actionCreatoes.AddMovie(2,"Money Heist",2000))}}>Add Movie</button>
    <button onClick={()=>{dispatch(actionCreatoes.DeleteMovie(0))}}>Remove Movie</button>
    </>
)
}

export default Home