import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'
import Home from './components/home'
import MainLayout from './hoc/mainlayout'
import Header from './components/header'
const Routess=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <MainLayout>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        </MainLayout>
        </BrowserRouter>
    )
}
export default Routess