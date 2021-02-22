import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from './actions/counter'
import { toggle } from './actions/lightswitch'
import './func.css';

class Func extends Component {

  incrementCounter = () => {
    this.props.increment()
  }

  toggleLightSwitch = () => {
    console.log('CHECK')
    this.props.toggle()
  }

  render() {
    console.log(this.props)
    const { lightswitch } = this.props

    const background = lightswitch ? 'white' : 'rgb(181, 208, 240)';

    return (
      <div className="Func" style={{ backgroundColor: background }}>
        <header className="Func-header">

          <h1 className="Func-title">Weather website
          <br/>
          Read today's weather forecast.</h1>
        </header>
        <p className="Func-intro">
          <br/>
          You can adjust the background!
         <br/>
          <button className="light" onClick={this.toggleLightSwitch}>LIGHT</button>
          <div className="container">
            <br/>
            <h2>Today</h2>
            <p>
            Today: A chance of rain before 1pm, then scattered showers, mainly between 1pm and 2pm. Cloudy, with a high near 41. Southwest wind around 15 mph, with gusts as high as 26 mph. Chance of precipitation is 50%. New precipitation amounts of less than a tenth of an inch possible.
            <br/>
            Tonight: Mostly cloudy, with a low around 32. Southwest wind 11 to 13 mph, with gusts as high as 23 mph.
          </p>
            <p>
            Tuesday: A chance of rain and snow showers before 11am, then a slight chance of rain showers between 11am and 4pm. Mostly cloudy, with a high near 40. West wind 11 to 14 mph, with gusts as high as 29 mph. Chance of precipitation is 30%. Little or no snow accumulation expected.
          </p>
          </div>
        </p>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    lightswitch: state.lightswitch
  }
}

export default connect(mapStateToProps, { increment, toggle })(Func)
