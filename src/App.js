import React from 'react-dom';
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Contact from './component/Contact/Contact';
import Service from './component/Service/Service';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="con">
    
    <BrowserRouter>
    <Navbar />
         <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/about" element={<About />}></Route>
         <Route path="/skills" element={<Skills />}></Route>
         <Route path="/contact" element={<Contact />}></Route>
         <Route path="/service" element={<Service />}></Route>
</Routes>
</BrowserRouter>    
    </div>
          
  )
}
export default App;