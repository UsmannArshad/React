import React, { Component } from "react"
class UpdateComp extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            check:true,
            time:new Date()
        }
    }
    componentDidMount()
    {
        console.log("Component did mount")
        this.timerId=setInterval(()=>this.tick(),1000);   //using arrow function while calling
    }
    componentWillUnmount()
    {
        clearInterval(this.timerId)
    }
    static getDerivedStateFromProps()
    {
        console.log("getDerivedStateFromProps")
        return null;
    }
    componentDidUpdate()
    {
        console.log("Component did update")
        this.timerId=setInterval(()=>this.tick(),1000);   //using arrow function while calling 
    }
    shouldComponentUpdate()
    {
        console.log("Should Componen Update")
        return this.state.check
    }
    tick()
    {
        this.setState((state)=>({
            time:new Date()
        }))
    }
    pausetimer=()=>   //making this func arrow as otherwise it will consider this as a this of function
    {
        this.setState({
            check:!this.state.check
        })
    }
    render()
    {
        console.log("Render")
        return(
        <div className="update_div">
        <h1>Updating LifeCycle</h1>
        <button onClick={this.pausetimer} 
        >Pause Timer</button>
        {<h2>It is {this.state.time.toLocaleTimeString()}.</h2>}
        </div> 
        )
    }
}
export default UpdateComp