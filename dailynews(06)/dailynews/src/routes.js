import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'
import Home from './components/home'
import MainLayout from './hoc/mainlayout'
import Header from './components/header'
import Contact from './components/contact'
import PostDetail from './components/home/postdetail'
const Routess=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <MainLayout>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/article/:id" element={<PostDetail/>}></Route>
        </Routes>
        </MainLayout>
        </BrowserRouter>
    )
}
export default Routess