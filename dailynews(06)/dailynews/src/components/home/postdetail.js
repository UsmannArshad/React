import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Newsletter from '../../utils/newsletter'
import { getpostbyid } from '../../Store/actions'
import Moment from 'react-moment'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
    const dispatch=useDispatch()
    const post=useSelector(state=>state.Post)
    const id =useParams()
    console.log(id)
    useEffect(()=>{
        dispatch(getpostbyid(id.id))
    },[post])
    useEffect(()=>{
    },[dispatch])
    return(
        <>
        {post.postbyid ? <div className="article_container">
        <h1>{post.postbyid.id}:{post.postbyid.title}</h1> 
        <img src={post.postbyid.imagexl} className="image"></img>
        <div className="author">
                    Created by: <span>{post.postbyid.author} - </span>
                    <Moment format="DD MMMM">
                        {post.postbyid.createdAt}
                    </Moment>
                    <div className='detailed_content'><div dangerouslySetInnerHTML={{__html: post.postbyid.content}}></div></div>
                </div>
        </div>:<h1>Error 404!</h1>}
        <Newsletter/>
        </>
    )
}
export default PostDetail