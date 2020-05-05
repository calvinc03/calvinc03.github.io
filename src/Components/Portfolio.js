import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <h1>Projects</h1>
          <ul className="projects">
            <li>
              <img className="project-pic" src="https://img.icons8.com/bubbles/500/000000/discord-logo.png" alt="discord-bot"/>
              <div className="project-info">
                <h3>Discord Bot</h3>
                <p>A client bot to enhance the daily functions and messaging platform of the Discord Application. 
                  The bot can perform multiple operations such as helping people decide where to eat, playing music and responding to certain messages.</p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03/Discord-Bot"><img src="https://img.icons8.com/material-sharp/48/000000/github.png" alt="github"/></a>
                <div className="language-container">
                  <span className="languages">JavaScript</span>
                </div>
              </div>
            </li>
            <li>
              <img className="project-pic" src="https://img.icons8.com/office/480/000000/ftp.png" alt="ftp"/>
              <div className="project-info">
                <h3>FTP Server</h3>
                <p>
                  A simple FTP server application that takes a file from UBC server and transfers it to your local computer. The server follows
                  RFC 959 protocol and implements most of the basic responses.
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03/FTP-Application"><img src="https://img.icons8.com/material-sharp/48/000000/github.png" alt="github"/></a>
                <div className="language-container">
                  <span className="languages">C</span>
                  <span className="languages">Server Application</span>
                </div>
              </div>
            </li>
            <li>
              <img className="project-pic" src="https://img.icons8.com/bubbles/500/000000/bus.png" alt="bus"/>
              <div className="project-info">
                <h3>Buses R Us</h3>
                <p>
                  An Android Bus Application that allows the user to find their nearest stop using Google Maps API. The application retrieves
                  all the bus times and bus routes from the Translink API and presents it in a user-friendly manner for any given stop.
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03/Bus-Application"><img src="https://img.icons8.com/material-sharp/48/000000/github.png" alt="github"/></a>
                <div className="language-container">
                  <span className="languages">Java</span>
                  <span className="languages">xml</span>
                  <span className="languages">Android Application</span>
                </div>
              </div>
            </li>
          </ul> 
        </div>
      </section>
    );
  }
}

export default Portfolio;
