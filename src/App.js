import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer';
import About from './components/pages/About/About';
import Services from './components/pages/Services/Services';
import Contact from './components/pages/Contact/Contact';
import ScrollToTop from './components/ScrollToTop';
import wifiOptimization from './components/pages/Wifi/wifiOptimization';
import cableManagement from './components/pages/CableManagement/cableManagement';
import camera from './components/pages/Camera/camera';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route path= '/' exact component={Home}/>
        <Route path= '/about' exact component={About}/>
        <Route path = '/services' exact component={Services}/>
        <Route path = '/contact' exact component={Contact}/>
        <Route path = '/wifiOptimization' exact component={wifiOptimization}/>
        <Route path = '/cableManagement' exact component={cableManagement}/>
        <Route path = "/camera" exact component={camera}/> 
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
