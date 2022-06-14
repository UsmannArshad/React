import React,{Component} from 'react'
class Header extends Component{
    render()
    {
        return(
            <header>
            <h1>Geo News</h1>
            <input onChange={this.props.keyword}/>
            </header>
        )
    }
}
export default Header