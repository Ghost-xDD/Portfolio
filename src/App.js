import React from 'react';
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
  );
}

export default App;
