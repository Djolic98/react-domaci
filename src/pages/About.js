import React, { Component } from 'react';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import Slika from '../components/Slika.js';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slika title="About Us!" subtitle="This page is all about us!"/>
        <div className="container">
          <h2>About</h2>
          <p>
          The Earth's weather functions as an interdependent system. For example, a hurricane in the Atlantic has the ability to influence the distribution of pressure formations in Europe. Occasionally, it may even make its way to Europe itself as a post-tropical storm. The Ventusky application allows for the illustration of the interdependence of the entire system, displaying the development of pressure, wind, cloud cover, precipitation, and temperature on the map.

          For visualisation of wind data, we utilise current lines that are used to illustrate the movement of particles in liquids. Air and liquid have many similar physical properties, and, as published by Fernanda Viégas and Martin Wattenber (Hint.fm, 2012), current lines are suitable for illustrating wind as well. Because of this, the map depicts wonderful formations illustrating pressure lows that draw in the air around them. We have created an entirely new system of displaying waves. Through the use of animated arcs, our visualisation clearly differentiates the direction of movement and height of both wind waves and swells. For the other meteorological elements, we chose colour scales that appropriately illustrate precipitation, air pressure, and temperature. The colours correspond with the feeling that the given weather phenomena evokes in us. For temperature, blue illustrates cool weather while dark red depicts hot desert air. For precipitation, we concentrated on the danger associated with it. Blue colours represent low precipitation totals that will not result in floods. Orange and red hues, on the other hand, are dangerous and may bring flooding.
          </p>
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default About
