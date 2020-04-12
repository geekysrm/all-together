import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import Loading from "../Loader";

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 20.951665800000004,
      longitude: 85.0985236,
    };
  }

  componentDidMount() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (position) =>
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        (error) => error
      );
    }
  }

  render() {
    const { longitude, latitude } = this.state;

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{
          height: "100%",
          width: "100%",
        }}
        {...(window.navigator.geolocation && {
          initialCenter: {
            lng: longitude,
            lat: latitude,
          },
        })}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAP_API_KEY,
  LoadingContainer: Loading,
})(Maps);
