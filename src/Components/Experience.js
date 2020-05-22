import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Experience extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: "education",
      CPSC210: false,
      CPSC320: false,
      CPSC340: false,
      CPSC317: false
    }
  }

  openTab(tabName) {
    this.setState({
      tabs: tabName
    });
  } 

  changeView(course) {
    if (course === "CPSC210") {
      const rev = !this.state.CPSC210;
      this.setState({ CPSC210: rev});
    } else if(course === "CPSC320") {
      const rev = !this.state.CPSC320;
      this.setState({ CPSC320: rev});
    } else if(course === "CPSC340") {
      const rev = !this.state.CPSC340;
      this.setState({ CPSC340: rev});
    } else if(course === "CPSC317") {
      const rev = !this.state.CPSC317;
      this.setState({ CPSC317: rev});
    }
  }

  render() {
    const {tabs, CPSC210, CPSC320, CPSC340, CPSC317} = this.state;
    return (
      <section id="resume">
        <Fade bottom >
        <div className="row">
          <ul className="tab">
            <li className={tabs === "education"? "tablinks active" : "tablinks"} onClick={() => this.openTab("education")}>Education<div className="underline"></div></li>
            <li className={tabs === "work"? "tablinks active" : "tablinks"} onClick={() => this.openTab("work")}>Work<div className="underline"></div></li>
            <li className={tabs === "skills"? "tablinks active" : "tablinks"} onClick={() => this.openTab("skills")}>Skills<div className="underline"></div></li>
          </ul>

          <div className={tabs === "education"? "tabcontent active" : "inactive"} id="education">  
            <div>
              <h3 className="info-location">University of British Columbia</h3>
              <p className="info"> 
                <em className="title"> Bachelors of Science </em>
                <span>&bull;</span>
                <span className="date">Expected Graduation: 2021</span>
              </p>
              <button type="button" className="expand" onClick={() => this.changeView("CPSC210")}>CPSC 210 - Software Construction</button>
              <div className={CPSC210? "courses" : "inactive"}>
                <p>Developed knowledge of Object Oriented Programming concepts such as Inheritance classes and encapsulation through program design using Java and gained elementary understanding of UI through the usage of simple functions and data types to create a mobile application for Android</p>
              </div>
              <button type="button" className="expand" onClick={() => this.changeView("CPSC320")}>CPSC 320 - Intermediate Algorithms and Data Structures</button>
              <div className={CPSC320? "courses" : "inactive"}>
                <p>Designed programs to reduce the time complexity of polynomial time algorithms through dynamic programming and developed an intermediate understanding of graph theory and their algorithms to model real life problems through the reduction of known problems</p>
              </div>
              <button type="button" className="expand" onClick={() => this.changeView("CPSC340")}>CPSC 340 - Data Mining and Machine Learning</button>
              <div className={CPSC340? "courses" : "inactive"}>
                <p>Created collaborative filtering and content-based model to predict user-item ratings for Amazon API and developed an understanding on deep learning models and optimization techniques by creating models to predict handwritten digits from MNIST database</p>
              </div>
              <button type="button" className="expand" onClick={() => this.changeView("CPSC317")}>CPSC 317 - Internet Computing</button>
              <div className={CPSC317? "courses" : "inactive"}>
                <p>Explored the Internet protocol stack and the responsibilities of each layer while examining a wide range of topics including data loss, reliability, performance and secure networks through the creation of a File Transfer Protocol Program in C.</p>
              </div>
            </div>
          </div>


        <div className={tabs === "work"? "tabcontent active" : "inactive"} id="work">
          <div>
            <h3 className="info-location">Eventbase Technology</h3>
            <p className="info"> 
              <em className="title"> Quality Assurance Engineer Intern</em>
              <span>&bull;</span>
              <span className="date">July 2019 - April 2020</span>
            </p>
            <ul className="work-info">
              <li>
                Designed test cases using Appium driver and pytest tools to test the functionality of our backend, frontend and mobile UI features through every product release
              </li>
              <li>
                Worked in an agile environment with project managers and developers to verify and deploy our products onto the app store
              </li>
              <li>
                Worked on automated tools that utilizes databases in our test cases to generalize and perform automated tests on live apps
              </li>
            </ul>
          </div>
        </div>



        <div className={tabs === "skills"? "tabcontent active" : "inactive"} id="skills">
          <ul className="skills">
            <li>
              <em>git</em>
              <div className="skills-bar">
                <div className="skills-bar-color" style={{width: '70%'}} ></div>
              </div>
            </li>
            <li>
              <em>python</em>
              <div className="skills-bar">
                <div className="skills-bar-color" style={{width: '95%'}} ></div>
              </div>
            </li>
            <li>
              <em>java</em>
              <div className="skills-bar">
                <div className="skills-bar-color" style={{width: '90%'}} ></div>
              </div>
            </li>
            <li>
              <em>javascript</em>
              <div className="skills-bar">
                <div className="skills-bar-color" style={{width: '70%'}} ></div>
              </div>
            </li>
            <li>
              <em>html/css</em>
              <div className="skills-bar">
                <div className="skills-bar-color" style={{width: '75%'}} ></div>
              </div>
            </li>
            <li>
              <em>c/c++</em>
              <div className="skills-bar">
                <div className="skills-bar-color" style={{width: '65%'}} ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>  
      </Fade>
    </section>
    );
  }
}

export default Experience;
