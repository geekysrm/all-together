import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Loading from "../Loader";

class Maps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			latitude: 0,
			longitude: 0,
		};
	}

	componentDidMount() {
		if (window.navigator.geolocation) {
			window.navigator.geolocation.getCurrentPosition(
				(position) => {
					this.setState({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					});
				},
				(error) => error
			);
		}

		this.setState({
			heatmap: {
				positions: [
					{ lat: 20.258, lng: 85.56 },
					{ lat: 20.268, lng: 85.55 },
				],
				options: {
					radius: 20,
					opacity: 0.6,
				},
			},
		});
	}

	renderShopMarkers = () => {
		return (
			this.props.shops &&
			this.props.shops.map((shop) => {
				return (
					<Marker
						key={shop.id}
						title={shop.shopName}
						name={shop.shopName}
						position={{
							lat: shop.lat,
							lng: shop.lng,
						}}
						onClick={() => {
							this.props.history.push(`/ask-shop/${shop.id}`);
						}}
					/>
				);
			})
		);
	};

	render() {
		const { longitude, latitude } = this.state;
		console.log(this.props.shops);
		return (
			<div className="col-md-12">
				<Map
					visible={true}
					google={this.props.google}
					zoom={17}
					style={{
						height: "600px",
						width: "1200px",
						marginLeft: "8%",
					}}
					heatmapLibrary={true}
					heatmap={this.state.heatmap}
					{...(window.navigator.geolocation && {
						initialCenter: {
							lng: longitude,
							lat: latitude,
						},
						center: {
							lat: latitude,
							lng: longitude,
						},
					})}
				>
					<Marker
						title={"Your Home"}
						name={"Home"}
						position={{
							lat: this.state.latitude,
							lng: this.state.longitude,
						}}
					/>
					{this.renderShopMarkers()}
				</Map>
			</div>
		);
	}
}

export default compose(
	firestoreConnect((props) => {
		return [
			{
				collection: "shops",
			},
		];
	}), // or { collection: 'users' }
	connect((state, props) => ({
		shops: state.firestore.ordered.shops,
	}))
)(
	GoogleApiWrapper({
		apiKey: process.env.REACT_APP_GMAP_API_KEY,
		LoadingContainer: Loading,
	})(withRouter(Maps))
);
