import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sections from './components/Sections';
import Footer from './components/Footer';
import Form from './components/Form';
import clearSkyImage from './clearsky.gif';
import nightStormImage from './nightstorm.gif';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sections />
        <Form />
        <Footer />
      </div>
    </Router>
  );
}

export default App;