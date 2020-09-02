import React, { useState } from "react";
import Spinner from './Spinner';

class DisplaySeason extends React.Component {
  
  state = { Lat: null, Error: "" };
  componentDidMount() {

    window.navigator.geolocation.getCurrentPosition(
        (position) =>this.setState({ Lat: position.coords.latitude }),
        (err) => this.setState({ Error: err.message })
      );

  }
  render() {
    if (this.state.Error && !this.state.Lat) {
      return <div className="ui card">Error : {this.state.Error}</div>;
    }
    if (!this.state.Error && this.state.Lat) {
      return <div  className="ui card">Latitude : {this.state.Lat}</div>;
    }
    return <Spinner  message='Please allow to acces your location'/>;
  }
}

export default DisplaySeason;
