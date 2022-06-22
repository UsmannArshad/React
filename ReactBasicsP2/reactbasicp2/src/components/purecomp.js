import React, { PureComponent } from "react";
class PureComp extends PureComponent{
    state={
        name:'usman'
    }
    render(){
        console.log('render')
        return(
            <>
            <h3>{this.state.name}</h3>
            <button onClick={()=>this.setState({name:'ali'})}>Ali</button>
            <button onClick={()=>this.setState({name:'usman'})}>Usman</button>
            </>
        )
    }
}
export default PureComp;
