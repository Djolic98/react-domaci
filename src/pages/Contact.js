import React, { Component } from 'react';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import Slika from '../components/Slika.js';
import Forma from '../components/Form.js';


class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slika title="Contact" subtitle="Please contact us here!"/>
        <Forma/>
        <Footer />
      </div>
    );
  }
}

export default About
