import React,{Component} from "react";
class News_list_items extends Component{
    render()
    {
        console.log("wao")
        return(
            <div key={this.props.items.id}>
            <h3>{this.props.items.title}</h3>
            <p>{this.props.items.feed}</p>
            </div>
        )
    }
}
export default News_list_items