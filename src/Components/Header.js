import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import './css/layout.css'

class Header extends Component {
   constructor(props) {
      super(props);
  
      this.state = {
        prevScrollpos: window.pageYOffset,
        visible: true,
        menu: false
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

   changeMenu() {
       this.setState({
          menu: !this.state.menu
       })
   }

   showMenu() {
      this.setState({
         menu: true
      })
   }

   hideMenu() {
      this.setState({
         menu: false
      })
   }

   render() {
      const { visible, menu } = this.state
      return (
         <header id="home">
            <div className="header-container">
            <nav id="nav-wrap" onMouseLeave={() => this.hideMenu()}>
               <div className={visible? "nav" : "inactive-nav"} >
                  <a className={menu? "inactive" : "homebutton"} href="#home">Calvin Chen</a>
                  <ul className={menu? "menu-bar" : "inactive"}>
                     <div className="menu-animation"></div>
                     <li><a className="smoothscroll" href="#about">ABOUT</a></li>
                     <li><a className="smoothscroll" href="#resume">EXPERIENCE</a></li>
                     <li><a className="smoothscroll" href="#portfolio">PROJECTS</a></li>
                  </ul>
                  <input 
                     className="menu-button" 
                     type="image" 
                     src={menu? "https://img.icons8.com/material/40/000000/cancel--v1.png" : "https://img.icons8.com/ios/40/000000/xbox-menu.png"} 
                     alt="menu" 
                     onMouseEnter={() => this.showMenu()}
                     onClick={() => this.changeMenu()}
                  ></input> 
               </div>
               
            </nav>

            <div className="row-banner">
               <div className="banner-text">
                  <Typewriter
                     options={{
                        strings: ['Здравствуйте', 'Hello', 'Hi', 'Bonjour', 'Hola', '你好', 'Salve', 'שלום', 'Сайн уу', 
                        'Ahoj', '여보',  'こんにちは', 'Zdravo', 'Χαίρετε', 'નમસ્તે', 'Halló', 'Szia'],
                        autoStart: true,
                        loop: true
                     }}
                  />
                  <h1>
                     I'm Calvin Chen.
                  </h1>
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
            </div>
         </header>
      );
   }
}

export default Header;
