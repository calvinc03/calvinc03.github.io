import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class About extends Component {
  render() {
   return (
      <section id="about">
         <Fade bottom>
         <div className="row">
            <img className="profile-pic"  src="https://www.dropbox.com/s/kfs88p540uu87ao/profile.jpg?raw=1" alt="Calvin Chen Profile Pic" />
            <div className="about-info">
               <h2>About Me</h2>
               <p>As a student at the <b><a href="https://www.ubc.ca/">University of British Columbia</a></b>, I am passionate 
                  about learning, exploring and developing new technologies in this ever evolving industry. I enjoy problem solving 
                  and identifying areas in which we can further enhance our daily lives with software applications. <br/> <br/>
                  Currently at <b><a href="https://rewind.com/">Rewind</a></b>, I have learned 
                  how integral backing up data is for for e-commerce business owners. My goal is to keep developing applications and services
                  to allow online owners to securely manage their products.
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
                     <a href="https://www.dropbox.com/s/1i81dpocz4dtf79/Resume.pdf?raw=1" target="_blank" rel="noopener noreferrer" className="button">View Resume</a>
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
