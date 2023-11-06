import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Careers from './Components/Careers';
import Apply from './Components/Apply';
import Testing from './Components/testing';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/test" element={<Testing/>}/>
        <Route path="/application/:jobTitle" element={<Apply/>} />
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
