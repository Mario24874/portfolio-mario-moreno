import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sections from './components/Sections';
import ImageComponent from './components/ImageComponent';
import VideoPro from './components/VideoPro'; 
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sections />        
        <ImageComponent />        
        <VideoPro />
        <Form /> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;