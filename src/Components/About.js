import React, { Component } from 'react';

class About extends Component {
  render() {
   return (
      <section id="about">
         <div className="row">
            <div className="about-pic">
               {/*Need to replace photo here*/}
               <img className="profile-pic"  src="https://www.dropbox.com/s/cd773atqe4i7b08/profile.jpg?raw=1" alt="Calvin Chen Profile Pic" />
            </div>
            <div className="about-info">
               <h2>About Me</h2>
               <p>As a student of UBC, I am constantly honing my skills in software and web development. Insert text about how I am a 
                  hardworking individual and that I am developing skills as this industry is constantly evolving. <br/> <br/>
                  In my free time, I have no idea what to write but I'm just filling in the space rn. My profile pic needs changing too :(
               </p>
               <div className="row">
                  <div className="contact-details">
                     <h2>Contact Details</h2>
                     <p className="contact">
                        <span>Calvin Chen</span><br /><br />
                        <a href="tel:604-218-7779">(604) 218-7779</a><br />
                        {/*Have it so that clicking on the phone would open phone app*/}
                        <a href="mailto:chencalvin.15@gmail.com">chencalvin.15@gmail.com</a>
                     </p>
                  </div>
                  <div className="download">
                     {/*Figure something out with this as my resume is a word doc. Could probably still work*/}
                     <a href="https://docs.google.com/document/d/1xxoSXlCWQ0m9eIiHT-5xeqStrqWsVt-LZKD0Tv4bxpk/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="button">View Resume</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}

export default About;
