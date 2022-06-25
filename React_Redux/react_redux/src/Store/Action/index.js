import React from 'react'
export const Increment=()=>{
    return{
    type:'INCREMENT'
    }
}
export const Decrement=()=>{
    return{
    type:'DECREMENT'
    }
}
export const MovieList=()=>{
    return{
    type:'MOVIES_LIST',
    payload:[
        {id:1,name:'Money Heist'},
        {id:2,name:'Squid Game'}
    ]
}
}