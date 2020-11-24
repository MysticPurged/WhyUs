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
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
