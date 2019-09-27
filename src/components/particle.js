import React, { Component } from 'react';
import Particles from 'react-particles-js';


class Particle extends Component {
  render() {
    return (
      <div class="bg-particles">
        <Particles params={{
          "fps_limit": 28,
            "particles": {
                "number": {
                    "value": 300,
                    "density": {
                        "enable": true,
                        "value_area": 1000
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 100,
                    "opacity": 0.4
                },
                "move": {
                    "speed": 1
                },
                "opacity": {
                    "anim": {
                        "enable": true,
                        "opacity_min": 0.05,
                        "speed": 2,
                        "sync": false
                    },
                    "value": 0.4
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
            }
        }}/>
      </div>
    )
  }
}

export default Particle;
