import React, { Component, createContext } from 'react'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
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
        let arr=this.state.players
        let index=arr.indexOf(value)
        arr.splice(index,1)
        this.setState(({
            players:arr
        }))
    }
    NextBtnHandler=()=>{
        if(this.state.players.length>=2)
        {
            this.setState(({
                stage:2
            }))
        }
        else
        {
            toast.error("You need more than one player",{
                position:toast.POSITION.TOP_LEFT,
                autoClose:2000
            })
        }
    }
    RestartGame=()=>{
        this.setState({
            stage:1,
            players:[],
            result:''
        })
    }
    GetTheLoser=()=>{
        console.log("nice")
        let index=Math.floor(Math.random()*this.state.players.length)
        this.setState({
            result:this.state.players[index]
        })
        }
    render(){
        return(
            <>
            <MyContext.Provider value={{
                state:this.state,
                AddPlayer:this.AddPlayer,
                RemovePlayer:this.RemovePlayer,
                NextBtnHandler:this.NextBtnHandler,
                GetTheLoser:this.GetTheLoser,
                RestartGame:this.RestartGame
            }}>
                {this.props.children}
            </MyContext.Provider>
            <ToastContainer/>
            </>
        )
    }

}
export {MyContext,MyProvider}