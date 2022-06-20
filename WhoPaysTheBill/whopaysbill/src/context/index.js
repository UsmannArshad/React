import React, { Component, createContext } from 'react'
const MyContext=createContext()
class MyProvider extends Component{
    constructor(props){
        super(props)
        this.state={
            stage:1,
            players:[],
            result:''
        }
    }
    AddPlayer=(value)=>{
        this.setState(({
            players:[...this.state.players,value]
        }))
    }
    RemovePlayer=(value)=>{
        console.log(value)
        let arr=this.state.players
        let index=arr.indexOf(value)
        arr.splice(index,1)
        this.setState(({
            players:arr
        }))
    }
    render(){
        return(
            <MyContext.Provider value={{
                state:this.state,
                AddPlayer:this.AddPlayer,
                RemovePlayer:this.RemovePlayer
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }

}
export {MyContext,MyProvider}