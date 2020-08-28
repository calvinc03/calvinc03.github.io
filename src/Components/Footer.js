import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
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

// Hide or show
handleScroll = () => {
  if (window.pageYOffset >= 550) 
    this.setState({
      visible: true
    });
  else
    this.setState({
      visible: false
    });
};

render() {
    const { visible } = this.state;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    return (
      <footer>
        <div className={visible? "button-top" : "inactive"}>
          <a href="#home">
            <img className="to-top" src="https://img.icons8.com/windows/60/000000/circled-chevron-up.png"/>
          </a>
        </div>
        <div className={vw < 600? "inactive":"footer-contact"}>
          <ul className={visible? "footer-social" : "inactive"}>
            <li><a href="tel:604-218-7779"><img  src="https://img.icons8.com/color/48/000000/phone.png"/></a></li>
            <li><a href="mailto:chencalvin.15@gmail.com"><img className="mail" src="https://img.icons8.com/fluent/48/000000/gmail.png"/></a></li>
            <br/>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/calvin.chen.125"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/calvin-chen-aa9139184/"><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03"><img src="https://img.icons8.com/dusk/64/000000/github.png"/></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/calvinchen8/"><img src="https://img.icons8.com/color/48/000000/instagram.png"/></a></li>
          </ul>
        </div>
        <p>W by Calvin Chen in React JS</p>
      </footer>
    );
  }
}

export default Footer;
