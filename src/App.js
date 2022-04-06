import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Header,
  Projects,
  About,
  Technologies,
  Contact,
  Footer,
} from './containers';
import Navbar from './components/navbar/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
