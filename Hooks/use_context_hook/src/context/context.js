import React, { Component, createContext } from 'react'
const myContext=createContext()
class MyProvider extends Component{
    constructor(props){
        super(props)
        this.state={
            users:[  
            {id:1,name:'Usman'},
            {id:2,name:'Ali'},
            {id:3,name:'Abeer'}
        ]}
    }
    render(){
        return(
            <myContext.Provider value={this.state.users}>
            {this.props.children}
            </myContext.Provider>
        )
    }
}
export {MyProvider,myContext}