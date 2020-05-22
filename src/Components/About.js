import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class About extends Component {
  render() {
   return (
      <section id="about">
         <Fade bottom>
         <div className="row">
            <img className="profile-pic"  src="https://www.dropbox.com/s/cd773atqe4i7b08/profile.jpg?raw=1" alt="Calvin Chen Profile Pic" />
            <div className="about-info">
               <h2>About Me</h2>
               <p>As a student of UBC, I am constantly honing my skills in software and web development. Insert text about how I am a 
                  hardworking individual and that I am developing skills as this industry is constantly evolving. <br/> <br/>
                  In my free time, I have no idea what to write but I'm just filling in the space rn. My profile pic needs changing too :(
               </p>
               <div className="row-contact">
                  <div className="contact-details">
                     <h2>Contact Details</h2>
                     <p className="contact">
                        <a href="tel:604-218-7779">(604) 218-7779</a><br />
                        <a href="mailto:chencalvin.15@gmail.com">chencalvin.15@gmail.com</a>
                     </p>
                  </div>
                  <div className="download">
                     {/* TODO maybe export as pdf*/}
                     <a href="https://docs.google.com/document/d/1xxoSXlCWQ0m9eIiHT-5xeqStrqWsVt-LZKD0Tv4bxpk/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="button">View Resume</a>
                  </div>
               </div>
            </div>
         </div>
         </Fade>
      </section>
    );
  }
}

export default About;
