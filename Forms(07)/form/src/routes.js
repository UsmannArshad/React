import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Form1 from './Form1'
import Form2 from './Form2'
import Header from './header'

const Routess = () => {
return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Form1/>}/>
        <Route path='/form2' element={<Form2/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routess