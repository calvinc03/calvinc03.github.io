import React, { Component } from 'react';

class Intro extends Component {
   render() {
      return (
        <div id="intro-screen">
            <div className="intro-box">
                <div className="box-top"></div>
                <div className="box-left"></div>
                <div className="box-right"></div>
                <div className="box-bottom"></div>
                <h1>Calvin Chen</h1>
            </div>
            <h2>Website Portfolio</h2>
        </div>
      );
   }
}

export default Intro;