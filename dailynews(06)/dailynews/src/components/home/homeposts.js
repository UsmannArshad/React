import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getPost,getpostbyid } from '../../Store/actions'
import {Button} from 'react-bootstrap'
import Masonry from 'react-masonry-css'
import Moment from 'react-moment'
import {LinkContainer} from 'react-router-bootstrap'

const Homeposts = () => {
    const posts=useSelector(state=>state.Post)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getPost({},1,"desc",6))
    },[dispatch])
    const GetmorePost=()=>
    {
      dispatch(getPost(posts,posts.page+1,"desc",6))
    }
  return(
    <>
    <Masonry
              breakpointCols={{default:3,800:2,500:1}}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
                {posts.articles ? 
                posts.articles.map((item)=>(
                  <div key={item.id}>
                    <img src={item.image} style={{width:'100%',height:'200px'}}/>
                    <div className='author'>
                      <span>{item.author}</span>
                      <Moment format="DD MMMM">
                        {item.createdAt}
                      </Moment>
                    </div>
                    <div className='content'>
                      <div className='title'>{item.title}</div>
                      <div className='excerpt'>{item.excerpt}</div>
                      <LinkContainer
                    to={`/article/${item.id}`}
                    className="mt-2">
                    <Button variant='success'>Read more</Button>
                    </LinkContainer>
                    </div>
                  </div>
                )):null}
            </Masonry>
    {posts.isended ? null:<Button variant="outline-dark" onClick={GetmorePost}>Show More</Button>}
    </>
  )
}

export default Homeposts