import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">  
        <div className="row">
          <h1>Projects</h1>
          <ul className="projects">
          <Fade left>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03/FeastorFamine">
                <div className="hover-github"><h4>Github</h4></div>
                <img className="project-pic" src="https://media.giphy.com/media/aaOkIg770P3R4bPkCG/giphy.gif" alt="FeastorFamine"/>
              </a>
              <div className="project-info">
                <h3>Feast or Famine</h3>
                <p>A tower defense type game developed in C++ using ECS archetecture design patterns. Users can place up to 7 types of different units all with different effects.
                  Monsters run through the field using A* search to find the fastest path to the village.
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03/FirstAidEdAndroidApp"><img src="https://img.icons8.com/material-sharp/48/000000/github.png" alt="github"/></a>
                <div className="language-container">
                  <span className="languages">C++</span>
                </div>
              </div>
            </li>
          </Fade>  
          <Fade left>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.calvinchen.firstaidlearning">
                <div className="hover-github"><h4>Google Play Store</h4></div>
                <img className="project-pic" src="https://media.giphy.com/media/JsbQHL5JHHi0PbM84m/giphy.gif" alt="discord-bot"/>
              </a>
              <div className="project-info">
                <h3>First Aid Study</h3>
                <p>An individually developed Android application on Google Play Store to help users get a better understanding of First Aid skills and techniques. 
                  The app allows users to read passages and test themselves through quizzes.</p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03/FirstAidEdAndroidApp"><img src="https://img.icons8.com/material-sharp/48/000000/github.png" alt="github"/></a>
                <div className="language-container">
                  <span className="languages">Kotlin</span>
                </div>
              </div>
            </li>
            </Fade>
            <Fade left>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://formtracker776.netlify.app/">
                <div className="hover-github"><h4>Website</h4></div>
                <img className="project-pic" src="https://media.giphy.com/media/lQ0ICnM0mA58EtKrMW/giphy.gif" alt="discord-bot"/>
              </a>
              <div className="project-info">
                <h3>Form and Payment Tracker</h3>
                <p>
                  A front and backend appllication that allows admin users to track members' forms and payments. Basic authentication is used to ensure
                  privacy and automated emails are sent to members that have overdue payments and forms.
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03/emails_sja"><img src="https://img.icons8.com/material-sharp/48/000000/github.png" alt="github"/></a>
                <div className="language-container">
                  <span className="languages">JavaScript</span>
                  <span className="languages">MySQL</span>
                  <span className="languages">Python</span>
                </div>
              </div>
            </li>
            </Fade>
            <Fade left>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03/Discord-Bot">
                <div className="hover-github"><h4>Github</h4></div>
                <img className="project-pic" src="https://media.giphy.com/media/igsVJZ6i3ob4y0jKgU/giphy.gif" alt="discord-bot"/>
              </a>
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
            </Fade>
            <Fade left>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03/FTP-Application">
                <div className="hover-github"><h4>Github</h4></div>
                <img className="project-pic" src="https://media.giphy.com/media/lo4hWSPgBJLlUjGYeK/giphy.gif" alt="ftp"/>
              </a>
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
            </Fade>
            <Fade left>
            <li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/calvinc03/Bus-Application">
              <div className="hover-github"><h4>Github</h4></div>
              <img className="project-pic" src="https://media.giphy.com/media/LSdd8cnhNgFGGZkpyJ/giphy.gif" alt="bus"/>
            </a>
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
            </Fade>
          </ul> 
        </div>
      </section>
    );
  }
}

export default Portfolio;
