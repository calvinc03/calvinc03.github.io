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
        <ul className="social">
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/calvin.chen.125"><img src="https://img.icons8.com/doodle/48/000000/facebook-new.png" alt="facebook"/></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/calvin-chen-aa9139184/"><img src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png" alt="linkedin"/></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03"><img src="https://img.icons8.com/doodle/48/000000/github--v1.png" alt="github"/></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/calvinchen8/"><img src="https://img.icons8.com/doodle/48/000000/instagram-new.png" alt="instagram" /></a></li>
        </ul>
        <p>This was written in React JS by Calvin Chen</p>
      </footer>
    );
  }
}

export default Footer;
