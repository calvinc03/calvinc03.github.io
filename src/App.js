import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <About/>
          <Experience/>
          <Portfolio/>
          <Footer/>
        </div>  
      </div>
    );
  }
}

export default App;
