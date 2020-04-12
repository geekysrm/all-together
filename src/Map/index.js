import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import Loading from "../Loader";

class Maps extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAP_API_KEY,
  LoadingContainer: Loading,
})(Maps);
