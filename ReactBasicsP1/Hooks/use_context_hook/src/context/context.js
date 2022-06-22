import React, { Component, createContext } from 'react'
const myContext=createContext()
class MyProvider extends Component{
    constructor(props){
        super(props)
        this.state={
            users:[  
            {id:1,name:'Usman'},
            {id:2,name:'Ali'},
            {id:3,name:'Abeer'}],
            active:true,
    }
    }
    togglehandler=()=>
    {
        this.setState({active:!this.state.active})
    }
    render(){
        return(
            <myContext.Provider value={{users:this.state.users,active:this.state.active,togglehandler:this.togglehandler}}>
            {this.props.children}
            </myContext.Provider>
        )
    }
}
export {MyProvider,myContext}