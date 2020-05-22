import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

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

      if (currentScrollPos <= 200) 
         document.getElementById("nav-wrap").style.backgroundColor="rgb(1,1,1, 0)";
      else
         document.getElementById("nav-wrap").style.backgroundColor="rgb(20, 22, 22)";
  
      this.setState({
        prevScrollpos: currentScrollPos,
        visible: currentVisible
      });
   };

   render() {
      const { visible } = this.state
      return (
         <header id="home">
            <div className="header-container">
            <nav id="nav-wrap">
               <div className={visible? "nav" : "inactive-nav"} >
                  <a className="homebutton" href="#home">CC</a>
                  <ul className="menu-bar">
                     <li><a className="smoothscroll" href="#about">ABOUT</a></li>
                     <li><a className="smoothscroll" href="#resume">EXPERIENCE</a></li>
                     <li><a className="smoothscroll" href="#portfolio">PROJECTS</a></li>
                  </ul>
               </div>
               
            </nav>

            <div className="row-banner">
               <div className="banner-text">
                  <Typewriter
                     options={{
                        strings: ['Hello', 'Hi', 'Bonjour', 'Здравствуйте', 'Hola', '你好', 'Salve', 'שלום', 'Сайн уу', 
                        'Ahoj', '안녕하세요',  'こんにちは', 'Zdravo', 'Χαίρετε', 'નમસ્તે', 'Halló', 'Szia'],
                        autoStart: true,
                        loop: true
                     }}
                  />
                  <h1>
                     I'm Calvin Chen.
                  </h1>
                  <h3>4th year Math + Computer Science Major <br/>Aspiring Software Developer </h3>
                  <hr />
                  <ul className="social">
                     <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/calvin.chen.125"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/></a></li>
                     <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/calvin-chen-aa9139184/"><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a></li>
                     <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03"><img src="https://img.icons8.com/dusk/64/000000/github.png"/></a></li>
                     <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/calvinchen8/"><img src="https://img.icons8.com/color/48/000000/instagram.png"/></a></li>
                  </ul>
               </div>
            </div>

            </div>
         </header>
      );
   }
}

export default Header;
