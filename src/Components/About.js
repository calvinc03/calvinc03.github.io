import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class About extends Component {
  render() {
   return (
      <section id="about">
         <Fade bottom>
         <div className="row">
            <img className="profile-pic"  src="https://www.dropbox.com/s/jshryg9mumwquex/IMG_9504.JPG?raw=1" alt="Calvin Chen Profile Pic" />
            <div className="about-info">
               <h2>About Me</h2>
               <p>As a student at the <b><a href="https://www.ubc.ca/">University of British Columbia</a></b>, I am passionate 
                  about learning, exploring and developing new technologies in this ever evolving industry. I enjoy problem solving 
                  and identifying areas in which we can further enhance our daily lives with software applications. <br/> <br/>
                  Through my most recent internship at <b><a href="https://www.eventbase.com/">Eventbase</a></b>, I have learned 
                  how versatile apps and various software can be for end users. My goal is to further develop applications so 
                  that people of all ages will have the same ease and versatility in their everyday use.
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
                     <a href="https://www.dropbox.com/s/ttjdcdhye62kdl0/Internship%20Resume.pdf?raw=1" target="_blank" rel="noopener noreferrer" className="button">View Resume</a>
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
