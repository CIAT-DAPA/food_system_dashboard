import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import Home from './pages/home/Home';
import Determinants from './pages/determinants/Determinants';

import './App.css';
import Supplies from './pages/supplies/Supplies';

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="container">
          <Router>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/determinantes' element={<Determinants />} />
              <Route path='/suministro_alimentos' element={<Supplies />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </>
    );
  }

}

export default App;
