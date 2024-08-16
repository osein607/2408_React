import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import HeroSection from './components/HeroSection'; 
import Cards from './components/Cards';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    < >
      <Router>
       <Navbar />
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/services' element={<Services/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/sign-up' element={<SignUp/>} />
          </Routes>
          <HeroSection />
          <Cards />
          <Footer />
      </Router>
    </>
  );
}

export default App;

