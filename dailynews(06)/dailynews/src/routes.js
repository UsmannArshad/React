import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'
import Home from './components/home'
const Routess=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Routess