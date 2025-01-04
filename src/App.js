
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
 import Home from './Components/Home/Home';
 import About from './Components/About/About';
 import Resume from './Components/Resume/Resume';
 import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';


function App() { 
  return (
    <>
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

