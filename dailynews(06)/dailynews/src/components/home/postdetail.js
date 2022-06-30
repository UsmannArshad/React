import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Newsletter from '../../utils/newsletter'
import { getpostbyid } from '../../Store/actions'

const PostDetail = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getpostbyid(20))
    },[dispatch])
return (
    <>
    <div>Post Detail</div>
    <Newsletter/>
    </>
)
}
export default PostDetail