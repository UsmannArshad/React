
import React,{Component} from "react";
import News_list_items from "./news_list_item";
function Check()
{
    return (<h1>Check</h1>)
}
const Check1=()=>(<h1 style={styles.header}>Check1</h1>)
class ShowNews extends Component{
    state={
        check:false
    }
    btnclick=()=>{
        this.setState({
            check:true
        })
    }
    render()
    {
        return(
            <>
            <h1>Coming from Class Component</h1>
            {this.props.news.map((item)=>(
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.feed}</p>
            </div>
            ))}
            <button onClick={this.btnclick}>Click me</button>
            {this.state.check ? <ShowNewsbyFunc1 news={this.props.news}/>:null}
            </>
        )
    }
}
const ShowNewsbyFunc1=(props)=>{
    
    const news=props.news.map((item)=>(
        <News_list_items
        items={item}/>
        ))
    return(
        <>
        <h1>Using news list items file</h1>
        {news}
        </>
    )
}
const ShowNewsbyFunc=(props)=>{
    return(
        <>
        <h1>Coming from Function Component</h1>
        {props.news.map((item)=>(
        <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.feed}</p>
        </div>
        ))}
        </>
    )
}
class ClassComp extends React.Component{
    hello()
    {
        console.log("Hello")
    }
    increment(event)
    {
        // this.setState({
        //     count:this.state.count+1         //Method 1
        // })
        this.setState((state,props)=>({
            count:state.count + 1               //state will give the previous state and it is                                                 //returning new state with changed values and previous                                                /ones
        }))                                     //retuning new state with changed and previous values
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
        console.log(this.state)
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
export {ShowNews};
export{ShowNewsbyFunc}