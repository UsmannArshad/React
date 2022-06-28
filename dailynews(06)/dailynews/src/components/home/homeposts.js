import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getPost } from '../../Store/actions'

const Homeposts = () => {
    const posts=useSelector(state=>state.posts)
    const dispatch=useDispatch()
    console.log(posts)
    useEffect(()=>{
        dispatch(getPost())
    },[dispatch])
  return (
    <div>Homeposts</div>
  )
}

export default Homeposts