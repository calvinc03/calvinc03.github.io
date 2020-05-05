import React, { Component } from 'react';
import './css/layout.css'

class Header extends Component {
   constructor(props) {
      super(props);
  
      this.state = {
        prevScrollpos: window.pageYOffset,
        visible: true
      };
    }
  
    // Adds an event listener when the component is mount.
    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  
    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  
    // Hide or show the menu.
    handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const currentVisible = this.state.prevScrollpos > currentScrollPos;
  
      this.setState({
        prevScrollpos: currentScrollPos,
        visible: currentVisible
      });
    };

   render() {
      const { visible } = this.state
      return (
         <header id="home">

         <nav id="nav-wrap">
            <ul id="nav" className={visible? "nav" : "inactive"}>
               <li className="current"><a className="smoothscroll" href="#home">HOME</a></li>
               <li><a className="smoothscroll" href="#about">ABOUT</a></li>
               <li><a className="smoothscroll" href="#resume">EXPERIENCE</a></li>
               <li><a className="smoothscroll" href="#portfolio">PROJECTS</a></li>
            </ul>

         </nav>

         <div className="row-banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I'm Calvin Chen.</h1>
               <h3>
                  I'm a fourth year Math and Computer Science student at the University of British Columbia. Currently, I am seeking internship opportunities
                  to apply my experience to assist companies through technical and software developmental areas. Find out more about me below!
               </h3>
               <hr />
               <ul className="social">
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/calvin.chen.125"><img src="https://img.icons8.com/doodle/48/000000/facebook-new.png" alt="facebook"/></a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/calvin-chen-aa9139184/"><img src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png" alt="linkedin"/></a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03"><img src="https://img.icons8.com/doodle/48/000000/github--v1.png" alt="github"/></a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/calvinchen8/"><img src="https://img.icons8.com/doodle/48/000000/instagram-new.png" alt="instagram" /></a></li>
               </ul>
            </div>
         </div>

         <div className="button-down">
            <a href="#about">
               <img src="https://img.icons8.com/plasticine/100/000000/thick-arrow-pointing-down.png" alt="arrow"/>
            </a>
         </div>

         </header>
      );
   }
}

export default Header;
