import React, { Component } from "react";
class Newslistitems extends Component{
    render()
    {
        return(
            <>
            <div className="newsdiv">
            <h1>{this.props.item.title}</h1>
            <p>{this.props.item.feed}</p>
            </div>
            </>
        )
    }
}
export default Newslistitems