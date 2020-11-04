import React, { Component } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Main />
          <Navbar/>
          <AboutMe />          
          <Skills />
          <Experience />
          <Education />
          <Portfolio />
          <ContactMe />
          <Footer />
      </div>
    );
  }
}

export default App;
