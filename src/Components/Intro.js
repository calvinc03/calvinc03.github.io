import React, { Component } from 'react';
import './css/layout.css'

class Intro extends Component {
   render() {
      return (
        <div id="intro-screen">
            <div className="number-counter">
                <div className="first-num">1</div>
                <div className="box second-number"></div>
                <div className="box third-number"></div>
                <div className="percent">%</div>
            </div>
            <div className="mario-gif">
                <div className="mario-jump">
                    <div className="mario-run">
                        <img src="https://i.imgur.com/QxcssS5.gif" alt="walking mario" />
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <div className="moving-bar"></div>
                <h2>JUMP</h2>
            </div>
        </div>
      );
   }
}

export default Intro;