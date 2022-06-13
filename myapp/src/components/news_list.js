
import React from "react";
function Check()
{
    return (<h1>Check</h1>)
}
const Check1=()=>(<h1 style={styles.header}>Check1</h1>)
class ClassComp extends React.Component{
    hello()
    {
        console.log("Hello")
    }
    increment(event)
    {
        this.setState({
            count:this.state.count+1
        })
    }
    state={
        keyword:'name',
        count:0
    }
    inputChangeHandler(event,name)
    {
        console.log(event.target.value)
        //console.log(name)
        //this.hello()
        this.setState({
            keyword:event.target.value
        })
    }
    render()
    {
        return (
            <>
            <p style={styles.paragraph}>from Class Component</p>
            <input onChange={(e)=>this.inputChangeHandler(e,'usman')}></input>
            <p>{this.state.keyword}</p>
            <div>{this.state.count}</div>
            <button onClick={(e)=>this.increment(e)}>Increment</button>
            </>
        )
    }

}
let styles={
    header:{
        color:"brown"
    },
    paragraph:{
        color:"yellow"

    }

}
export default Check;
export {Check1};
export {ClassComp};