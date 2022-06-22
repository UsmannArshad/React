import React, { useState } from 'react'
const ShowPost=()=>{
    let [posts,setPost]=useState([
        {name:"Breaking News",
        body:"Nawaz sharif returns to Pakistan"},
        {name:"Breaking News",
        body:"Nawaz sharif returns to Pakistan"},
        {name:"Breaking News",
        body:"Nawaz sharif returns to Pakistan"},
    ])
    const AddPost=()=>{
        setPost([
            ...posts,
            {
                name:"Breaking News",
                body:"Nawaz sharif returns to Pakistan"
            }

        ])
    }
    return(
        <>
        <p>Hello</p>
        {posts.map((item,i)=>(
            <div key={i}>
            <h1>{item.name}</h1>
            <h3>{item.body}</h3>
            </div>
        ))}
        <button onClick={AddPost}>Add Post</button>
        </>
    )
}
export default ShowPost