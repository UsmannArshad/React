import React, { Component } from 'react'
import {createRoot} from 'react-dom/client'
import {Alert} from 'react'
const container = document.getElementById('root');
const root = createRoot(container);

// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     root.render(element);
// }
class Clock extends Component{
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
        this.timerId=setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount()
    {
        clearInterval(this.timerId)
    }
    tick()
    {
        console.log("gg")
        this.setState((state)=>({
            time:new Date()
        }))
    }
    removetimer()
    {
        console.log("ff")
        this.setState({
            check:false
        })
    }
    render()
    {
        return(
        <div>
        <h1>Hello, world!</h1>
        <button onClick={()=>this.removetimer()} 
        >Delete Timer</button>
        {this.state.check ? <h2>It is {this.state.time.toLocaleTimeString()}.</h2>:null}
        </div> 
        )
    }
}
root.render(<Clock/>)