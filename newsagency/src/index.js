import React,{Component} from 'react'
import Header from './components/header'
import {createRoot} from 'react-dom/client'
import JSON from './data.json'
import NewsList from './components/newslist'
class App extends Component{
    state={
        filtered:JSON,
        news:JSON

    }
    getKeywords=(event)=>{
        console.log(event.target.value)
        let keyword=event.target.value;
        let filtered=this.state.news.filter((item)=>{
            return item.title.indexOf(keyword)>-1;
        });
        this.setState({
            filtered
        })
    }
    render()
    {
        return(
            <>
            <Header keyword={this.getKeywords}/>
            <NewsList news={this.state.filtered}/>
            </>
        )
    }
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)