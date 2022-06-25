import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react';
import Home from './components/home';
import Header from './components/header';
function App() {
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
