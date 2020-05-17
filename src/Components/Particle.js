import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Particle extends Component {

  render() {
    return (
            <Particles 
              width={"100%"}
              height={"100%"}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
                params={{
                "particles": {
                  "number": {
                    "value": 20,
                    "density": {
                      "enable": false,
                      "value_area": 800
                    }
                  },
                  "shape": {
                    "type": "image",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "https://img.icons8.com/office/80/000000/code.png",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.8,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1.0942760942760925,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 10,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 5.050505050505043,
                      "size_min": 4.208754208754202,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": true,
                      "rotateX": 1744.4758265492591,
                      "rotateY": 1162.9838843661728
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "bubble"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "repulse"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 500,
                      "size": 16,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.5
                    }
                  }
                },
                "retina_detect": true
              }} />
    );
  }
}

export default Particle;