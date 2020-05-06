import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="body-container">
        <Header/>
        <div className="container">
          <About/>
          <Experience/>
          <Portfolio/>
          <Footer/>
        </div>
        </div>
          
      </div>
    );
  }
}

export default App;
