import React, { Component } from 'react';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import Slika from '../components/Slika.js';
import Func from '../components/func.js';
import {Provider} from 'react-redux'
import store from '../store'


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slika title="Welcome" subtitle="Have a nice day!" />
        <Provider store={store}>
		      <Func />
  	    </Provider>
        <Footer />
      </div>
    );
  }
}

export default Home
