import React from 'react'
import {useDispatch } from 'react-redux'
import { actionCreatoes } from '../state'
const MovieViewer = (props) => {
  const dispatch=useDispatch()
  return (
    <div key={props.item.id} style={{background:'red',marginTop
    :'2px'}}>
        <h3>Name:{props.item.name}</h3>
        <h3>Price:{props.item.price}</h3>
        <button onClick={()=>dispatch(actionCreatoes.AddAmount(props.item.price))}>Add to Cart</button>
        <button onClick={()=>dispatch(actionCreatoes.SubtractAmount(props.item.price))}>Remove from Cart</button>
    </div>
  )
}

export default MovieViewer