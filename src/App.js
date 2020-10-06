import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer';
import About from './components/pages/About/About';
import Services from './components/pages/Services/Services';
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path= '/' exact component={Home}/>
        <Route path= '/about' exact component={About}/>
        <Route path = '/services' exact component={Services}/>
        <Route path = '/contact' exact component={Contact}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;