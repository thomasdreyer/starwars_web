import React from 'react'
import Particles from 'react-particles-js';
import '../../App.css';


export default function Particle(){
  return(
    <Particles
      className="particless"
    params={{
      "particles": {
          "number": {
              "value": 10,
              "density": {
                  "enable": true,
                  "value_area": 8
              }
          },
          "line_linked": {
              "enable": false
          },
          "move": {
              "speed": 1,
              "out_mode": "out"
          },
          "color": {
              "value": "#fff"
          },
          "size": {
              "value": 1,
              "random": true,
              "anim": {
                  "enable": true,
                  "speed": 1,
                  "size_min": 2,
                  "sync": true
              }
          }
      },
      "retina_detect": false
    }}/>
  )
}
