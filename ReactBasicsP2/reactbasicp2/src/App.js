import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./components/home";
import Header from "./components/header";
const App=()=>{
  return (
    <BrowserRouter>
    <Header/>
          <div className="container">
          <Routes>
          <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
