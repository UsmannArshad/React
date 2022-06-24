import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./components/home";
import Header from "./components/header";
import PureComp from "./components/purecomp";
import PureCompF from "./components/purecompF";
import Profile from "./components/profile";
const App=()=>{
  return (
    <BrowserRouter>
    <Header/>
          <div className="container">
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/purecomp" element={<PureComp/>}></Route>
          <Route path="/purecompF" element={<PureCompF/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
