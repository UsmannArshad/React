import React, { Component } from 'react'
import {createRoot} from 'react-dom/client'
import UpdateComp from './components/updatelifecycle';
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
        console.log("Constructor")
        super(props)
        this.state={
            check:true,
            time:new Date()
        }
    }
    static getDerivedStateFromProps()
    {
        console.log("getDerivedStateFromProps")
    }
    componentDidMount()
    {
        console.log("Component did mount")
        this.timerId=setInterval(()=>this.tick(),1000);   //using arrow function while calling
    }
    componentWillUnmount()
    {
        console.log("Component will unmount")
        clearInterval(this.timerId)
    }
    tick()
    {
        this.setState((state)=>({
            time:new Date()
        }))
    }
    removetimer=()=>   //making this func arrow as otherwise it will consider this as a this of function
    {
        this.setState({
            check:!this.state.check
        })
    }
    render()
    {
        console.log("Render")
        return(
        <div className='mounting_div'>
        <h1>Mounting Lifecycle</h1>
        <button onClick={this.removetimer} 
        >Delete Timer</button>
        {this.state.check ? <h2>It is {this.state.time.toLocaleTimeString()}.</h2>:null}
        <UpdateComp/>
        </div> 
        )
    }
}
root.render(<Clock/>)