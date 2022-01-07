import React from 'react';
import Navbar from './Comps/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Comps/pages/Home';
import Services from './Comps/pages/Services';
import Products from './Comps/pages/Products';
import Signup from './Comps/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
