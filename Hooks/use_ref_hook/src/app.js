import React, { Component, createRef } from 'react'
class UseRefClass extends Component{
    constructor(props)
    {
        super(props)
        this.textInput=createRef(null)
    }
    triggerhandler(event){
        console.log(this.textInput)
        this.textInput.current.focus()
        console.log(this.textInput.current.value)
    }
    render()
    {
        return(
            <>
            <h1>Form:</h1>
            <input ref={this.textInput}/>
            <button onClick={(e)=>this.triggerhandler(e)}>Trigger</button>
            </>
        )
    }
}
export default UseRefClass