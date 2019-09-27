import Particles from 'react-particles-js';
import React, { Component } from 'react';
import {Card, CardTitle, CardActions, Button} from 'react-mdl';
import { ReactComponent as Icon } from './file.svg';

class Main_page extends Component {
  componentDidMount() {
    var none1 = document.getElementsByClassName("none")[0];
    var none2 = document.getElementsByClassName("none")[1];
    none1.style.display = "inline";
    none2.style.display = "inline";

    var favorites = document.getElementsByClassName("favorites")[0];
    favorites.style.display = "none";

  }


  render() {
    return(
      <div class="background">
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
                      "opacity": 0.4,
                      "color": "#111A44"
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
        <div class="top">
          <div class="container">
            <div class="title">DAIMŌ</div>
            <div class="description">Check Out All the Undervalued Properties in Seoul</div>
            <a href="#docs">
              <button class="button">LEARN MORE</button>
            </a>
          </div>
        </div>
        <div class="documentation" id="docs">
        <h1 class="msg">Get Started with DAIMŌ</h1>
        <div class="cards">
          <div class="card">
            <Icon class="icon"/>
            <h3>Explore DAIMŌ Documentation</h3>
            <div class="card-description">
              <p>
                Learn what we offer and how to make use of it.
              </p>
            </div>
            <a href="https://github.com/moonjae/Daimo">
              <span class="learnmore">Learn More</span>
            </a>
          </div>
          <div class="card">
            <Icon class="icon"/>
            <h3>Learn How It Works</h3>
            <div class="card-description">
              <p>
                DAIMŌ employs various machine learning techniques.
              </p>
            </div>
            <a href="https://github.com/moonjae/Daimo">
              <span class="learnmore">Learn More</span>
            </a>
          </div>
          <div class="card">
            <Icon class="icon"/>
            <h3>Placeholder Placeholder</h3>
            <div class="card-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <a href="https://github.com/moonjae/Daimo">
              <span class="learnmore">Learn More</span>
            </a>
          </div>
        </div>

        </div>
    </div>
    )
  }
}

export default Main_page;
