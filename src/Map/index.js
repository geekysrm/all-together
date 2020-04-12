import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import Loading from "../Loader";

class Maps extends Component {
  constructor(props) {
    super(props);
    this.placesServices = null;
    this.autocompleteServices = null;
    this.state = {
      latitude: 20.378425,
      longitude: 85.825146,
      markers: [],
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

    if (window.google.maps.places.PlacesServiceStatus) {
      this.placesServices = window.google.maps.places.PlacesService;
    }
    if (window.google.maps.places.AutocompleteService) {
      this.autocompleteServices = window.google.maps.places.AutocompleteService;
    }
  }

  render() {
    const { longitude, latitude, markers } = this.state;

    return (
      <>
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
          center={{
            lat: latitude,
            lng: longitude,
          }}
        >
          {markers.map((mark) => (
            <pre>{JSON.stringify(mark, null, 2)}</pre>
          ))}
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAP_API_KEY,
  LoadingContainer: Loading,
})(Maps);
