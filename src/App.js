import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';
import Particle from './Components/Particle';
import Intro from './Components/Intro';

class App extends Component {

  showPage() {
    setTimeout(
      function() {
        document.getElementById("container").style.display='block';
        document.getElementById("home").style.display='block';
        document.getElementById("intro-screen").style.display='none';
      }, 5000);
  }

  render() {
    return (
      <div className="app" onLoad={() => this.showPage()}>
        <Intro />
        <div id="body-container">
          <div id="home-background">
            <Particle />
          </div>
          <Header/>
          <div id="container">
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
