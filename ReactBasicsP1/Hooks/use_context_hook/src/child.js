import React, { Component } from 'react'
import GrandChild from './grandchild'
import { myContext } from './context/context'
class Child extends Component{    //We want to access context in this class
    //static contextType=myContext  //method1
    render()
    {
        //console.log(this.context)   //method1
        return(
            <>
            <h2> From Child</h2>
            <myContext.Consumer>
                {
                    context=>
                    (
                        (context.users.map((item)=>(
                            <div key={item.id}>{item.name}</div>
                        )))
                    )
                }
            </myContext.Consumer>
            <GrandChild/>         
            </>
        )
    }
} 
export default Child