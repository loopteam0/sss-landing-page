import React from 'react'
import './App.css';
 
import { BrowserRouter } from 'react-router-dom' 
import AppBar from './components/appbar';
import Slider from './components/Slider';
import Aims from './components/aims';
import { Team } from './components/Team';
import AboutUs from './components/about-us';
import ContactUs from './components/ContactUs';

function App() {

  return (

    <BrowserRouter>
      <AppBar />
      <Slider />
      <Aims />
      <Team />
      <AboutUs />
      <ContactUs/>
    </BrowserRouter>
  );
}

export default App;
