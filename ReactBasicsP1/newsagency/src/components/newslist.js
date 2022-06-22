import React from "react";
import Newslistitems from "./newslistitem";
const NewsList=(props)=>{
const news=props.news.map((item)=>
(
    <Newslistitems item={item} key={item.id}/>
))
return(
    <>
     {news}
    </>
 
)
}
export default NewsList