import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getPost } from '../../Store/actions'
import {Spinner,Button} from 'react-bootstrap'

const Homeposts = () => {
    const posts=useSelector(state=>state.Post)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getPost(posts,1,"desc",6))
    },[dispatch])
    const GetmorePost=()=>
    {
      dispatch(getPost(posts,posts.page+1,"desc",6))
    }
  return(
    <>
    <h1>Homeposts</h1>
    <Button variant="outline-dark" onClick={GetmorePost}>Show More</Button>
    </>
  )
}

export default Homeposts