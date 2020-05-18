import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="button-top">
          <a href="#home">
            <img src="https://img.icons8.com/plasticine/100/000000/thick-arrow-pointing-up.png" alt="arrow"/>
          </a>
        </div>
        <div className="footer-contact">
          <p>You can find me at</p>
          <ul className="footer-social">
            <li><img src="https://img.icons8.com/plasticine/100/000000/phone.png" alt="phone"/><a href="tel:604-218-7779">(604) 218-7779</a></li>
            <li><img src="https://img.icons8.com/plasticine/100/000000/gmail.png" alt="gmail"/><a href="mailto:chencalvin.15@gmail.com">chencalvin.15@gmail.com</a></li>
            <br/>
            <li><img src="https://img.icons8.com/doodle/48/000000/facebook-new.png" alt="facebook"/><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/calvin.chen.125">calvin.chen.125</a></li>
            <li><img src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png" alt="linkedin"/><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/calvin-chen-aa9139184/">calvin.chen</a></li>
            <li><img src="https://img.icons8.com/doodle/48/000000/github--v1.png" alt="github"/><a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03">calvinc03</a></li>
            <li><img src="https://img.icons8.com/doodle/48/000000/instagram-new.png" alt="instagram" /><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/calvinchen8/">calvinchen8</a></li>
          </ul>
        </div>
        <p>This was written in React JS by Calvin Chen</p>
      </footer>
    );
  }
}

export default Footer;
